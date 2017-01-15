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

    beforeEach(() => browser = new webdriver
        .Builder()
        .usingServer(WEB_DRIVER_SERVER_URL)
        .withCapabilities({'browserName': 'chrome'})
        .build()
    );

    afterEach(() => browser.quit());

    describe('Home page', () => {

        it('Open Page', done => {

            browser.get(SERVER_URL);

            browser.getTitle().then(title => {
                assert(title === 'Currency Reference', 'Wrong title');
                done();
            });

        });

        it('Navigate to country', done => {

            browser.get(SERVER_URL);

            browser.findElement(byCss('.country-card')).click();

            browser.findElements(byCss('.country__currency-image-link')).then(links => {
                assert(links.length > 0, 'Should several links');
                done();
            });

        });

    });


    describe('Search', () => {

        it('Search by currency', done => {

            browser.get(SERVER_URL);

            browser.findElement(byCss('.home-cards__search-input')).sendKeys('usd');

            browser.findElements(byCss('.country-card')).then(cards => {
                assert(cards.length === 16, 'Should be 16 countries');
                done();
            });

        });

        it('Search by country', done => {

            browser.get(SERVER_URL);

            browser.findElement(byCss('.home-cards__search-input')).sendKeys('ания');

            browser.findElements(byCss('.country-card')).then(cards => {
                assert(cards.length === 9, 'Should be 9 countries');
                done();
            });

        });

    });

    describe('Country page', () => {

        it('Navigate to single image', done => {

            browser.get(SERVER_URL + '#/country/GBR');

            browser.findElement(byCss('.country__currency-image-link')).click();

            browser
                .wait(() => browser.findElement(byCss('.openseadragon-canvas canvas')), 5000)
                .then(() => done());

        });

    });

});
