import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import loadingImage from '../actions/loadingImage';

const SPACER_GIF = require('./../i/spacer.gif');

let loadedImages = [];

class LoadImage extends Component {

    imageIsLoaded(src) {
        return loadedImages.indexOf(src) !== -1;
    }

    addToLoadedImages(src) {
        if (this.imageIsLoaded(src)) {
            return;
        }
        loadedImages.push(src);
    }

    componentWillReceiveProps(nextProps) {

        let src = this.props.src;

        if (nextProps.imageLoader.src !== src || this.imageIsLoaded(src)) {
            return;
        }

        let hostNode = this.refs.hostNode;
        hostNode.classList.remove('loading-image');
        hostNode.src = src;

        this.addToLoadedImages(src);

    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('updated');
    // }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.imageLoader.src === this.props.src;
    }

    componentWillMount() {
        this.props.loadingImage(this.props.src);
    }

    render() {
        let props = this.props;
        let src = props.src;
        return this.imageIsLoaded(src)
            ?
            <img ref="hostNode" className={props.className || ''} src={src} />
            :
            <img ref="hostNode" className={(props.className || '') + ' loading-image'} src={SPACER_GIF} />;

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
