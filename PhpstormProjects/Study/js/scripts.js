$(document).ready(function(){
    $('#clickMe').click(function(){
        $('#popupWrapper').show()
    });
    $('#closeMe').click(function(){
        $('#popupWrapper').hide()
    });
    $('.fin1, .block').mouseenter(function(){
        $('.block').slideDown();
    });$('.fin1, .block').mouseleave(function(){
        $('.block').slideUp();
    });
    $('.fin3, .block2').mouseenter(function(){
        $('.block2').slideDown();
    });$('.fin3,.block2').mouseleave(function(){
        $('.block2').slideUp();
    });
    $('.list li').hover(function(){
        $(this).find('.middle-list').animate({height: "show"}, 1000);
    });
    $('.list li').mouseleave(function(){
        $(this).find('.middle-list').animate({height: "hide"}, 1000);
    });

    $('.bxslider').bxSlider({
        auto: true,
        autoControls: false
    });

    $("select").msDropDown();
    $('input[type=text]').focus(function(){
        $(this).css({border: '2px solid red', background: '#999'});
    }).blur(function(){
        var newVal = $(this).val().replace(/\s/g, '');
        $(this).val(newVal);
        if ($(this).val() == "" ) {
            $(this).css({border: '1px solid red', background: '#FBACAC'})
        }
    }).change(function(){
        if ($(this).val().trim == "" ) {
            $(this).css({border: '1px solid red', background: '#FBACAC'})
        }
    });
    $('#pass').blur(function(){
        if ($(this).val().length <= 5) {
            alert("Enter 6 characters!!!!!!!");
        }
    });

});
