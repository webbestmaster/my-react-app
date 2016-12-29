var globalData = [];


$('.district').each(function () {

    // detect global name

    var $header = $(this);

    var district = $header.text().trim();

    var data = {
        'district-ru': district,
        country: []
    };

    var $table = $header.next();



    $table.find('tr').each(function () {

        var $tr = $(this);

        var $td = $tr.find('.flag');

        var country = {
            id: '',
            'name-ru': '',
            currency: [],
            flagBgP: ''

        };

        var $currency = $tr.find('.currency');

        if ($td.length) {
            country['id'] = $td.attr('class').replace('flag ', '');
            country['name-ru'] = $tr.find('.country').text().trim();
            country['flagBgP'] = $td.find('b').css('backgroundPosition');
            data.country.push(country);
        } else {
            country = data.country[data.country.length - 1];
        }

        country.currency.push({
            abbreviation: $currency.find('b').text().trim(),
            'name-ru': $currency.find('b').remove() && $currency.text().replace('-', '').trim(),
            link: $currency.find('a').attr('href')
        });

    });


    globalData.push(data)

});

JSON.stringify(globalData);








