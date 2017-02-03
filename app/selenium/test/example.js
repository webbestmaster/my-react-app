/*global describe, it, beforeEach, afterEach */

"use strict";

let assert = require('chai').assert;

const addContext = require('mochawesome/addContext');

let SERVER_URL = 'http://localhost:8080/';
let WEB_DRIVER_SERVER_URL = 'http://localhost:4444/wd/hub';

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

        it('Open Page', function (done) {

            browser.get(SERVER_URL);

            browser.getTitle().then(title => {

                assert(title === 'Currency Reference', 'Wrong title');

                addContext(this, {
                    title: 'some title',
                    value: 'simple_simple simple_simple simple_simple simple_simple ' // can be anything
                });

                addContext(this, {
                    title: 'MY image',
                    value: '<img class="my_mega_image" src="https://statlex.github.io/img/preview/ancient-empire-strike-back.png">'
                });

                done();

            });

            addContext(this, {
                title: 'some title',
                value: 'simple_simple simple_simple simple_simple simple_simple ' // can be anything
            });

            addContext(this, {
                title: 'MY image',
                value: '<img class="my_mega_image" src="https://statlex.github.io/img/preview/ancient-empire-strike-back.png">'
            });

        });

    });

});

