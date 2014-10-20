<script type = "text/javascript">
var DENMARK = "315397,319199";
var UK = "319806,319807";
var GERMANY = "319808,319809";

$(document).ready(function () {
    // loop through all preferences and put the ID on the outer .item
    $('.email-prefs .item').each(function () {
        var id = $(this).find('input[type="checkbox"]').attr('id').replace('id_', '');
        //$(this).addClass('preference-container-' + id);
        $(this).data("id", id);
    });

    var emailCountry = $('#email-country').text();
    console.log(emailCountry);
    if (emailCountry == 'Germany') {
        preferenceClean(GERMANY);
    } else if (emailCountry == 'Denmark') {
        preferenceClean(DENMARK);
    } else {
        preferenceClean(UK);
    };
});

function preferenceClean(list) {
    var aList = list.split(',');
    $('.email-prefs .item').each(function () {
        if ($.inArray($(this).data('id'), aList) == -1) {
            $(this).remove();
        }
    });

    preferenceSort(list);
}

function preferenceSort(list) {
    var preferences = $('.email-prefs .item');

    // append the sort order to the data()
    var aList = list.split(',');
    preferences.each(function () {
        $(this).data("sort", $.inArray($(this).data("id"), aList));
    });

    // do the sort
    var placeholder = preferences.first().prev();
    preferences.detach().sort(function (a, b) {
        return $(a).data('sort') - $(b).data('sort');
    });
    placeholder.after(preferences);
} </script>
