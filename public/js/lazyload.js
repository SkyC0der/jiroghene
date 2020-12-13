const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src
}

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 100px 0px'
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image)
});

// jQuery(document).ready(function($) {
//     var $win = $(window),
//         $con = $('#container'),
//         $imgs = $("img");
    
//     $con.isotope({
//         onLayout: function() {
//             $win.trigger("scroll");
//         }
//     });
    
//     $imgs.lazyload({
//         failure_limit: Math.max($imgs.length - 1, 0)
//     });
// });

// // var lazyLoadInstance = new LazyLoad({
// //     // Your custom settings go here
// //   });


// !function(window){
//     var $q = function(q, res){
//           if (document.querySelectorAll) {
//             res = document.querySelectorAll(q);
//           } else {
//             var d=document
//               , a=d.styleSheets[0] || d.createStyleSheet();
//             a.addRule(q,'f:b');
//             for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
//               l[b].currentStyle.f && c.push(l[b]);
  
//             a.removeRule(0);
//             res = c;
//           }
//           return res;
//         }
//       , addEventListener = function(evt, fn){
//           window.addEventListener
//             ? this.addEventListener(evt, fn, false)
//             : (window.attachEvent)
//               ? this.attachEvent('on' + evt, fn)
//               : this['on' + evt] = fn;
//         }
//       , _has = function(obj, key) {
//           return Object.prototype.hasOwnProperty.call(obj, key);
//         }
//       ;
  
//     function loadImage (el, fn) {
//       var img = new Image()
//         , src = el.getAttribute('data-src');
//       img.onload = function() {
//         if (!! el.parent)
//           el.parent.replaceChild(img, el)
//         else
//           el.src = src;
  
//         fn? fn() : null;
//       }
//       img.src = src;
//     }
  
//     function elementInViewport(el) {
//       var rect = el.getBoundingClientRect()
  
//       return (
//          rect.top    >= 0
//       && rect.left   >= 0
//       && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
//       )
//     }
  
//       var images = new Array()
//         , query = $q('img')
//         , processScroll = function(){
//             for (var i = 0; i < images.length; i++) {
//               if (elementInViewport(images[i])) {
//                 loadImage(images[i], function () {
//                   images.splice(i, i);
//                 });
//               }
//             };
//           }
//         ;
//       // Array.prototype.slice.call is not callable under our lovely IE8 
//       for (var i = 0; i < query.length; i++) {
//         images.push(query[i]);
//       };
  
//       processScroll();
//       addEventListener('scroll',processScroll);
  
//   }(this);