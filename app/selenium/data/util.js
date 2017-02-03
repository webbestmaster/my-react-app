// const CONSTANT = require('./constant');
const fs = require('fs');
// let G_MAIL_LOGIN = CONSTANT.G_MAIL_LOGIN;
// let easyimg = require('easyimage');

const Canvas = require('canvas');
const Image = Canvas.Image;

const BASE64_IMAGE_PREFIX = 'data:image/png;base64,';

module.exports = {

    // usage
    /*
    browser
        .takeScreenshot()
        .then(image => util.writeScreenshot('path/for/image', image))
     */
    writeScreenshot: function (pathForImage, image) {

        return new Promise((resolve, reject) =>
            fs.writeFile(
                pathForImage + '.png',
                image.replace(BASE64_IMAGE_PREFIX, ''),
                'base64',
                err => err ? reject() : resolve()
            )
        );

    },

    // usage
    /*
    util
        .takeScreenshotOfElement(browser, browser.findElement(byCss('.country-card__flag')))
        .then(image => util.writeScreenshot('path/to/image', image))
     */
    takeScreenshotOfElement: function (browser, element) {

        let location, size;

        return Promise
            .all([
                element.getLocation(),
                element.getSize()
            ])
            .then(data => {
                location = data[0];
                size = data[1];
                return browser.executeScript('scroll(0, ' + location.y + ')');
            })
            .then(() => browser.takeScreenshot())
            .then(image => {

                let canvas = new Canvas(size.width, size.height),
                    ctx = canvas.getContext('2d'),
                    img = new Image();

                img.src = BASE64_IMAGE_PREFIX + image;

                ctx.drawImage(img, -location.x, 0, img.width, img.height);

                return canvas.toDataURL();

            });

    }

};
