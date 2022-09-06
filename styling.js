$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  
  $('.owl-carousel').owlCarousel({
    margin:2,
    loop:true,
    autoWidth:true,
    nav:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:4000,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  