const phantom = require('phantom');

(async function () {

    var instance = await phantom.create();

    const page = await instance.createPage();

    await page.property('viewportSize').then(function () {
        console.log(arguments)
    });

    await page.property('viewportSize', {width: 800, height: 600})
        .then(function () {
            console.log(arguments)
        });

    await page.on("onResourceRequested", function(requestData) {
        console.info('Requesting', requestData.url)
    });

    const status = await page.open('https://stackoverflow.com/');

    console.log(status);

    await page.render('example4.png');

    instance.exit();


}());

// function (error, ph) {
// ph.createPage(function (err, page) {
// page.propr('viewportSize', function (err, value) {
//     console.log(value);
//     page.set('viewportSize', {width: 800, height: 600}, function (err) {
//         page.open('http://google.com', function (err, status) {
//             page.render('google.png', function (err) {
//                 ph.exit();
//             });
//         });
//     });
// });
// });
// }