$(document).ready(
  function() {
    $('.scroll-down').on('click', function(e) {
      $('html, body, #hero').animate({ scrollTop: $('#scroll-to').offset().top}, 500, 'linear');
    });
  }
);
