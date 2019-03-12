$(() => {

  mobileModifications();

  $(window).resize(function(event) {
    console.log("resized!!");
    mobileModifications();
  });

  function navScrolled() {
    $('header').addClass('hidden', 1000, 'swing');
  }

  function navUnScrolled() {
    $('header').removeClass('hidden', 1000, 'swing');
  }

  function windowWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  function mobileModifications() {
    let width = windowWidth()
    console.log(width)
    if (width > 600) {
      navUnScrolled();
      $(window).scroll(function() {
        if($(window).scrollTop() > 400) {
          navScrolled()
        } else {
          navUnScrolled()
        }
      });
    } else {
      navScrolled();
    }
  }
});