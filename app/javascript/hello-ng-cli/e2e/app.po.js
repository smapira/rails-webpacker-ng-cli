"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var FrontendPage = (function () {
    function FrontendPage() {
    }
    FrontendPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    FrontendPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return FrontendPage;
}());
exports.FrontendPage = FrontendPage;
