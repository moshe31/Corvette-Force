$(document).ready(function() {
 $(window).scroll(function(){
    if ($(window).scrollTop() >= 150) {
        $('header nav').addClass('fixed-header');
    }
    else {
        $('header nav').removeClass('fixed-header');
    }
});

});