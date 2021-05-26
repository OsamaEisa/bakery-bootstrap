$(function() {

  $('.hamburger-menu').on('click', function() {
    $('.toggle').toggleClass('open');
    $('.nav-list').toggleClass('open');
  });

  AOS.init({
    easing: 'ease',
    duration: 1000
  });

  $('.nav-list a').on('click', function () {
    $('.nav-list').removeClass('open');
    $('.toggle').removeClass('open');
});

    $(window).scroll(function() {
      if ($(window).scrollTop() >= 500) {
        $('.arrow-up').fadeIn();
      }
      else {
        $('.arrow-up').fadeOut();
      }

    });

    $('.arrow-up').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 700);
    });

});