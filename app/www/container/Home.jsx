import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
import { Link, browserHistory } from 'react-router'

const data = require('../data/data.json');

export default class Home extends Component {

    render() {

        return <div>

            <form action="#">
                <input type="text" placeholder="Search..."/>
            </form>

            {data.map(district => <Link key={district.id} to={'/district/' + district.id}>{district['district-ru']}</Link> )}

        </div>;

    }

}
