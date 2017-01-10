module.exports = {
    'id': 'Test for Styles',
    'viewports': [
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
    'scenarios': [
        {
            'label': 'home page',
            'url': 'http://localhost:8080/',
            'selectors': [
                'body'
            ]
        }
    ],
    'paths': {
        'bitmaps_reference': 'backstop/test/bitmaps_reference',
        'casper_scripts': 'backstop/test/casper_scripts',

        'bitmaps_test': 'backstop/backstop_data/bitmaps_test',
        'html_report': 'backstop/backstop_data/html_report',
        'ci_report': 'backstop/backstop_data/ci_report'
    },
    'casperFlags': [],
    'engine': 'phantomjs',
    'report': ['browser'],
    'debug': false
};