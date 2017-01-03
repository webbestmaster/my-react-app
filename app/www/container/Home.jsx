import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
import {Link, browserHistory} from 'react-router'

const data = require('../data/data.json');
const svgMap = require('../data/map.raw.svg');

export default class Home extends Component {

    bindEventListeners() {

        let svgNode = this.refs.mapWrapper.querySelector('svg');

        Array.prototype.forEach.call(
            svgNode.querySelectorAll('.country'),
            pathNode => {
                pathNode.addEventListener('click', e => {
                    console.log(e.currentTarget);
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

            <form action="#">
                <input type="text" placeholder="Search..."/>
            </form>

            <div ref="mapWrapper"></div>

        </div>;

    }

}
