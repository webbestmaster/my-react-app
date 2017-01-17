const tinify = require('tinify');

tinify.key = 'f8ZqkiaR5hwI9QRdc8Dwropue4kENmRp';

tinify
    .fromFile('test-image.jpg')
    .toFile('test-image-compressed.jpg', function () {
        console.log(arguments);
    });
