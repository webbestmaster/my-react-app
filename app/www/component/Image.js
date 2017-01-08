import React, {Component} from 'react';
// import {Link} from 'react-router';

import {allowZoom} from '../service/';

export default class Image extends Component {

    componentDidMount() {
        allowZoom(true);
        let props = this.props;
        props.router.setRouteLeaveHook(props.route, this.routerWillLeave);
    }

    routerWillLeave() {
        allowZoom(false);
    }

    render() {
        return <img className="single-image" src={'/img/' + this.props.params.image} />;
    }

}
