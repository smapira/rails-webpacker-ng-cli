# rails-webpacker-ng-cli

Rails 5.1 beta on webpacker and angular cli.
[![CircleCI](https://circleci.com/gh/smapira/rails-webpacker-ng-cli.svg?style=svg)](https://circleci.com/gh/smapira/rails-webpacker-ng-cli)

## History Command line :

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
    bundle exec rails s

## Reporting

| CMD       | webpacker | NgCli |
| --------- | --------- | ----- |
| Run build |  OK| Conflict |
| Run ng    || Conflict|
| Run test  ||  OK   |
| Run e2e   ||  Conflict  |
| Run lint  ||  OK  |

## Running the tests

### Break down into unit tests

based on ngcli

    npm run test

### And coding style tests

based on ngcli

    npm run lint

## Built With

-   [Ruby on Rails](http://rubyonrails.org/) - The web framework used
-   [angular-cli](https://github.com/angular/angular-cli) - CLI tool for Angular used

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/smapira/rails-webpacker-ng-cli/tags).

## Authors

-   **smapira** - _Initial work_ - [smapira](https://github.com/smapira)

See also the list of [contributors](https://github.com/smapira/rails-webpacker-ng-cli/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
