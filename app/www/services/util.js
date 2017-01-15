import constant from './../const';
import db from './data-singleton';

const Promise = require('es6-promise-polyfill').Promise;

db.createTable(constant.DB.IMAGE_TABLE, constant.DB.IMAGE_FIELDS_WITH_TYPES);

function convertImageToBase64(image) {

    let canvas = document.createElement('canvas');

    canvas.width = image.width;
    canvas.height = image.height;

    let context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    return canvas.toDataURL();

}

const util = {
    imageToBase64: function (src) {

        return new Promise((resolve, reject) => {

            let image = new Image();

            image.onload = function (e) {
                let img = e.currentTarget;
                img.onload = img.onerror = null;
                resolve(convertImageToBase64(image));
            };

            image.onerror = function (e) {
                let img = e.currentTarget;
                img.onload = img.onerror = null;
                reject('Can not load image');
            };

            image.setAttribute('crossOrigin', 'Anonymous');

            image.src = src;

        });

    },
    cacheAsBase64: function (src) {

        return db.read(constant.DB.IMAGE_TABLE, 'src', src)
            .then(rows => {

                if (rows.length === 0) { // saved image not found
                    return util.imageToBase64(src)
                        .then(base64 => {
                            db.create(constant.DB.IMAGE_TABLE, constant.DB.IMAGE_FIELDS, [src, base64]);
                            return base64;
                        });
                }

                return rows[0].base64;

            });

    }

};

export default util;