PATH := $(shell pwd)/bin:$(PATH)

install:
	cp -n docker.env .env
	npm install

build:
	npx tsc

test:
	npx jest
