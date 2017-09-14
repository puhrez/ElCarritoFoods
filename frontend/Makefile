deploy:
	npm run build
	aws s3 sync dist s3://dev.elcarritofoods.com --acl "public-read"
