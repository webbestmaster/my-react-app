import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {increase, decrease} from '../actions/count'
import {Link, browserHistory, hashHistory} from 'react-router';

import actionRouteToCountry from './../actions/home';
// this.props.actionRouteToCountry('/country/' + path);
// hashHistory.push('/country/' + path);

const data = require('../data/data.json');
// const svgMap = require('../data/map.raw.svg');

require('../style/home.scss');

class Home extends Component {

    _onSearchInput(e) {

        console.log(e);

    }

    render() {

        return <div>

            {this.props.to}

            <form action="#">
                <input type="text" placeholder="Search..." onInput={this._onSearchInput}/>
            </form>

            {data.map(country => <Link to={'/country/' + country.alpha3}>
                <div>
                    {country.alpha3}
                    {country['name-ru']}
                    <img className="flag" src={require('../data/flag/' + country.alpha2.toLowerCase() + '.svg')}/>
                </div>
                </Link>)}

        </div>;

    }

}

export default connect(
    state => ({to: state.reducerRouteToCountry.to}),
    {actionRouteToCountry}
)(Home)
