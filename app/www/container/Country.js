import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

const _ = require('lodash');

const data = require('../data/data.json');
require('../style/country.scss');

export default class Country extends Component {

    render() {

        let alpha3 = this.props.params.alpha3;

        let countryData = _.find(data, {alpha3});

        return <div className="country clear-self">

            <h1 className="country__header">{countryData['name-ru']}</h1>

            {countryData.currency.map(currency =>
                <div key={currency.abbreviation} className="country__currency-info">
                    <h2 className="country__header_2">{currency.abbreviation} - {currency['name-ru']}</h2>

                    {currency['description-ru'] && currency['description-ru'].map((description, i) =>
                        <p className="country__description" key={'description_' + i}>{description}</p>
                    )}

                    <div className="country__currency-image-list">
                        {currency.image.map((image, i) => {
                            let path = require('../data/currency/' + currency.abbreviation + '/' + image);
                            return <Link
                                to={path}
                                className={'country__currency-image-link' + (i % 2 ? ' country__currency-image-link--odd' : '')}
                                key={image}>
                                <img
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
