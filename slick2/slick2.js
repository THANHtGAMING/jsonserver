$(document).ready(function(){
    $('.image-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      prevArrow:`<button type='button' class='slick-prev arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
      nextArrow:`<button type='button' class='slick-next arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows:false
    }
   
    );
  });