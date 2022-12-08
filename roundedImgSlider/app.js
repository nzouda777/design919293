
    (function ($) {
      $(function () {
    
      var agSwiper = $('.mySwiper');
    
      if (agSwiper.length > 0) {
    
        var sliderView = 1;
        var ww = $(window).width();
        if (ww >= 1060) sliderView = 4;
        if (ww <= 800) sliderView = 3;
        if (ww <= 769) sliderView = 2;
        if (ww <= 400) sliderView = 1;
    
        var swiper = new Swiper('.mySwiper', {
          slidesPerView: sliderView,
          spaceBetween: 30,
          navigation:{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          loop: true,
          speed: 700,
        });
    
        $(window).resize(function () {
          var ww = $(window).width();
          if (ww >= 1060) swiper.params.slidesPerView = 4;
          if (ww <= 800) swiper.params.slidesPerView = 3;
          if (ww <= 769) swiper.params.slidesPerView = 2;
          if (ww <= 400) swiper.params.slidesPerView = 1;
        });
    
        $(window).trigger('resize');
    
        var mySwiper = document.querySelector('.swiper-container').swiper;
    
        agSwiper.mouseenter(function () {
          mySwiper.autoplay.stop();
          console.log('slider stopped');
        });
    
        
      }
    
      });
    })(jQuery);