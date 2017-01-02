import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
// import { Link, browserHistory } from 'react-router';
import {Link, browserHistory} from 'react-router'

const data = require('../data/data.json');


export default class Currency extends Component {

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

        const {districtId, countryId, currencyId} = this.props.params;

        const district = data.filter(district => districtId === district.id)[0];
        const country = district.country.filter(country => countryId === country.id)[0];
        const currency = country.currency.filter(currency => currency.abbreviation === currencyId)[0];

        return <div>

            <h1>{country['name-ru']}</h1>

            {
                currency.image.map(image =>
                    <img
                        key={Math.random()}
                        src={require('../data/currency/' + currencyId + '/' + image)}
                    />)
            }

            {currencyId}
            {currency['name-ru']}
            {currency.link}
            {currency.description && currency.description.map(p => <p key={Math.random()}>{p}</p>)}

        </div>;

    }

}
