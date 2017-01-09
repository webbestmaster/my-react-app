/*global NODE_ENV*/
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {browserHistory, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import * as reducers from './reducer';
import AppRouter from './AppRouter';

require('style/root.scss');

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
        <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
    </DockMonitor>
);

const store = NODE_ENV === 'production' ? createStore(reducer) : createStore(reducer, DevTools.instrument());

// const history = syncHistoryWithStore(browserHistory, store);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        {
            NODE_ENV === 'production'
                ?
                <AppRouter history={history}/>
                :
                <div>
                    <AppRouter history={history}/>
                    <DevTools />
                </div>
        }
    </Provider>,
    document.querySelector('.js-app-wrapper')
);
