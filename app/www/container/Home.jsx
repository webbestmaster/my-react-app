import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increase, decrease} from '../actions/count'

class Home extends Component {

    componentWillUnmount() {
        console.log('componentWillUnmount');

        // setTimeout(function () {
        //     console.log(cb)
        // }, 2000);

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        debugger;
    }

    render() {
        let props = this.props;
        return (
            <div>
                Some state changes:
                {props.number}
                <button onClick={() => props.increase(1)}>Increase</button>
                <button onClick={() => props.decrease(1)}>Decrease</button>
            </div>
        )
    }

}

export default connect(
    state => ({number: state.count.number}),
    {increase, decrease}
)(Home)
