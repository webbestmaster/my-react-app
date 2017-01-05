import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import * as reducers from './reducer';
import {App, About} from './component';
import Home from './container/Home';
import Country from './container/Country';
import District from './container/District';
import Currency from './component/Currency';

require('style/main.scss');

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

                <Route path="/country/:alpha3" component={Country}/>

                {/*<Route path="/district/:districtId" component={District}/>*/}
                {/*<Route path="/currency/:districtId/:countryId/:currencyId" component={Currency}/>*/}

                {/*<Route path="/demotivators" component={Demotivators}/>*/}
                {/*<Route path="/about" component={About}/>*/}

            </Route>
        </Router>
    </Provider>,

    document.querySelector('.js-app-wrapper')
);
