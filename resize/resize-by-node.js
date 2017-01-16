const gm = require('gm').subClass({imageMagick: true});
let countryData = require('./img/data.json');

const MAX_WIDTH = 1024;
const MAX_HEIGHT = 768;

function resize(path) {

    return new Promise((resolve, reject) => {

        gm(path)
            .size(function (err, size) {

                if (err) {
                    reject();
                    return console.log(err);
                }

                if (size.width > MAX_WIDTH || size.height > MAX_HEIGHT) {
                    gm(path)
                        .resize(MAX_WIDTH, MAX_HEIGHT)
                        .write('./resized/' + path, err => err ? reject() : (resolve(), console.log(path)));
                } else {
                    resolve();
                }

            });
    });

}

let p = Promise.resolve();

countryData.forEach(country => {
    country.currency && country.currency.forEach( currency => {
        currency.image.forEach(image => {

            p = p.then(() => resize('img/currency/' + currency.abbreviation + '/' + image));

        });
    });
});

