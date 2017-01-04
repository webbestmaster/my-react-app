import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
import {Link, browserHistory, hashHistory} from 'react-router'

import actionRouteToCountry from './../actions/home'

const data = require('../data/data.json');
const svgMap = require('../data/map.raw.svg');

class Home extends Component {

    _pathNodeOnClick(e) {

        let path = e.currentTarget.getAttribute('alpha3');

        this.props.actionRouteToCountry('/country/' + path);

        hashHistory.push('/country/' + path);

    }

    _bindEventListeners() {

        let svgNode = this.refs.mapWrapper.querySelector('svg'),
            pathNodes = svgNode.querySelectorAll('.country'),
            i, len;

        for (i = 0, len = pathNodes.length; i < len; i += 1) {
            pathNodes[i].addEventListener('click', e => this._pathNodeOnClick(e), false);
        }

    }

    componentDidMount() {
        this.refs.mapWrapper.innerHTML = svgMap;
        this._bindEventListeners();
    }

    render() {

        return <div>

            {this.props.to}

            <form action="#">
                <input type="text" placeholder="Search..."/>
            </form>

            <div ref="mapWrapper"></div>

        </div>;

    }

}

export default connect(
    state => ({ to: state.reducerRouteToCountry.to }),
    { actionRouteToCountry }
)(Home)
