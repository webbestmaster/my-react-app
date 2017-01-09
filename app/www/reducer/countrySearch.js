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

export default function countrySearch(state = initialState, action) {

    if (action.type !== actionConst.TYPE.COUNTRY_FILTER) {
        return state;
    }

    let filter = action.filter.trim();

    let re = new RegExp(filter , 'i');

    let country = dataSorted.filter(country => {

        if (re.test(country['name-ru'])) {
            return true;
        }

        return country.currency.some(currency => re.test(currency['abbreviation']) || re.test(currency['name-ru']) );

    });

    return {...state, country, filter, re};

}
