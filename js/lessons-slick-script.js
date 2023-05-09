jQuery(function () {
    $('.lessons').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 786,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
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