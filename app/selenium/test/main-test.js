/*global describe, it, beforeEach, afterEach */

"use strict";

let assert = require('chai').assert;

let SERVER_URL = 'http://localhost:8080/';
let WEB_DRIVER_SERVER_URL = 'http://localhost:4444/wd/hub';

describe('Tests', function () {

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

    describe('Home page', function () {

        it('Open Page', function (done) {

            browser.get(SERVER_URL);

            browser.getTitle().then(function (title) {
                assert(title === 'Currency Reference', 'Wrong title');
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


    describe('Search', function () {

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

    });

    describe('Country page', function () {

        it('Navigate to single image', function (done) {

            browser.get(SERVER_URL + '#/country/GBR');

            browser.findElement(byCss('.country__currency-image-link')).click();

            browser.findElement(byCss('.openseadragon-canvas canvas')).then(() => done());

        });

    });

});
