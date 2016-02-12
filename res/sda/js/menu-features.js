$(document).ready(function() {
    var navpos = $('#features-sidemenu').offset();
    console.log(navpos.top);
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() + 24 > navpos.top) {
//            $('#features-sidemenu').css("margin-top", $(window).scrollTop() - navpos.top + 45 +"px");
              $('#features-sidemenu').addClass("fixed");
        }
        else {
//            $('#features-sidemenu').css("margin-top", "21px");
            $('#features-sidemenu').removeClass("fixed");
        }
    });
});