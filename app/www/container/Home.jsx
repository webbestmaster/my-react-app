import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {increase, decrease} from '../actions/count'
import {Link, browserHistory, hashHistory} from 'react-router';

import actionRouteToCountry from './../actions/home';
// this.props.actionRouteToCountry('/country/' + path);
// hashHistory.push('/country/' + path);

import {applyCountryFilter} from './../actions/applyCountryFilter';

const data = require('../data/data.json');
// const svgMap = require('../data/map.raw.svg');
const dataSorted = data.sort((a, b) => a['name-ru'] > b['name-ru'] ? 1 : -1);

require('../style/home.scss');

class Home extends Component {

    componentWillMount() {
        this.props.applyCountryFilter('');
    }

    render() {

        return <div className="home-cards">

            <form action="#">
                <input type="text" placeholder="Search..." onInput={e => this.props.applyCountryFilter(e.currentTarget.value)}/>
            </form>

            {this.props.countrySearch.country.map(country =>
                <Link
                    key={country.alpha3}
                    className="country-card"
                    to={'/country/' + country.alpha3}>
                    <img className="country-card__flag" src={require('../data/flag/' + country.alpha2.toLowerCase() + '.svg')}/>
                    {country['name-ru']}
                    {country.currency && <p className="country-card__currency">{country.currency.map(currency => currency.abbreviation).join(' ')}</p>
                    }
                </Link>)}

        </div>;

    }

}

export default connect(
    state => ({countrySearch: state.countrySearch}),
    {applyCountryFilter}
)(Home);
