PATH := $(shell pwd)/bin:$(PATH)

install:
	cp -p docker.env .env
	npm install

build:
	npx tsc

test:
	npx jest
