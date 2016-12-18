import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
import { App, Home, Foo, Bar } from './components';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  reducer
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/my-react-app/app/dist/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/my-react-app/app/dist/foo" component={Foo}/>
          <Route path="/my-react-app/app/dist/bar" component={Bar}/>
        </Route>
      </Router>
  </Provider>,
  document.body
);
