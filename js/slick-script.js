jQuery(function () {
    $('.reviews').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 786,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                }
            }
        ],
        speed: 1000,
        // easing: 'ease',
        // autoplay: true,
        // autoplaySpeed: 30000,
        // pauseOnFocus:false,
        // pauseOnHover: false,
        // pauseOnDotsHover:true,
    });
});