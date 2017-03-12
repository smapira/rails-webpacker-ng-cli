var merge = require('package-merge');
var fs = require('fs');

var dst = fs.readFileSync('/Users/bookair17/Documents/SourceCode/Community/rails-webpacker-ngcli/rails-webpacker-ng-cli/app/javascript/hello-ng-cli/package.json');
var src = fs.readFileSync('package.json');
fs.writeFile("package.merged.json", merge(dst,src));