jQuery(function () {
    $('.gallery-desktop__wrapper').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        speed: 1000,
    });
});

jQuery(function () {
    $('.gallery-mobile__wrapper').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        speed: 1000,
    });
});