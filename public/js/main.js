$(document).ready(function () {
  // Transition effect for navbar
  var $nav = $('.navbar');
  var $win = $(window);
  var winH = '10'; // Get the window height.
  var backButton = '<span class="slick-prev"></span>';
  var nextButton = '<span class="slick-next"></span>'

  $('.count').each(function() {

    $(this).prop('counter', 0).animate({
  
      counter: $(this).text()
  
    }, {
  
      duration: 4000,
  
      easing: 'swing',
  
      step: function(now) {
  
        $(this).text(Math.ceil(now));
      }
    });
  });

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows:false,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]});

  $('.testimonial-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
  });

  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows:true,
    prevArrow: backButton,
    nextArrow: nextButton,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

});

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
  }

  counter("count-1",0,100,3000);
  counter("count-2",0,50,2000);
});

gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        scrollTrigger:{
          trigger: '#about-text'
        },
      });
       