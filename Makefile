build_dev:
	bundle exec jekyll build
build_prod:
	JEKYLL_ENV=production make build_dev
deploy:
	if [ "${DEPLOY_PWD}" = "" ]; then \
		echo "Specify DEPLOY_PWD, such as: DEPLOY_PWD=haselko make deploy"; \
	else \
		ncftpput -R -u katarzy9 -p ${DEPLOY_PWD} katarzynaprzybyla.pl /domains/katarzynaprzybyla.pl/private_html _site/*; \
	fi
