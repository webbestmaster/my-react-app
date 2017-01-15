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

// did not find better way, if you know it, please talk to me...
require('./i/spinner.gif');
require('./i/spacer.gif');
require('./i/bg.jpg');
let countryData = require('./data/data.json');
countryData.forEach(country => {
    require('./data/flag/' + country.alpha2.toLowerCase() + '.png');
    country.currency && country.currency.forEach( currency => {
        currency.image.forEach(image => {
            require('./data/currency/' + currency.abbreviation + '/' + image);
        });
    });
});
