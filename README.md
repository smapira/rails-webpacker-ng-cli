# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## History Command line :
```
rails new rails-webpacker-ng-cli
cd rails-webpacker-ng-cli
bundle exec rails webpacker:install
bundle exec rails webpacker:install:angular
bundle exec rails g controller pages index
bin/webpack
bundle exec rails s

// create ng cli project
mv package.json package2.json
cd app/javascript
../../node_modules/.bin/ng new hello-ng-cli --style=scss
rm -fr hello-ng-cli/node_modules
cd -
mv package2.json package.json
bin/webpack

```