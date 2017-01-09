import React, {Component} from 'react';
import {connect} from 'react-redux';

let OpenSeadragon = require('openseadragon');

// TODO: добавить на онЛив дестрой
// https://openseadragon.github.io/docs/OpenSeadragon.Viewer.html - вот тут список методов
// на хоуме есть пример как забайндить онЛив

class Image extends Component {

    componentWillReceiveProps(nextProps) {

        console.log(nextProps);

    }

    componentDidMount() {

        let props = this.props;
        props.router.setRouteLeaveHook(props.route, this.routerWillLeave);

        OpenSeadragon({
            id: 'wrappppper',
            prefixUrl: "",
            tileSources:   {
                type: 'image',
                url:  '/img/' + props.params.image,
                buildPyramid: false
            },
            showNavigationControl: false,
            navigationControlAnchor: false,
            showZoomControl: false,
            showHomeControl: false
        });

    }

    render() {
        return <div id="wrappppper" ref="wrapper">
            <img className="single-image" src={'/img/' + this.props.params.image}/>
        </div>;
    }

}

export default connect(state => ({
    screen: state.screen
}))(Image);
