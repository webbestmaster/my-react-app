const countryData = require('./www/data/data.json');

const url = 'http://localhost:8080/';

let config = {
    id: 'Currency Reference - test for images',
    viewports: [
        {
            'name': 'desktop',
            'width': 1024,
            'height': 768
        },
        {
            'name': 'tablet',
            'width': 640,
            'height': 480
        },
        {
            'name': 'phone',
            'width': 320,
            'height': 480
        }
    ],
    scenarios: [
        {
            label: 'Home page',
            url: url,
            selectors: [
                'body'
            ]
        },
        {
            label: 'Country: AND',
            url: url + '#/country/AND',
            selectors: [
                'body'
            ]
        },
        {
            label: 'Country: AND - EUR',
            url: url + '#/img/EUR/80-0.jpg',
            selectors: [
                'body'
            ]
        }
    ],
    paths: {
        bitmaps_reference: 'backstop/test/bitmaps_reference',
        casper_scripts: 'backstop/test/casper_scripts',

        bitmaps_test: 'backstop/backstop_data/bitmaps_test',
        html_report: 'backstop/backstop_data/html_report',
        ci_report: 'backstop/backstop_data/ci_report'
    },
    casperFlags: [],
    engine: 'phantomjs',
    report: ['browser'],
    debug: false
};

module.exports = config;
