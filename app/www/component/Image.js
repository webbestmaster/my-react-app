import React, {Component} from 'react';

let OpenSeadragon = require('openseadragon');

// TODO: добавить на онЛив дестрой
// https://openseadragon.github.io/docs/OpenSeadragon.Viewer.html - вот тут список методов
// на хоуме есть пример как забайндить онЛив

export default class Image extends Component {

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
