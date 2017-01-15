import React, {Component, PropTypes} from 'react';
// import {connect} from 'react-redux';

import constant from './../const';

import {db} from './../services/';
import {util} from './../services/';

db.createTable(constant.DB.IMAGE_TABLE, constant.DB.IMAGE_FIELDS_WITH_TYPES);

// import loadingImage from '../actions/loadingImage';

const SPACER_GIF = require('./../i/spacer.gif');
const EMPTY_STRING = ''; // i found this 'optimization' in internet

export default class LoadImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            src: SPACER_GIF
        };
        this.loadImage();

    }

    loadImage() {

        let loadImage = this;

        let src = loadImage.props.src;

        db.read(constant.DB.IMAGE_TABLE, 'src', src).then(rows => {

            if (rows.length === 0) { // saved image not found

                return util.imageToBase64(src)
                    .then(base64 => {
                        db.create(constant.DB.IMAGE_TABLE, constant.DB.IMAGE_FIELDS, [src, base64]);
                        loadImage.setState({
                            isLoaded: true,
                            src: base64
                        });
                    });

            }

            loadImage.setState({
                isLoaded: true,
                src: rows[0].base64
            });

        });

    }

    /*
     componentWillReceiveProps(nextProps) {

     let src = this.props.src;

     if (nextProps.imageLoader.src !== src || imageIsLoaded(src)) {
     return;
     }

     let hostNode = this.refs.hostNode;
     hostNode.classList.remove('loading-image');
     hostNode.src = src;

     util.imageToBase64(src).then(function(base64) {
     // console.log(base64);
     });

     addToLoadedImages(src);

     db.create(constant.DB.IMAGE_TABLE, constant.DB.IMAGE_FIELDS, [src, src+'444444']);

     }
     */

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('updated');
    // }

    // shouldComponentUpdate(nextProps) { // (nextProps, nextState)
    //     return nextProps.imageLoader.src === this.props.src;
    // }

    render() {
        let state = this.state;
        return (
            <img className={(this.props.className || EMPTY_STRING) + (state.isLoaded ? '' : ' loading-image')} src={state.src}/>
        );

    }

}

/*
 LoadImage.propTypes = {
 src: PropTypes.string.isRequired,
 imageLoader: PropTypes.shape({
 src: PropTypes.string.isRequired
 })
 };
 */

/*
 connect(
 state => ({imageLoader: state.imageLoader}),
 {loadingImage}
 )(LoadImage);
 */
