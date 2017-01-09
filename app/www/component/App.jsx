import React, {Component} from 'react';
import { resizeScreen } from '../actions';
import {connect} from 'react-redux';

class App extends Component {

    componentDidMount() {
        window.addEventListener('resize', this.props.resizeScreen, false);
    }

    render() {
        return <div>{this.props.children}</div>;
    }

}

export default connect(
    state => ({countrySearch: state.screen}),
    {resizeScreen}
)(App);
