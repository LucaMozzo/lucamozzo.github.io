$(document).ready(function(){
    $('.body-container').load('home.html');
    //navbar
    $('.nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var url = $(this).children().attr('data-href');
        $('.body-container').load(url);
    });
});