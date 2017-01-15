import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import constant from './../const';

import {db} from './../services/';

db.createTable(constant.DB.IMAGE_TABLE, constant.DB.IMAGE_FIELDS_WITH_TYPES);

import loadingImage from '../actions/loadingImage';

const SPACER_GIF = require('./../i/spacer.gif');
const EMPTY_STRING = ''; // i found this 'optimization' in internet

let loadedImages = [];

function imageIsLoaded(src) {
    return loadedImages.indexOf(src) !== -1;
}

function addToLoadedImages(src) {
    if (imageIsLoaded(src)) {
        return;
    }
    loadedImages.push(src);
}


class LoadImage extends Component {

    componentWillReceiveProps(nextProps) {

        let src = this.props.src;

        if (nextProps.imageLoader.src !== src || imageIsLoaded(src)) {
            return;
        }

        let hostNode = this.refs.hostNode;
        hostNode.classList.remove('loading-image');
        hostNode.src = src;

        addToLoadedImages(src);

        db.create(constant.DB.IMAGE_TABLE, constant.DB.IMAGE_FIELDS, [src, src+'444444']);

    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('updated');
    // }

    shouldComponentUpdate(nextProps) { // (nextProps, nextState)
        return nextProps.imageLoader.src === this.props.src;
    }

    componentWillMount() {

        let src = this.props.src;

        if (imageIsLoaded(src)) {
            return;
        }

        this.props.loadingImage(this.props.src);

    }

    render() {
        let props = this.props;
        let src = props.src;
        return imageIsLoaded(src)
            ?
            <img ref="hostNode" className={props.className || EMPTY_STRING} src={src} />
            :
            <img ref="hostNode" className={(props.className || EMPTY_STRING) + ' loading-image'} src={SPACER_GIF} />;

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
