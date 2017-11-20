ENV ?= dev
DOMAIN_PREFIX ?= dev.

.DEFAULT_GOAL: help
.PHONY: help build push deploy

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build:	## Build for prod
	npm run generate

push: 	## Push to aws
	aws s3 sync dist s3://${DOMAIN_PREFIX}elcarritofoods.com --acl "public-read" --cache-control max-age=86400 --expires "2034-01-01T00:00:00Z"

deploy: build push ## Build for prod & push to AWS

dev:	## Run dev server
	npm run dev
