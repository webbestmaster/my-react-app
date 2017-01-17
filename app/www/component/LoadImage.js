import React, {Component, PropTypes} from 'react';

import {util} from './../services/';

const SPACER_GIF = require('./../i/spacer.gif');
const EMPTY_STRING = ''; // i found this 'optimization' in internet

export default class LoadImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isError: false,
            src: SPACER_GIF
        };
        this.loadImage();

    }

    loadImage() {

        let loadImage = this;

        util.cacheAsBase64(loadImage.props.src)
            .then(base64 => {
                loadImage.setState({
                    isLoaded: true,
                    src: base64
                });
            })
            .catch(function () {
                loadImage.setState({
                    isError: true
                });
            });

    }

    render() {
        let state = this.state;

        if (state.isError) {
            return <p className="country__description country__description--ta-center">Нет интернет соединения!</p>;
        } else {
            return <img className={(this.props.className || EMPTY_STRING) + (state.isLoaded ? '' : ' loading-image')} src={state.src}/>;
        }

    }

}

LoadImage.propTypes = {
    src: PropTypes.string.isRequired
};
