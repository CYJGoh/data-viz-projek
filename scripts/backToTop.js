var btn = $('#backToTopButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '800');
});