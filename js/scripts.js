

(function ($) {
    "use strict";

    /* Preloader */
    $(window).on('load', function () {
        var preloaderFadeOutTime = 500;

        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    });

        // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function (event) {
        if (!$(this).parent().hasClass('dropdown'))
            $(".navbar-collapse").collapse('hide');
    });

    // create the back to top button
    $('body').prepend('<a href="#header" class="back-to-top page-scroll style:"position:fixed;">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }   
    });

})(jQuery);