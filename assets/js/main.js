$(function() {
    
    "use strict";
    
    
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
  

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo.svg");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/logo-2.svg");
        }
    });
    
    
    

    var scrollLink = $('.page-scroll');
    
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    
    
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    
    
    
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
   
    
    $('select').niceSelect();
    
    
   
    
    var wow = new WOW({
        boxClass: 'wow', 
        mobile: false, 
    })
    wow.init();
    
    
    
    
    
    
    
    
    
    
    
});