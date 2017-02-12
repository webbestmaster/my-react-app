import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
require('lodash');
require('openseadragon');
require('es6-promise-polyfill');

require('./lib/DrawSVGPlugin.min');

// did not find better way, if you know it, please talk to me...
require('./i/spinner.gif');
require('./i/spacer.gif');
require('./i/bg.jpg');

import util from './services/util';

let countryData = require('./data/data.json');
countryData.forEach(country => {

    require('./data/flag-svg/' + country.alpha2.toLowerCase() + '.svg');

    if (!country.currency) {
        return;
    }

    country.currency.forEach( currency => {
        currency.image.forEach(image => {
            require('./data/currency/' + currency.abbreviation + '/' + image);
        });
    });

    let countryName = country['name-en'];

    if (!util.getCountryMap(countryName)) {
        return;
    }

    require('./data/map-svg/' + util.toCamelCase(countryName) + '.raw');

});

for (let i = 0; i < 6; i += 1) {
    require('./data/flag/flag-' + i + '.json');
    require('./data/flag/flag-' + i + '.png');
}
