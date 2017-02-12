import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import LoadImage from './../component/LoadImage';
import {Power2, TimelineLite} from "gsap";
import util from './../services/util';

const _ = require('lodash');

const data = require('../data/data.json');
require('../style/country.scss');

export default class Country extends Component {

    constructor() {

        super();

        util.scrollToTop();

        this.attr = {
            flagTween: null
        };

    }

    tweenFlag() {

        let flag = this.refs.flag;

        let tl = new TimelineLite();

        this.attr.flagTween = tl;

        tl
            .set(flag, {rotationX: -90, scale: 0, alpha: 0, transformPerspective: 200, transformOrigin: "center top"})
            .to(flag, 0.75, {delay: 0.1, rotationX: 0, scale: 1, alpha: 1, ease: Power2.easeOut});

    }

    addMap() {

        let alpha3 = this.props.params.alpha3;

        let countryData = _.find(data, {alpha3});

        let tempDiv = document.createElement('div');

        tempDiv.innerHTML = util.getCountryMap(countryData['name-en']);

        let svg = tempDiv.removeChild(tempDiv.querySelector('svg'));

        svg.classList.add('country__map');

        let maxX = -1;
        let maxY = -1;

        _.each(svg.querySelectorAll('*'), elem => {

            if (!elem.getBBox) {
                return;
            }

            let bBox = elem.getBBox();

            maxX = Math.max(maxX, bBox.x + bBox.width);
            maxY = Math.max(maxY, bBox.y + bBox.height);

        });

        svg.setAttribute('width', maxX);
        svg.setAttribute('height', maxY);
        svg.setAttribute('viewBox', [0, 0, maxX, maxY].join(' '));

        this.refs.svgMapWrapper.appendChild(svg);

    }

    componentDidMount() {

        let view = this;

        view.tweenFlag();

        view.addMap();

    }

    componentWillUnmount() {
        this.attr.flagTween.kill();
    }

    render() {

        let alpha3 = this.props.params.alpha3;

        let countryData = _.find(data, {alpha3});
        let flagPath = require('./../data/flag-svg/' + countryData.alpha2.toLowerCase() + '.svg');

        return <div className="country clear-self">

            <h1 className="country__header">{countryData['name-ru']}</h1>

            <div ref="svgMapWrapper" className="country__currency-info">
                <img ref="flag" className="country__flag" src={flagPath}/>
            </div>

            {countryData.currency.map(currency =>
                <div key={currency.abbreviation} className="country__currency-info">
                    <h2 className="country__header_2">{currency.abbreviation} - {currency['name-ru']}</h2>

                    {currency['description-ru'] && currency['description-ru'].map((description, i) =>
                        <p className="country__description" key={'description_' + i}>{description}</p>
                    )}

                    <div className="country__currency-image-list">
                        {currency.image.map((image, i) => {
                            let abbreviation = currency.abbreviation;
                            let path = SERVER_URL + require('../data/currency/' + abbreviation + '/' + image);
                            return <Link
                                to={'/img/' + abbreviation + '/' + image}
                                className={'country__currency-image-link' + (i % 2 ? ' country__currency-image-link--odd' : '')}
                                key={image}>
                                <LoadImage
                                    className="country__currency-image"
                                    src={path}/>
                            </Link>;
                        })}
                    </div>

                </div>
            )}

        </div>;

    }

}

Country.propTypes = {
    params: PropTypes.shape({
        alpha3: PropTypes.string.isRequired
    })
};
