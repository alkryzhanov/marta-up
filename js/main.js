// $(document).ready(function() {
//       $('.header-slider').slick({
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         arrows: false,
//         dots: true,
//         // autoplay: true,
//         // autoplaySpeed: 2000,
//         responsive: [{
//           breakpoint: 1106,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           }
//         }, ]
//       });
//
//       // $('.btn__menu').on('click', function() {
//       //   $('.menu__list').slideToggle();
//       // });

$(document).ready(function() {
  $('.header-slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: 'header-dots',
    autoplay: true,
    autoplaySpeed: 2000,
  });
});