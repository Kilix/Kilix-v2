# set default shell
SHELL := $(shell which bash)
GROUP_ID = $(shell id -g)
USER_ID = $(shell id -u)
GROUPNAME =  dev
USERNAME = dev
HOMEDIR = /home/$(USERNAME)

ENV = /usr/bin/env
DKC = docker-compose
DK = docker
# default shell options
.SHELLFLAGS = -c

.SILENT: ;               # no need for @
.ONESHELL: ;             # recipes execute in same shell
.NOTPARALLEL: ;          # wait for this target to finish
.EXPORT_ALL_VARIABLES: ; # send all vars to shell
default: all;   # default target

.PHONY: all .baseinstall install reset vendors composer npm test gitversion

all: install

# Install targets
install: gitversion vendors cache assets

cache:
	rm -rf cache/*

assets: grunt

grunt:
	node_modules/.bin/grunt

# Vendors install targets
vendors: npm composer

vendors-ci: npm composer-ci

composer:
	bash bin/composer.sh install

composer-ci:
	bash bin/composer.sh install --prefer-dist

npm:
	npm install --no-spin --unsafe-perm
	# npm install --quiet --progress=false --unsafe-perm

gitversion:
	git-app-version --format json --output version

# unit and functional tests
test:
	rm -rf var/cache/test/*
	php bin/phpunit -c app

test-cov:
	php bin/phpunit -c app --coverage-text --colors=never

# unit tests with docker
# dk-build:
# 	$(ENV) $(DKC) build
#
# dk-rm: dk-stop _dk-rm
#
# _dk-rm:
# 	$(ENV) $(DKC) rm -f -v
#
# dk-stop:
# 	$(ENV) $(DKC) stop
#
# dk-vendor:
# 	$(ENV) $(DKC) run --rm -e GROUP_ID=$(GROUP_ID) -e USER_ID=$(USER_ID) -e GROUPNAME=$(GROUPNAME) -e USERNAME=$(USERNAME) -e HOMEDIR=$(HOMEDIR) php make vendors-ci
#
# dk-test:
# 	$(ENV) $(DKC) run --rm -e GROUP_ID=$(GROUP_ID) -e USER_ID=$(USER_ID) -e GROUPNAME=$(GROUPNAME) -e USERNAME=$(USERNAME) -e HOMEDIR=$(HOMEDIR) php make test
#
# dk-deploy:
# 	$(ENV) $(DKC) run --rm -e REVISION=$(CI_BUILD_REF) capistrano cap $(CAP_DEPLOY_ENV) deploy
