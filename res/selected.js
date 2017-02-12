const fs = require('fs');


const countryData = require('./data.json');

const countriesWithoutMap = [
    'Anguilla',
    'Aland Islands',
    'Barbados',
    'Saint Barthelemy',
    'Bonaire, Sint Eustatius and Saba',
    'Grenada',
    'Guernsey',
    'Norfolk Island',
    'Sao Tome and Principe',
    'Turks and Caicos Islands'
];

function toCamelCase(str) {

    return str
        .replace(/\([\s\S]+?\)/, '')
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/\,/g, '_')
        .split(' ')
        .map((word, i) => i ? word : word.toLowerCase())
        .join('');

};


countryData.forEach(country => {

    if (!country.currency) {
        return;
    }

    let countryName = country['name-en'];


    if (countriesWithoutMap.indexOf(countryName) !== -1) {
        return;
    }

    countryName = toCamelCase(countryName);

    fs.createReadStream('./map-svg-before/' + countryName + 'Low.svg').pipe(fs.createWriteStream('./map-svg/' + countryName + '.svg'));

});






