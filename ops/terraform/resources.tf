variable "access_key" {}
variable "secret_key" {}

variable "region" {
  default = "us-east-1"
}

variable "domain" {
  default = "elcarritofoods.com"
}

locals {
  domain_www     = "www.${var.domain}"
  domain_dev     = "dev.${var.domain}"
  domain_dev_www = "www.dev.${var.domain}"
}

provider "aws" {
  region     = "${var.region}"
  secret_key = "${var.secret_key}"
  access_key = "${var.access_key}"
}

resource "aws_s3_bucket" "log_bucket" {
  bucket = "elcarritofoods-logs"
  acl    = "log-delivery-write"
}

resource "aws_s3_bucket" "lambdas" {
  bucket = "elcarritofoods-lambdas"
}

resource "aws_s3_bucket" "website" {
  bucket = "${var.domain}"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket" "website_dev" {
  bucket = "${local.domain_dev}"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket" "website_www" {
  bucket = "${local.domain_www}"
  acl    = "public-read"

  website {
    redirect_all_requests_to = "${var.domain}"
  }
}

resource "aws_s3_bucket" "website_dev_www" {
  bucket = "${local.domain_dev_www}"
  acl    = "public-read"

  website {
    redirect_all_requests_to = "${local.domain_dev}"
  }
}

data "aws_acm_certificate" "cert_global" {
  domain = "elcarritofoods.com"
}

resource "aws_cloudfront_distribution" "website_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.website.website_endpoint}"
    origin_id   = "elcarritofoods_website"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled         = true
  is_ipv6_enabled = true

  logging_config {
    bucket = "${aws_s3_bucket.log_bucket.bucket_domain_name}"
    prefix = "website"
  }

  aliases = ["${var.domain}", "${local.domain_www}"]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "elcarritofoods_website"
    compress         = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  viewer_certificate {
    acm_certificate_arn      = "${data.aws_acm_certificate.cert_global.arn}"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1"
  }
}

resource "aws_route53_zone" "elcarritofoods" {
  name = "${var.domain}."
}

resource "aws_route53_record" "zoho" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  ttl     = "300"
  name    = "zb14953803.elcarritofoods.com."
  type    = "CNAME"
  records = ["zmverify.zoho.com"]
}

resource "aws_route53_record" "mail" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  ttl     = "14400"
  name    = "${var.domain}"
  type    = "MX"
  records = ["10 mx.zoho.com", "20 mx2.zoho.com"]
}

resource "aws_route53_record" "spf" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  ttl     = "14400"
  name    = "${var.domain}"
  type    = "TXT"
  records = ["v=spf1 include:zoho.com ~all"]
}

resource "aws_route53_record" "dkim" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  ttl     = "14400"
  name    = "zoho._domainkey.elcarritofoods.com."
  type    = "TXT"
  records = ["v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCczCTcvn3UYa3y91w4ajeMMGhOEp2gcwpY3rRoLlj2ms6RAAuRgu06FIAL06MH6ZrQAFxiXWt9KKWA1qsxLq1vOQG/q544CSWP6HE9HLtWBFImImzw8vTgJsrVAVAzTrtHwH39b9loD5ntSLVrErkpaF2mjRdp/j6QXY+zK7lwnwIDAQAB"]
}

resource "aws_route53_record" "alias" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  name    = "${var.domain}"
  type    = "A"

  alias {
    zone_id                = "${aws_cloudfront_distribution.website_distribution.hosted_zone_id}"
    name                   = "${aws_cloudfront_distribution.website_distribution.domain_name}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "aaaalias" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  name    = "${var.domain}"
  type    = "AAAA"

  alias {
    zone_id                = "${aws_cloudfront_distribution.website_distribution.hosted_zone_id}"
    name                   = "${aws_cloudfront_distribution.website_distribution.domain_name}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "www" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  name    = "www"
  type    = "A"

  alias {
    zone_id                = "${aws_cloudfront_distribution.website_distribution.hosted_zone_id}"
    name                   = "${aws_cloudfront_distribution.website_distribution.domain_name}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "aaaawww" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  name    = "www"
  type    = "AAAA"

  alias {
    zone_id                = "${aws_cloudfront_distribution.website_distribution.hosted_zone_id}"
    name                   = "${aws_cloudfront_distribution.website_distribution.domain_name}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "alias_dev" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  name    = "dev"
  type    = "A"

  alias {
    zone_id                = "${aws_s3_bucket.website_dev.hosted_zone_id}"
    name                   = "${aws_s3_bucket.website_dev.website_domain}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "cname_dev_www" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  ttl     = "14400"
  name    = "www.dev"
  type    = "CNAME"
  records = ["${aws_s3_bucket.website_dev_www.website_domain}"]
}

resource "aws_dynamodb_table" "subscribers-table" {
  name           = "Subscribers"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "Phone"
  range_key      = "OrdersCount"

  attribute {
    name = "Phone"
    type = "S"
  }

  attribute {
    name = "OrdersCount"
    type = "N"
  }
}
