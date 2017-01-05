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

        return <div className="home-cards">

            {this.props.to}
            {/*
             <form action="#">
             <input type="text" placeholder="Search..." onInput={this._onSearchInput}/>
             </form>
             */}

            {data.map(country => <Link className="country-card" to={'/country/' + country.alpha3}>
                {/*{country.alpha3}*/}
                <img className="country-card__flag" src={require('../data/flag/' + country.alpha2.toLowerCase() + '.svg')}/>
                {country['name-ru']}
                {country.currency &&
                <p className="country-card__currency">
                    {country.currency.map(currency => currency.abbreviation).join(' ')}
                </p>
                }
            </Link>)}

        </div>;

    }

}

export default connect(
    state => ({to: state.reducerRouteToCountry.to}),
    {actionRouteToCountry}
)(Home);
