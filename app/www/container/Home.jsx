import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
import { Link, browserHistory } from 'react-router'

export default class Home extends Component {
    render() {
        return <div>
            <Link to="/demotivators">demotivators</Link>
            <br/>
            <Link to="/about">about</Link>
        </div>;
    }
}
