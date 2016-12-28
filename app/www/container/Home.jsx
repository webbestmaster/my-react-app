import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {increase, decrease} from '../actions/count'
import { Link, browserHistory } from 'react-router'

export default class Home extends Component {

    render() {

        return <div>

            <form action="#">
                <input type="text" placeholder="Search..."/>
            </form>

            <Link to="/continent/asia">Asia</Link>
            <br/>
            <Link to="/continent/europe">Europe</Link>
            <br/>
            <Link to="/continent/sa">South America</Link>

            {/*<p>Links below is not used</p>*/}

            {/*<Link to="/demotivators">demotivators</Link>*/}
            {/*<br/>*/}
            {/*<Link to="/about">about</Link>*/}

        </div>;

    }

}
