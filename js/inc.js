$(function () {
    $('body').prepend('<header id="header"></header>')
    $('body').append('<footer id="footer"></footer>')
    $("#header").load("inc.html .head",function(){
        $.getScript('./js/header.js');
    });
    $("#footer").load("inc.html .footer-con, .quick-box",function(){
        $.getScript('./js/footer.js');
})
});


