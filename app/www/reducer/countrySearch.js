import actionConst from '../const';

const data = require('../data/data.json');
const dataSorted = data
    .sort((a, b) => a['name-ru'] > b['name-ru'] ? 1 : -1)
    .filter(country => country.currency);


const initialState = {
    country: dataSorted
};

export default function countrySearch(state = initialState, action) {

    if (action.type !== actionConst.TYPE.COUNTRY_FILTER) {
        return state;
    }

    let re = new RegExp(action.filter, 'i');

    let country = dataSorted.filter(country => re.test(country['name-ru']));

    return {...state, country: country, filter: action.filter};

}
