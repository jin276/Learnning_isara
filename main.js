$(function() {
  let location = 300,
      scrolltop = $("#top");
  scrolltop.css('bottom', '-100px');
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > location) {
      scrolltop.stop().css({'bottom': '20%'});
    } else {
      scrolltop.stop().css({'bottom': '-100px'}, 200);
    }
  });
  scrolltop.click(function() {
    $('body, html').animate({scrollTop: 0}, 300);
    // return false;
  });
});