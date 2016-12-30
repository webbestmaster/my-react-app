import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
// import { Link, browserHistory } from 'react-router';

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

        let id = this.props.params.districtId;
        let district = data.filter(district => id === district.id)[0];

        return <div>

            <h1>{district['district-ru']}</h1>

        </div>;

    }

}
