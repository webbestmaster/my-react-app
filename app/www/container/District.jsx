import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
import { Link, browserHistory } from 'react-router'

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

        var c = 11;

        console.log(this.props.params.continentId);

        return <div>

            <h1>I am continent!!!</h1>

        </div>;

    }

}
