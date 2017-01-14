import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

let OpenSeadragon = require('openseadragon');

class Image extends Component {

    componentDidMount() {

        const viewportMargins = 50;

        let props = this.props;

        let imageViewer = new OpenSeadragon({
            element: this.refs.wrapper,
            tileSources: {
                type: 'image',
                url: SERVER_URL + require('../data/currency/' + props.params.abbreviation + '/' + props.params.image),
                buildPyramid: true
            },
            showNavigationControl: false,
            navigationControlAnchor: false,
            showZoomControl: false,
            showHomeControl: false,
            maxZoomLevel: 4.0,
            minZoomLevel: 0.4,
            viewportMargins: {
                top: viewportMargins,
                left: viewportMargins,
                right: viewportMargins,
                bottom: viewportMargins
            }
        });

        props.router.setRouteLeaveHook(props.route, () => {
            imageViewer.destroy();
            imageViewer = null;
        });

    }

    render() {
        let screen = this.props.screen;
        return <div ref="wrapper" style={{width: screen.width + 'px', height: screen.height + 'px'}}></div>;
    }

}

Image.propTypes = {
    screen: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }),
    params: PropTypes.shape({
        image: PropTypes.string.isRequired
    })
};

export default connect(state => ({
    screen: state.screen
}))(Image);
