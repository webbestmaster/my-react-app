import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import loadingImage from '../actions/loadingImage';

const SPACER_GIF = require('./../i/spacer.gif');

class LoadImage extends Component {

    componentWillReceiveProps(nextProps) {

        if (nextProps.imageLoader.src !== this.props.src) {
            return;
        }

        let hostNode = this.refs.hostNode;
        hostNode.classList.remove('loading-image');
        hostNode.src = this.props.src;

    }

    componentWillMount() {
        this.props.loadingImage(this.props.src);
    }

    render() {
        return <img ref="hostNode" className={(this.props.className || '') + ' loading-image'} src={SPACER_GIF} />;
    }

}

LoadImage.propTypes = {
    src: PropTypes.string.isRequired,
    imageLoader: PropTypes.shape({
        src: PropTypes.string.isRequired
    })
};

export default connect(
    state => ({imageLoader: state.imageLoader}),
    {loadingImage}
)(LoadImage);
