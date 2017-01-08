import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Search from './Search';
import SelectedPart from './../component/SelectedPart';

class Home extends Component {

    render() {

        let countrySearch = this.props.countrySearch;
        let countryResult = countrySearch.country;
        let countrySearchRe = countrySearch.re;
        let countrySearchString = countrySearch.filter;

        return <div className="home-cards">

            <Search/>

            {countryResult.length
            ?
            <div className="home-cards__colums">
                {countryResult.map(country =>
                    <Link
                        key={country.alpha3}
                        className="country-card"
                        to={'/country/' + country.alpha3}>
                        <img className="country-card__flag" src={require('../data/flag/' + country.alpha2.toLowerCase() + '.svg')}/>
                        <SelectedPart string={country['name-ru']} searchString={countrySearchString} re={countrySearchRe} />
                        {country.currency && <p className="country-card__currency">{country.currency.map(currency => currency.abbreviation).join(' ')}</p>}
                    </Link>)}
            </div>
            :
            <div className="home-cards__did-not-found-country">Ничего не найдено, попробуйте ввести другой запрос.</div>}

        </div>;

    }

}

export default connect(
    state => ({countrySearch: state.countrySearch})
)(Home);
