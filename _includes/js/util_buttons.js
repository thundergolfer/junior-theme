$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.circle-button').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.print-button').click(function () {
        console.log("hey");
        window.print();
        return false;
    });
});
