import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {util} from './../services/';

let OpenSeadragon = require('openseadragon');

class Image extends Component {

    componentDidMount() {

        const viewportMargins = 50;

        let imageViewerComponent = this;

        let props = imageViewerComponent.props;

        util.cacheAsBase64(SERVER_URL + require('../data/currency/' + props.params.abbreviation + '/' + props.params.image))
            .then(base64 => {

                let imageViewer = new OpenSeadragon({
                    element: imageViewerComponent.refs.wrapper,
                    tileSources: {
                        type: 'image',
                        url: base64,
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
        abbreviation: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
};

export default connect(state => ({
    screen: state.screen
}))(Image);
