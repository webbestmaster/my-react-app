import React, {Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import {Country, Home} from './container';
import {App, Image, About} from './component';

export default class AppRouter extends Component {

    render() {
        return <Router history={this.props.history}>
            <Route path="/" component={App}>

                <IndexRoute component={Home}/>

                <Route path="/country/:alpha3" component={Country}/>
                <Route path="/img/:abbreviation/:image" component={Image}/>
                <Route path="/about" component={About}/>

                /* 404 */
                <Route path="*" component={About} />

            </Route>
        </Router>;
    }

}
