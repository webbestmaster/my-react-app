import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
// import { Link, browserHistory } from 'react-router';
import {Link, browserHistory} from 'react-router'

const data = require('../data/data.json');

export default class District extends Component {

    /*
     * need to prevent react render called twice
     * FUCK REACT!!!
     * see here
     * http://stackoverflow.com/questions/35136836/react-component-render-is-called-multiple-times-when-pushing-new-url
     * */
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps);
        // console.log(nextState);
        return false;
    }

    render() {

        const districtId = this.props.params.districtId;
        const district = data.filter(district => districtId === district.id)[0];

        return <div>

            <h1>{district['district-ru']}</h1>

            {
                district.country.map(country =>
                    country.currency.map(currency =>
                        <Link
                            key={country['name-ru'] + currency.abbreviation + currency['name-ru']}
                            to={'/currency/' + districtId + '/' + country.id + '/' + currency.abbreviation}>
                            {country['name-ru']} - {currency.abbreviation} - {currency['name-ru']}
                        </Link>
                    )
                )
            }

        </div>;

    }

}
