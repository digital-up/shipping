$(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
        $('.pageup').fadeIn();    
        } else {
        $('.pageup').fadeOut();   
        }
    });
    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});
});
