$(function () {

    $(".hambargar").on("click", function () {

        ($("#header").toggleClass("open"));
    });

    $(".mask").on("click", function () {

        $("#header").toggleClass("open");

    });

    $("#navi a").on("click", function () {

        $("#header").toggleClass("open");
    });

    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });


    $(function () {
        $(".reason-wrapper").slick({
            autoplay: true,
            arrows: true,
            prevArrow: '<button class="arrow-common arrow-prev"></button>',
            nextArrow: '<button class="arrow-common arrow-next"></button>',
            asNavFor: ".reason-wrapper2",
        });
    });


    $(function () {
        $(".reason-wrapper2").slick({
            slidesToShow: 3,
            asNavFor: ".reason-wrapper",
            focusOnSelect: true,
            dots: true,
        });
    });


    $(function () {
        $(".slick-area").slick({
            arrows: false,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            dots: true,
        });
    });


    $(window).scroll(function () {

        $(".balloon").each(function () {
            var scroll = $(window).scrollTop();

            var target = $(this).offset().top;

            var windowHeight = $(window).height();

            if (scroll > target - windowHeight + $(this).outerHeight()) {
                $(this).addClass("interview-balloon");
            }
        });
    });

});