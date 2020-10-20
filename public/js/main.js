$(document).ready(function () {
  // Transition effect for navbar
  var $nav = $('.navbar');
  var $win = $(window);
  var winH = '10'; // Get the window height.

  $win
    .on('scroll', function () {
      if ($(this).scrollTop() > '20') {
        $nav.addClass('solid');
      } else {
        $nav.removeClass('solid');
      }
    })
    .on('resize', function () {
      // If the user resizes the window
      winH = $(this).height(); // you'll need the new height value
    });

  $('.carousel-2').slick({
    autoplay:true,
    mobileFirst:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: "unslick",
        },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          speed: 1200,
          autoplay: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          speed: 1200,
          autoplay: true,
        },
      },
    ],
  });

  $('.testimonial-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
  });
});
