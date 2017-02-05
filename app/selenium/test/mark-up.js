/*global describe, it, beforeEach, afterEach */

"use strict";

const Ssm = require('selenium-screen-master');
const ssm = new Ssm();

const MODES = ssm.MODES;

ssm.setPathToReferenceFolder('./ssmRefFolder');

const MODE = MODES[process.env.MODE] || MODES.TEST;

let assert = require('chai').assert;

const addContext = require('mochawesome/addContext');

let SERVER_URL = 'http://localhost:8080/';
let WEB_DRIVER_SERVER_URL = 'http://localhost:4444/wd/hub';

const util = require('../data/util');

const resemble = require('node-resemble');

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

        ssm
            .compare({
                browser: browser,
                element: browser.findElement(byCss('[href="#/country/AUS"]')),
                image: 'my-image-name.png',
                mode: MODE
            })
            .then(comparing => {

                addContext(this, {
                    title: 'Actual',
                    value: util.createTag('img', ['src', comparing.actual])
                });

                addContext(this, {
                    title: 'Expect',
                    value: util.createTag('img', ['src', comparing.expect])
                });

                addContext(this, {
                    title: 'Different',
                    value: util.createTag('img', ['src', comparing.different])
                });

                addContext(this, {
                    title: 'Different Info',
                    value: comparing.info
                });

                done();

            });

    });

});
