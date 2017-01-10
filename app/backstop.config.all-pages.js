const countryData = require('./www/data/data.json');

const url = 'http://localhost:8080/';

let config = {
    id: 'Currency Reference - test for images',
    viewports: [
        {
            'name': 'desktop',
            'width': 1280,
            'height': 1024
        }
/*
        {
            'name': 'tablet',
            'width': 786,
            'height': 1024
        },
        {
            'name': 'phone',
            'width': 375,
            'height': 667
        }
*/
    ],
    scenarios: [
        {
            label: 'Home page',
            url: url,
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

countryData.forEach(country => {
    country.currency && config.scenarios.push({
        label: 'Country: ' + country.alpha3,
        url: url + '#/country/' + country.alpha3,
        selectors: [
            'body'
        ]
    });
});

module.exports = config;
