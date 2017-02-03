/*global describe, it, beforeEach, afterEach */

"use strict";

let assert = require('chai').assert;

const addContext = require('mochawesome/addContext');

let SERVER_URL = 'http://localhost:8080/';
let WEB_DRIVER_SERVER_URL = 'http://localhost:4444/wd/hub';

const util = require('../data/util');

describe('Tests', function () {

    // each test should be less than 5s
    this.timeout(5e3);

    let browser;
    let webdriver = require('selenium-webdriver');
    let until = webdriver.until;
    let byCss = webdriver.By.css;

    beforeEach(() => browser = new webdriver
        .Builder()
        .usingServer(WEB_DRIVER_SERVER_URL)
        .withCapabilities({'browserName': 'chrome'})
        .build()
    );

    afterEach(() => browser.quit());

    describe('Home page', () => {

        it('Open Page', function(done) {

            browser.get(SERVER_URL);

            browser.getTitle().then(title => {
                assert(title === 'Currency Reference', 'Wrong title');
                done();
            });

            addContext(this, {
                title: 'some title',
                value: 'simple_simple simple_simple simple_simple simple_simple ' // can be anything
            });

            addContext(this, {
                title: 'MY image',
                value: 'https://statlex.github.io/img/preview/ancient-empire-strike-back.png'
            });

        });

    });

    describe('Take screenshot of element', () => {

        it('Take screenshot of element', function (done) {

            browser.get(SERVER_URL);

            util
                .takeScreenshotOfElement(browser, browser.findElement(byCss('[href="#/country/DZA"]')))
                .then(image => util.writeScreenshot('my-element', image))
                .then(done);

        });

    });

});

