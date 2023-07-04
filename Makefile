

JEKYLL_VERSION := 3.8.5
docker_run := docker run --rm \
		--volume="$(shell pwd):/srv/jekyll:Z" \
		--publish 4000:4000 \
		-it \
		--volume="jekyll_gems_$(JEKYLL_VERSION):/usr/local/bundle" \
		--env JEKYLL_ENV \
		jekyll/jekyll:$(JEKYLL_VERSION)

install:
	bundle

build:
	JEKYLL_ENV=production $(docker_run) jekyll build

serve:
	$(docker_run) jekyll serve

deploy:
	if [ "$${DEPLOY_PWD}" = "" ]; then \
		echo "Specify DEPLOY_PWD, such as: DEPLOY_PWD=haselko make deploy"; \
	else \
		docker run --rm \
		  --env DEPLOY_PWD \
		  --volume "$(shell pwd):/deploy:Z" \
		  -w /deploy \
		  alpine \
		  sh -c "apk add --no-cache ncftp && ncftpput -v -R -u katarzy9 -p $${DEPLOY_PWD} katarzynaprzybyla.pl /domains/katarzynaprzybyla.pl/private_html _site/*"; \
	fi
