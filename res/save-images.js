var linkData = require('./data.json');

var http = require('http');

var fs = require('fs'),
    request = require('request');

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', function () {

            setTimeout(callback, 1000);

        });
    });
};


// example
// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
//     console.log('done');
// });

var p = Promise.resolve();

linkData.forEach(function (continent) {

    continent.country.forEach(function (country) {

        country.currency.forEach(function (currency, i) {

            // create folder is not exist
            // if exist -> abort

            p = p.then(function () {
                return saveDataByCurrency(currency);
            });

        });

    });

});

function createFolder(folderName) {

    return new Promise(function (resolve, reject) {
        fs.mkdir(folderName, function (err) {
            resolve();
            // return err ? reject() : resolve()
        });
    });

}


function saveDataByCurrency(currency) {
    var jsdom = require("jsdom");

    var host = 'banknotes.finance.ua';

    // var options = {
    //     host: host,
    //     path: currency.link.split(host)[1]
    // };

    /*
     var request = http.request(options, function (res) {
     var data = '';
     res.on('data', function (chunk) {
     data += chunk;
     });
     res.on('end', function () {


     jsdom.env(
     data,
     ["http://code.jquery.com/jquery.js"],
     function (err, window) {
     console.log("there have been", window.$("a").length - 4, "io.js releases!");
     }
     )

     });

     });

     request.on('error', function (e) {
     console.log(e.message);
     });
     request.end();
     */


    return new Promise(function (resolve, reject) {

        createFolder(currency.abbreviation)
            .then(function () {

                jsdom.env({
                    url: currency.link,
                    scripts: ["http://code.jquery.com/jquery.js"],
                    done: function (err, window) {

                        var $ = window.$;


                        var arr = [];

                        $('.wm_magnify').each(function () {

                            var $img = $(this).find('img');

                            var pathToImage = $img.attr('src').replace('/preview/', '/full/');

                            arr.push(

                                new Promise(function (res, req) {

                                    download('http://' + host + pathToImage, currency.abbreviation + '/' + pathToImage.split('/').pop(), function () {

                                        setTimeout(function () {
                                            console.log(currency.abbreviation);
                                            console.log('done');
                                            res();
                                        }, 50);

                                    });

                                })
                            )

                        });

                        Promise.all(arr).then(resolve);

                    },
                    error: function () {

                        setTimeout(function () {
                            console.warn('-----ERROR');
                            resolve();
                        }, 1000);

                    }

                });

                // .catch(function () {
                //     resolve();
                //     console.warn('folder', currency.abbreviation, 'is exist.');
                // });


            });


    });

}
