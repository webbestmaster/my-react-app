/*global describe, it, beforeEach, afterEach */

"use strict";

let assert = require('chai').assert;

let SERVER_URL = 'http://localhost:8080/';
let WEB_DRIVER_SERVER_URL = 'http://localhost:4444/wd/hub';

describe('Home Page', function () {

    // each test should be less than 5s
    this.timeout(5e3);

    let browser;
    let webdriver = require('selenium-webdriver');
    let byCss = webdriver.By.css;

    beforeEach(function () {

        browser = new webdriver
            .Builder()
            .usingServer(WEB_DRIVER_SERVER_URL)
            .withCapabilities({'browserName': 'chrome'})
            .build();
    });

    afterEach(function () {
        browser.quit();
    });

    it('Open Page', function (done) {

        browser.get(SERVER_URL);

        browser.getTitle().then(function (title) {
            assert(title === 'Currency Reference', 'Wrong title');
            done();
        });

    });


    it('Search by currency', function (done) {

        browser.get(SERVER_URL);

        browser.findElement(byCss('.home-cards__search-input')).sendKeys('usd');

        browser.findElements(byCss('.country-card')).then(function (cards) {
            assert(cards.length === 16, 'Should be 16 countries');
            done();
        });

    });


    it('Search by country', function (done) {

        browser.get(SERVER_URL);

        browser.findElement(byCss('.home-cards__search-input')).sendKeys('ания');

        browser.findElements(byCss('.country-card')).then(function (cards) {
            assert(cards.length === 9, 'Should be 9 countries');
            done();
        });

    });

    it('Navigate to country', function (done) {

        browser.get(SERVER_URL);

        browser.findElement(byCss('.country-card')).click();
        browser.findElements(byCss('.country__currency-image-link')).then(function (links) {
            assert(links.length > 0, 'Should several links');
            done();
        });

    });





});




