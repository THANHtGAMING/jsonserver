$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:`<button type='button' class='slick-prev arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow:`<button type='button' class='slick-next arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
    dots:true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    arrows: false
  }
 
  );
});