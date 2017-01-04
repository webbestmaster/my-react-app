import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
import {Link, browserHistory} from 'react-router'

import actionRouteToCountry from './../actions/home'

const data = require('../data/data.json');
const svgMap = require('../data/map.raw.svg');

class Home extends Component {

    bindEventListeners() {

        let svgNode = this.refs.mapWrapper.querySelector('svg');

        Array.prototype.forEach.call(
            svgNode.querySelectorAll('.country'),
            pathNode => {
                pathNode.addEventListener('click', e => {
                    // console.log(e.currentTarget);
                    this.props.actionRouteToCountry(e.currentTarget.getAttribute('alpha3'));
                    console
                }, false)
            }
        )

    }

    componentDidMount() {
        this.refs.mapWrapper.innerHTML = svgMap;
        this.bindEventListeners();
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
