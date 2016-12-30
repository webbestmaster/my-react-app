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

        const id = this.props.params.districtId;
        const district = data.filter(district => id === district.id)[0];
        const districtId = district.id;

        return <div>

            <h1>{district['district-ru']}</h1>

            {district.country.map( country => <Link key={country.id} to={'/district/' + districtId + '/' + country.id}>{country['name-ru']}</Link> )}


        </div>;

    }

}
