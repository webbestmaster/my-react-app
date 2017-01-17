// bind input file

var $file = $('input[type=file]');

var width = 76 * 2;
var height = 57 * 2;

$file.on('change', function () {

    [].forEach.call(this.files, function (file) {
        readFile(file).then(function (data) {
            return resizeImage(data, width, height);
        });
    });

});

function readFile(file) {

    return new Promise(function (resolve) {

        var reader = new FileReader();

        reader.onloadend = function (e) {
            resolve({
                file: file,
                reader: e.currentTarget
            });
        };

        reader.readAsDataURL(file);

    });

}

function resizeImage(data, width, height) {

    return new Promise(function (resolve) {

        var file = data.file;
        var reader = data.reader;

        var image = new Image();

        var src = reader.result;

        image.src = src;

        $(image).on('load', function () {

            var canvas = document.createElement('canvas');

            canvas.width = width;
            canvas.height = height;

            var context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, width, height);

            document.body.appendChild(canvas);

            var a = document.createElement('a');
            // a.href = canvas.toDataURL();
            a.href = canvas.toDataURL('image/jpeg', 0.8); //'image/png', 'image/bmp', 'image/gif', 'image/jpeg', 'image/tiff'
            // a.download = file.name.replace('.svg', '.png');
            a.download = file.name.replace(/\.[\s\S]+/, '.jpg');
            a.click();

            setTimeout(resolve, 100);

        });

    });

}

function resizeFile(file) {


}

