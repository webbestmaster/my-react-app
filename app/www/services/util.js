function imageToBase64(image) {

    let canvas = document.createElement('canvas');

    canvas.width = image.width;
    canvas.height = image.height;

    let context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    return canvas.toDataURL();

}

export default {
    imageToBase64: function (src) {

        return new Promise((resolve, reject) => {

            let image = new Image();

            image.onload = function (e) {
                let img = e.currentTarget;
                img.onload = img.onerror = null;
                resolve(imageToBase64(image));
            };

            image.onerror = function (e) {
                let img = e.currentTarget;
                img.onload = img.onerror = null;
                reject('Can not load image');
            };

            image.setAttribute('crossOrigin', 'Anonymous');

            image.src = src;

        });

    }

};
