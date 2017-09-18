deploy:
	npm run build
	aws s3 sync dist s3://dev.admin.elcarritofoods.com --acl "public-read"
