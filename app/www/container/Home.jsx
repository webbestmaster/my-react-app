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

class Home extends Component {

    onSearchChange(e) {
        this.props.applyCountryFilter(e.currentTarget.value);
    }

    render() {

        let countrySearch = this.props.countrySearch;
        let countryResult = countrySearch.country;
        let countrySearchRe = countrySearch.re;

        return <div className="home-cards">

            <input className="home-cards__search-input" type="text" placeholder="Поиск..." value={this.props.countrySearch.filter || ''} onChange={e => this.onSearchChange(e)}/>

            {countryResult.length
            ?
            <div className="home-cards__colums">
                {countryResult.map(country =>
                    <Link
                        key={country.alpha3}
                        className="country-card"
                        to={'/country/' + country.alpha3}>
                        <img className="country-card__flag" src={require('../data/flag/' + country.alpha2.toLowerCase() + '.svg')}/>
                        <SelectedPart string={country['name-ru']} re={countrySearchRe} />
                        {country.currency && <p className="country-card__currency">{country.currency.map(currency => currency.abbreviation).join(' ')}</p>
                        }
                    </Link>)}
            </div>
            :
            <div className="home-cards__did-not-found-country">Ничего не найдено, попробуйте ввести другой запрос. Поиск ведётся по: &lt; тут поля по которым ведётся поиск &gt; </div>}

        </div>;

    }

}

class SelectedPart extends Component {

    render() {

        let string = this.props.string;
        let re = this.props.re;

        let firstSplit = string.search(re);
        let secondSplit = firstSplit + string.match(re)[0].length;

        let first = string.substring(0, firstSplit);
        let selected = string.substring(firstSplit, secondSplit);
        let second = string.substring(secondSplit);

        return <span>{first}<span className="country-card__founded-text">{selected}</span>{second}</span>

    }

}

export default connect(
    state => ({countrySearch: state.countrySearch}),
    {applyCountryFilter}
)(Home);
