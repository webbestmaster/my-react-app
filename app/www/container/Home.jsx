import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Search from './Search';
import SelectedPart from './../component/SelectedPart';
import LoadImage from './../component/LoadImage';

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
                            <img className="country-card__flag" src={require('../data/flag/' + country.alpha2.toLowerCase() + '.png')} />
                            <SelectedPart string={country['name-ru']} searchString={countrySearchString} re={countrySearchRe}/>
                            <p className="country-card__currency">
                                {country.currency.map((currency, i) => <SelectedPart key={currency.abbreviation + i} string={currency.abbreviation} searchString={countrySearchString} re={countrySearchRe}/>)}
                            </p>
                        </Link>)}
                </div>
                :
                <div className="home-cards__did-not-found-country">Ничего не найдено, попробуйте ввести другой запрос.</div>}

        </div>;

    }

}

Home.propTypes = {
    countrySearch: PropTypes.shape({
        country: PropTypes.array.isRequired,
        filter: PropTypes.string.isRequired,
        re: PropTypes.instanceOf(RegExp).isRequired
    })
};

export default connect(state => ({
    countrySearch: state.countrySearch
}))(Home);
