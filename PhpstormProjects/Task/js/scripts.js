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
    var cutfulltext2 = $('.story').text()
    function cutfunk(b) {
        var fulltext = b.text()
        var newtext = fulltext.substr(0, 155);
        b.text(newtext + '...');
    }
    $('#password').blur(function(){
        if ($(this).val().length <= 5) {
            alert("Enter 6 characters!");
        }
    });
});
