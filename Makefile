PATH := $(shell pwd)/bin:$(PATH)

install:
	cp -p docker.env .env
	npm install

run:
	docker-compose up -d

test:
	npx jest
