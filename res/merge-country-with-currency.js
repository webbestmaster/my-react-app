const countries = require('./countries.json');
const data = require('./data.json');

function findInCountries(countryNameRu) {

    // console.log(countryNameRu);

    let result;

    countries.forEach(function (country) {
        if (country['name-ru'] === countryNameRu) {
            result = country;
        }
    });

    if (!result) {
        throw countryNameRu + ' - NOT FOUND';
    }

    return result;

}

data.forEach(function (district) {

    district.country.forEach(function (country) {
        let findedCountry = findInCountries(country['name-ru']);
        findedCountry.currency = country.currency;
    });

});


console.log(JSON.stringify(countries));


