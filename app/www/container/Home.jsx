import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import util from './../services/util';

import Search from './Search';
import SelectedPart from './../component/SelectedPart';
import LoadImage from './../component/LoadImage';

class Home extends Component {

    render() {

        let countrySearch = this.props.countrySearch;
        let countryResult = countrySearch.country;
        let countrySearchRe = countrySearch.re;
        let countrySearchString = countrySearch.filter;
        let flagData;

        return <div className="home-cards">

            <Link to="/about" className="about-link">О программе</Link>

            <Search/>

            {countryResult.length
                ?
                <div className="home-cards__colums">
                    {countryResult.map(country => {
                        {flagData = util.getFlagsInfo(country.alpha2);}
                        return <Link
                            key={country.alpha3}
                            className="country-card"
                            to={'/country/' + country.alpha3}>
                            <div className="country-card__flag"
                                 style={{
                                     backgroundImage: 'url(' + require('./../data/flag/' + flagData.image) + ')',
                                     backgroundPosition: (-flagData.frame.x / 2) + 'px ' + (-flagData.frame.y / 2) + 'px',
                                     backgroundSize: flagData.size.w / 2  + 'px ' + flagData.size.h / 2 + 'px'
                                 }}>
                            </div>

                            <SelectedPart string={country['name-ru']} searchString={countrySearchString} re={countrySearchRe}/>
                            <p className="country-card__currency">
                                {country.currency.map((currency, i) => <SelectedPart key={currency.abbreviation + i} string={currency.abbreviation} searchString={countrySearchString} re={countrySearchRe}/>)}
                            </p>
                        </Link>})}
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
