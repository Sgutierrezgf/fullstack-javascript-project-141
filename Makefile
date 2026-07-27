setup: prepare install db-migrate build

install:
	npm install

db-migrate:
	npx knex migrate:latest

build:
	npm run build

prepare:
	cp -n .env.example .env 2>/dev/null || true

start:
	npm start

start-backend:
	npm start -- --watch --verbose-watch --ignore-watch='node_modules .git .sqlite dist'

start-frontend:
	npx webpack --watch --progress

lint:
	npx eslint .

test:
	npm test -s
