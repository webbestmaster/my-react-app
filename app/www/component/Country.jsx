import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
// import { Link, browserHistory } from 'react-router';
import { Link, browserHistory } from 'react-router'

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

        const params = this.props.params;

        const districtId = params.districtId;
        const countryId = params.countryId;
        const district = data.filter(district => districtId === district.id)[0];

        const country = district.country.filter(country => countryId === country.id)[0];

        console.log('../data/currency/' + country.currency[0].abbreviation + '/' + country.currency[0].image[0]);

        const image = require('../data/currency/' + country.currency[0].abbreviation + '/' + country.currency[0].image[0]);

        return <div>

            <h1>{country['name-ru']}</h1>

            <img src={image}/>

            {country.currency.map(currency => {

                return <div key={currency.abbreviation}>
                    {currency.abbreviation}
                    {currency['name-ru']}
                    {currency.link}
                    {currency.description && currency.description.map( p => <p>{p}</p> )}
                </div>

            })}

        </div>;

    }

}
