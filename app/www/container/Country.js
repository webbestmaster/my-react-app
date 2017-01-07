import React, {Component} from 'react';
const _ = require('lodash');

const data = require('../data/data.json');
require('../style/country.scss');

export default class Country extends Component {

    render() {

        let alpha3 = this.props.params.alpha3;

        let countryData = _.find(data, {alpha3});

        return <div className="country">

            <h1 className="country__header">{countryData['name-ru']}</h1>

            {countryData.currency.map(currency =>
                <div className="country__currency-info">
                    <h2 className="country__header_2">{currency.abbreviation} - {currency['name-ru']}</h2>

                    {currency['description-ru'].map((description, i) =>
                        <p className="country__description" key={'description_' + i}>{description}</p>
                    )}

                    {currency.image.map(image =>
                        <img className="country__currency-image" key={image} src={require('../data/currency/' + currency.abbreviation + '/' + image)}/>
                    )}

                </div>

            )}

        </div>;

    }

}
