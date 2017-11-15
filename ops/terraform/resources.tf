variable "access_key" {}
variable "secret_key" {}

variable "region" {
  default = "us-east-1"
}

variable "domain-root" {
  default = "elcarritofoods.com"
}

provider "aws" {
  region     = "${var.region}"
  secret_key = "${var.secret_key}"
  access_key = "${var.access_key}"
}

locals {
  domain     = "${terraform.workspace == "prod" ? "" : format("%s.", terraform.workspace)}${var.domain-root}"
  domain_www = "www.${terraform.workspace == "prod" ? "" : format("%s.", terraform.workspace)}${var.domain-root}"
}

resource "aws_s3_bucket" "log_bucket" {
  bucket = "elcarritofoods-logs"
  acl    = "log-delivery-write"
}

resource "aws_s3_bucket" "lambdas" {
  bucket = "elcarritofoods-lambdas"
}

resource "aws_s3_bucket" "website" {
  bucket = "${local.domain}"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket" "website_www" {
  bucket = "${local.domain_www}"
  acl    = "public-read"

  website {
    redirect_all_requests_to = "${local.domain}"
  }
}

resource "aws_s3_bucket" "secret-website" {
  bucket = "secret.${var.domain-root}"
  acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

data "aws_acm_certificate" "cert_global" {
  domain = "elcarritofoods.com"
}

resource "aws_s3_bucket" "secret-website_www" {
  bucket = "www.secret.${var.domain-root}"
  acl    = "public-read"

  website {
    redirect_all_requests_to = "${aws_s3_bucket.secret-website.website_domain}"
  }
}

resource "aws_cloudfront_distribution" "website_distribution" {
  origin {
    domain_name = "${aws_s3_bucket.website.bucket_domain_name}"
    origin_id   = "${terraform.workspace == "prod" ? "" : format(".%s", terraform.workspace)}_elcarritofoods_website"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  logging_config {
    bucket = "${aws_s3_bucket.log_bucket.bucket_domain_name}"
    prefix = "website"
  }

  aliases = ["${local.domain_www}"]

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${terraform.workspace == "prod" ? "" : format(".%s", terraform.workspace)}_elcarritofoods_website"
    compress         = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
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
  name = "${var.domain-root}."
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
  name    = "${var.domain-root}"
  type    = "MX"
  records = ["10 mx.zoho.com", "20 mx2.zoho.com"]
}

resource "aws_route53_record" "spf" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  ttl     = "14400"
  name    = "${var.domain-root}"
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
  name    = "${local.domain}"
  type    = "A"

  alias {
    zone_id                = "${aws_cloudfront_distribution.website_distribution.hosted_zone_id}"
    name                   = "${aws_cloudfront_distribution.website_distribution.domain_name}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "aaaalias" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  name    = "${local.domain}"
  type    = "AAAA"

  alias {
    zone_id                = "${aws_cloudfront_distribution.website_distribution.hosted_zone_id}"
    name                   = "${aws_cloudfront_distribution.website_distribution.domain_name}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "secret-alias" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  name    = "secret"
  type    = "A"

  alias {
    zone_id                = "${aws_s3_bucket.secret-website.hosted_zone_id}"
    name                   = "${aws_s3_bucket.secret-website.website_domain}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "www" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  name    = "www${terraform.workspace == "prod" ? "" : format(".%s", terraform.workspace)}"
  type    = "A"

  alias {
    zone_id                = "${aws_cloudfront_distribution.website_distribution.hosted_zone_id}"
    name                   = "${aws_cloudfront_distribution.website_distribution.domain_name}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "aaaawww" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  name    = "www${terraform.workspace == "prod" ? "" : format(".%s", terraform.workspace)}"
  type    = "AAAA"

  alias {
    zone_id                = "${aws_cloudfront_distribution.website_distribution.hosted_zone_id}"
    name                   = "${aws_cloudfront_distribution.website_distribution.domain_name}"
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "www-secret" {
  zone_id = "${aws_route53_zone.elcarritofoods.zone_id}"
  ttl     = "14400"
  name    = "www.secret"
  type    = "CNAME"
  records = ["${aws_s3_bucket.secret-website_www.website_domain}"]
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
