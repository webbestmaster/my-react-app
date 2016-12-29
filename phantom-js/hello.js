var page = require('webpage').create();

page.viewportSize = {
    width: 1280,
    height: 800
};

page.open('http://example.com', function (status) {
    console.log("Status: " + status);
    if (status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});