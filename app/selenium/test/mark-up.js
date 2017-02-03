/*global describe, it, beforeEach, afterEach */

"use strict";

const MODES = {
    test: 'test',
    collect: 'collect',
};

const MODE = MODES[process.env.MODE] || MODES.test;

let assert = require('chai').assert;

const addContext = require('mochawesome/addContext');

let SERVER_URL = 'http://localhost:8080/';
let WEB_DRIVER_SERVER_URL = 'http://localhost:4444/wd/hub';

const util = require('../data/util');


describe('Mark-up', function () {

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

    it('Home page', function (done) {

        browser.get(SERVER_URL);

        let actualImage,
            expectImage;

        const imageName = 'my-image-name.png';
        const imageRefPath = './ref/';

        util
            .takeScreenshotOfElement(browser, browser.findElement(byCss('[href="#/country/DZA"]')))
            .then(image => {
                actualImage = image;
                if (MODE === MODES.test) {
                    return util
                        .imageToBase64(imageRefPath + imageName)
                        .then(image => expectImage = image);
                } else {
                    return util
                        .writeBase64ToFile(imageRefPath + imageName, image);
                }
            })
            .then(() => {

                addContext(this, {
                    title: 'Actual Image',
                    value: util.createTag('img', ['src', actualImage])
                });

                addContext(this, {
                    title: 'Expect Image',
                    value: expectImage && util.createTag('img', ['src', expectImage])
                });

                done();

            });

    });


});










