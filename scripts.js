$(() => {
  function navScrolled() {
    $('header').addClass('hidden', 1000, 'swing');
  }
  function navUnScrolled() {
    $('header').removeClass('hidden', 1000, 'swing');
  }
  $(window).scroll(function() {
    if($(window).scrollTop() > 400) {
      navScrolled()
    } else {
      navUnScrolled()
    }
  });
});