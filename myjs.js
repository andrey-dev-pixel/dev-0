

$(function () {

$(window).scroll(function() {
        if ($(this).scrollTop() > 1080){  
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
            
        }
    });

$(window).scroll(function() {
        if ($(this).scrollTop() > 1080){  
            $('.icon-bar').addClass("color");
        }
        else{
            $('.icon-bar').removeClass("color");
            
        }
    });
// Menu opener hamburger
$('.nav-link-btn').click(function () {
       $('body').removeClass('nav--collapsed');
    });
});