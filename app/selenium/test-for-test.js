"use strict";

var assert = require('chai').assert;

describe('tets:describe', function () {

    this.timeout(15000);


    it('test:it', function (done) {


        var webdriver = require('selenium-webdriver');
        var browser = new webdriver.Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .withCapabilities({'browserName': 'chrome' })
            .build();


        browser.get('http://en.wikipedia.org/wiki/Wiki');


        browser.findElements(webdriver.By.css('[href^="/ewewewiki/"]')).then(function(links){
            links[0].click();
            console.log('Found', links.length, 'Wiki links.' );
            browser.quit();

            setTimeout(function () {
                assert(2 === 2);
                done();

            }, 5000)

        });



    });

    it('test:it-2', function (done) {


        var webdriver = require('selenium-webdriver');
        var browser = new webdriver.Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .withCapabilities({'browserName': 'chrome' })
            .build();


        browser.get('http://en.wikipedia.org/wiki/Wiki');


        browser.findElements(webdriver.By.css('[href^="/ewewewiki/"]')).then(function(links){
            // links[0].click();
            console.log('Found', links.length, 'Wiki links.' );
            browser.quit();

            setTimeout(function () {
                assert(2 === 2);
                done();

            }, 5000)

        });



    });

});
