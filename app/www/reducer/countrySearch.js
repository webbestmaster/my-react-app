import actionConst from '../const';

const data = require('../data/data.json');
const dataSorted = data
    .filter(country => country.currency)
    .sort((a, b) => a['name-ru'] > b['name-ru'] ? 1 : -1);


const initialState = {
    country: dataSorted,
    filter: '',
    re: new RegExp('', 'i')
};

const COUNTRY_FILTER = actionConst.TYPE.COUNTRY_FILTER;

export default function countrySearch(state = initialState, action) {

    if (action.type === COUNTRY_FILTER) {

        let filter = action.filter.trim();

        let re = new RegExp(filter , 'i');

        let country = dataSorted.filter(country => {

            if (re.test(country['name-ru']) || re.test(country['name-en'])) {
                return true;
            }

            return country.currency.some(currency => re.test(currency['abbreviation']) || re.test(currency['name-ru']) );

        });

        return {...state, country, filter, re};

    }

    return state;

}
