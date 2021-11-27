$(function () {
    ////// MENU-MOBI
    $(".icon-bar").click(function () {
        $('.header').toggleClass('active');
        $('.icon-bar i').toggleClass('fa-times');
        $('.opacity__menu').toggleClass('open__opacity');
    })
    $('.opacity__menu').click(function () {
        $('.header').removeClass('active');
        $('.bar__mobi').removeClass('fa-times');
        $('.opacity__menu').toggleClass('open__opacity');
    })
    // $(".icon-bar").click(function () {
    //     $('.header').toggleClass('active');
    // })


    ////  Article
    $('.article .article-btn').click(function () {
        $('.article .box-content').toggleClass('active');
        $('.article .box-content').toggleClass('active');
    })
    //// SEARCH-MOBI
    $('.search-icon--mobi').click(function () {
        $('.search-form').toggleClass('active');
    })
    $(".banner-list").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
    });
    $(".product-details .box-silder").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
    });
    $(".news-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
    });

})


////////// BACK-TO-TOP

var btn = $('#back-to-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});