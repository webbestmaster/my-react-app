// https://ru.wikipedia.org/wiki/ISO_3166-1

(function () {

    var data = [];

    $('.jquery-tablesorter tbody tr').each(function () {

        var $tr = $(this);

        var nameRu = $tr.find('td').get(0).innerText;

        var alpha2 = $tr.find('td').get(1).innerText;
        var alpha3 = $tr.find('td').get(2).innerText;
        var numericCode = $tr.find('td').get(3).innerText;

        var subdivisionCode = $tr.find('td').get(4).innerText;

        console.log(nameRu, alpha2, alpha3, numericCode, subdivisionCode)

        data.push({
            'name-ru' : nameRu.trim(),
            alpha2: alpha2.trim(),
            alpha3: alpha3.trim(),
            numericCode: numericCode.trim(),
            subdivisionCode: subdivisionCode.trim()
        })

    });

    console.log(data);

}());
