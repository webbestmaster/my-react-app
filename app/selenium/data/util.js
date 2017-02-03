// const CONSTANT = require('./constant');
const fs = require('fs');
// let G_MAIL_LOGIN = CONSTANT.G_MAIL_LOGIN;

module.exports = {

    // usage
    /*
    browser.takeScreenshot()
        .then(image => util.writeScreenshot('path/for/image', image))
        .then(done);
    */
    writeScreenshot: function (pathForImage, image) {

        return new Promise((resolve, reject) =>
            fs.writeFile(
                pathForImage + '.png',
                image,
                'base64',
                err => err ? reject() : resolve()
            )
        );

    }

};
