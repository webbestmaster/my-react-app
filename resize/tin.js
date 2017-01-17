const tinify = require('tinify');
const fs = require('fs');
let countryData = require('./data.json');

// tinify.key = 'f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp';

let keys = [
    // 'f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp'
    'h0DW7VyYVXnl3awj2o7v9wXR-EavOiB5', //- kidmathgenius@gmail.com
    // 'eSu5nMg0TSDairQWQC_Bx0h41PxKgKEp', //- mikhail.anisimau.play@gmail.com
    // 'f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp', //- dmitry.turovtsov@gmail.com
    // '_JsmPE63lCa9UsS45vlKWMlhBhRntoK8', //- logikaismekalka@gmail.com
    // 'uY9x_ytUQ0sq9-bB8iTvwGnmiWVci4an', //- web.best.master@gmail.com
    // 'RmSQIT1W2KC2_gZf27_KaZ7GWIzpmKJu'  // - ae.fan.game@gmail.com
];

let i = 0;

function isExist(src) {

    return new Promise((resolve, reject) => fs.stat(src, err => resolve(!err)));

}

function tinyImage(src) {
    return new Promise((resolve, reject) => {

        tinify.key = keys[i % keys.length];
        tinify
            .fromFile(src)
            .toFile('./compressed/' + src, err => {

                if (err) {
                    console.log(keys[i % keys.length]);
                    console.log(err);
                    reject();
                    return;
                }

                console.log(src + ' - done');

                i += 1;

                fs.unlink(src, resolve);

            });

    });
}

let p = Promise.resolve();

let allImages = [];

countryData.forEach(country => {
    country.currency && country.currency.forEach(currency => {
        currency.image.forEach(image => {
            if (allImages.indexOf(currency.abbreviation + '/' + image) === -1) {
                allImages.push(currency.abbreviation + '/' + image);
                let src = './currency/' + currency.abbreviation + '/' + image;
                p = p.then(() => isExist(src).then(isExists => isExists ? tinyImage(src) : console.log(src + ' is not exist')));
            }
        });
    });
});

