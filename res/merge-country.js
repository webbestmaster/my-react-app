const countryRu = require('./country-ru.json');
const countryEn = require('./country-en.json');

let data = [];

function getRuCountryByEnCountry(countryEn) {

    let result = countryRu.filter(country =>
        country.alpha2 == countryEn.alpha2 &&
        country.alpha3 == countryEn.alpha3 &&
        country.numericCode == countryEn.numericCode &&
        country.subdivisionCode == countryEn.subdivisionCode
    );

    if (result.length !== 1) {
        throw 'NO COUNTRY!!';
    }

    return result[0];

}

countryEn.forEach(country => {

    let oneCountryRu = getRuCountryByEnCountry(country);

    country['name-ru'] = oneCountryRu['name-ru'];

});

console.log(JSON.stringify(countryEn));
