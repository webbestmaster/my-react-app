import React, {Component} from 'react';
const _ = require('lodash');

const data = require('../data/data.json');
require('../style/country.scss');

export default class Country extends Component {

    render() {

        let alpha3 = this.props.params.alpha3;

        let countryData = _.find(data, {alpha3});

        return <div>

            <h1>Country -> {countryData['name-ru']}</h1>

            {countryData.currency.map(currency =>
                <div>
                    <p>{currency.abbreviation}</p>
                    <p>{currency['name-ru']}</p>
                    <p>{currency['description-ru']}</p>

                    {currency.image.map(image =>
                        <img className="money" src={require('../data/currency/' + currency.abbreviation + '/' + image)}/>
                    )}

                </div>

            )}

        </div>;

    }

}
