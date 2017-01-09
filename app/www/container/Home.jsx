import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Search from './Search';
import SelectedPart from './../component/SelectedPart';

class Home extends Component {

    /*
     // just example for onLeave
     onLeave() {

     return new Promise(function (res) {
     setTimeout(res, 3000);
     });

     }

     componentDidMount() {

     let router = this.props.router;

     let unlistenLeave = router.setRouteLeaveHook(this.props.route, nextLocation => {
     this.onLeave().then(() => {
     unlistenLeave();
     router.push(nextLocation);
     }).catch(() => {
     unlistenLeave();
     router.push(nextLocation);
     });

     return false;
     });
     }
     */

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
