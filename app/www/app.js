import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import * as reducers from './reducer';
import {App, About} from './component';
import Home from './container/Home';
import District from './container/District';
import Country from './component/Country';

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const store = createStore(
    reducer
);

// const history = syncHistoryWithStore(browserHistory, store);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>

                <IndexRoute component={Home}/>

                <Route path="/district/:districtId" component={District}/>
                <Route path="/district/:districtId/:countryId" component={Country}/>

                {/*<Route path="/demotivators" component={Demotivators}/>*/}
                {/*<Route path="/about" component={About}/>*/}

            </Route>
        </Router>
    </Provider>,

    document.querySelector('.js-app-wrapper')
);
