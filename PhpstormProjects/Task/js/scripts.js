$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: false
    });
    $('.login, .login-form').mouseenter(function(){
        $('.login-form').slideDown();
    });$('.login, .login-form').mouseleave(function(){
        $('.login-form').slideUp();
    });
});
