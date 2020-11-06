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

$(function () {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.smoothScroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });
});

$(document).on('click', '.nav-link.active', function () {
    var href = $(this).attr('href').substring(1);
    //alert(href); 
    $(this).removeClass('active');
    $('.tab-pane[id="' + href + '"]').removeClass('active');

});
$(document).mouseup(function (e) {
    var container = $("#tablist"); // target ID or class 
    // if the target of the click isn't the container nor a descendant of the container 
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        // get Event here 
        $('.active').removeClass('active');
    }
});


function closeNav() {
    document.getElementById("navbarsExampleDefault").style.width = "0";
}

$('body').on('click', function () {
    if (parseInt($('#navbarsExampleDefault').css('width')) > 0) {
        closeNav();
    }
});