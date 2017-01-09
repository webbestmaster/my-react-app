import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import * as reducers from './reducer';
import {Country, Home} from './container';
import {App, Image} from './component';

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

const store = createStore(
    reducer,

    DevTools.instrument()
);

// const history = syncHistoryWithStore(browserHistory, store);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(

    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>

                    <IndexRoute component={Home}/>

                    <Route path="/country/:alpha3" component={Country}/>
                    <Route path="/img/:image" component={Image}/>

                </Route>
            </Router>
            <DevTools />
        </div>
    </Provider>,

    document.querySelector('.js-app-wrapper')
);
