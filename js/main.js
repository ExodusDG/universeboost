$(document).ready(function() {
    $('.answer').click(function() {
        var $this = $(this);
        $(this).toggleClass('answer-active');
        setTimeout(function() {
            $this.find('.answer-desc').toggleClass('answer-desc-active');
        }, 250);
    });
    $('.mobile-navbar-links').hide();
    $('.hamburger').click(function() {
        $('#hamburger-id').toggleClass('is-active');
        $('.navbar-mobile-menu').toggleClass('mobile-background-active');
        $('.mobile-navbar-links').toggle();
        if (('.navbar-mobile-menu').hasClass("mobile-background-active")) {
            return false;
        } else {
            $('.navbar-mobile-menu').addClass('mobile-background-default');
        }
    });

    function mobileAdaptive() {
        var w = $(window).width();
        if (w > 414) {
            return false;
        } else {
            $('.boost-cards').removeClass('d-flex');
            $('.answers').removeClass('d-flex');
            $('.navbar-mob').css('display:', 'flex');
        }
    }
    $(window).resize(function() {
        mobileAdaptive();
    });
});