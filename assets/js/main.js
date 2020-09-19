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

// console.log("YO")

// // Grid

// var $grid = $('.grid').masonry({
//     itemSelector: '.grid-item',
//     percentPosition: true,
//     columnWidth: '.grid-sizer',
//     originBottom: false,
//     originLeft: false,
//     gutter: 10
    
//   });
//   // layout Masonry after each image loads
//   $grid.imagesLoaded().progress( function() {
//     $grid.masonry();
//   }); 


//   var $grid = $('.grid').isotope({
//     // options
//     itemSelector: '.grid-item',
    
//   });
  
//   // // change is-checked class on buttons
  // var $buttonGroup = $('.filters');
  // $buttonGroup.on( 'click', 'li', function( event ) {
  //   $buttonGroup.find('.is-checked').removeClass('is-checked');
  //   var $button = $( event.currentTarget );
  //   $button.addClass('is-checked');
  //   var filterValue = $button.attr('data-filter');
  //   $grid.isotope({ filter: filterValue });
  // });

  // var $buttonGroup = $('.select');
  // $buttonGroup.on( 'click', 'option', function( event ) {
  //   $buttonGroup.find('.is-checked').removeClass('is-checked');
  //   var $button = $( event.currentTarget );
  //   $button.addClass('is-checked');
  //   var filterValue = $button.attr('data-filter');
  //   $grid.isotope({ filter: filterValue });
  // });