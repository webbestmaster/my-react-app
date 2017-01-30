/*global describe, it, beforeEach, afterEach */

"use strict";

let assert = require('chai').assert;

// let SERVER_URL = 'http://statlex.github.io/';
let SERVER_URL = 'http://ebanoe.it/2016/03/04/javascript-for-drivers/';
let WEB_DRIVER_SERVER_URL = 'http://localhost:4444/wd/hub';

describe('Tests', function () {

    // each test should be less than 5s
    this.timeout(500e3);

    let browser;
    let webdriver = require('selenium-webdriver');
    let byCss = webdriver.By.css;

    beforeEach(() => browser = new webdriver
        .Builder()
        .usingServer(WEB_DRIVER_SERVER_URL)
        .withCapabilities(webdriver.Capabilities.chrome())
        .build()
    );

    afterEach(() => browser.quit());



    describe('Home page', () => {

        it('Open Page', done => {

            browser.get(SERVER_URL);





                browser.switchTo().frame(browser.findElement(byCss('iframe')));

                browser.findElement(byCss('span.rc-anchor-checkbox')).then(function(elem) {
                    elem.click();

                    setTimeout(done, 5000000);

                }, function () {
                    console.log('!!!!!!!')
                })









        });


    });



});
