$(document).ready(function() {
  // Transition effect for navbar 
  var $nav = $('.navbar');
  var $win = $(window);
  var winH = '10';   // Get the window height.

  $win.on("scroll", function () {
      if ($(this).scrollTop() > winH ) {
          $nav.addClass("solid");
      } else {
          $nav.removeClass("solid");
      }
  }).on("resize", function(){ // If the user resizes the window
     winH = $(this).height(); // you'll need the new height value
  });

});
