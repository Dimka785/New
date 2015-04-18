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

    $('#password').blur(function(){
        if ($(this).val().length <= 5) {
            alert("Enter 6 characters!");
        }
    });
    $('.facebook').hover(function(){
        $('.facebook').css('background-color','black');
    });
    $('.facebook').mouseleave(function(){
        $('.facebook').css('background-color','#4d6baa');
    });
    $('.twitter').hover(function(){
        $('.twitter').animate({ opacity: '0.1'});
    });
    $('.twitter').mouseleave(function(){
        $('.twitter').animate({ opacity: '1'});
    });
    var cutfulltext = $('.text1').text()
    var cutfulltext1 = $('.text2').text()
    var cutfulltext2 = $('.text3').text()
    function cutfunk(b){
        var fulltext = b.text()
        var newtext =fulltext.substr(0,155);
        b.text(newtext+ '...');
    }

    cutfunk($('.text1'));
    cutfunk($('.text2'));
    cutfunk($('.text3'));



    $('.click').click(function() {
        $('#popupWrapper').show();
        $('.popupTitle').text($('.title1').text());
        $('.popupdata').text($('.data1').text());
        $('.fulltext').text( cutfulltext);

    });
    $('.click1').click(function() {
        $('#popupWrapper').show();
        $('.fulltext').text($('.text2').text());
        $('.popupTitle').text($('.title2').text());
        $('.popupdata').text($('.data2').text());
        $('.fulltext').text(cutfulltext1);
    });
    $('.click2').click(function() {
        $('#popupWrapper').show();
        $('.fulltext').text($('.text3').text());
        $('.popupTitle').text($('.title3').text());

        $('.fulltext').text(cutfulltext2);
    });
    $('#closeMe').click(function () {
        $('#popupWrapper').hide();

    });

    $(function() {
        $( "#datepicker" ).datepicker({
            inline: true
        });

    });
    $('.video,.like').hover(function(){
        $('.like').show();
    });
    $('.video,.like').mouseleave(function(){
        $('.like').hide();
    });
    $('.video,#play-button').hover(function(){
        $('#play-button').show();
    });
    $('.video,#play-button').mouseleave(function(){
        $('#play-button').hide();
    });
    $( "#tabs" ).tabs();
});








