const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();

    // debugger

   await page.property('viewportSize', {width: 800, height: 600})
    .then(function() {
        console.log(arguments)
    }, function () {
        console.log(arguments)
    }).catch(function () {
        console.log(arguments);
    });



    await page.on("onResourceRequested", function(requestData) {
        console.info('Requesting', requestData.url)
    });

    const status = await page.open('https://stackoverflow.com/');
    console.log(status);

    // console.log(t);

    setTimeout(function () {

        page.render('example3.png').then(function () {
            instance.exit();
        });

        // const content = await page.property('content');
        // console.log(content);


    }, 5000);


}());