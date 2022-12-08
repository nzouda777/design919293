
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      loop: true,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      }
    });

    // function myFunction(x) {
    //   if (x.matches<=200) { // If media query matches
    //     var swiper = new Swiper(".mySwiper", {
    //       slidesPerView: 1,
    //       spaceBetween: 10,
    //       pagination: {
    //         el: ".swiper-pagination",
    //         dynamicBullets: true,
    //       },
    //       navigation: {
    //           nextEl: ".swiper-button-next",
    //           prevEl: ".swiper-button-prev",
    //       }
    //     });
    //   } else if(x.matches <= 650){
    //     var swiper = new Swiper(".mySwiper", {
    //       slidesPerView: 2,
    //       spaceBetween: 10,
    //       pagination: {
    //         el: ".swiper-pagination",
    //         dynamicBullets: true,
    //       },
    //       navigation: {
    //           nextEl: ".swiper-button-next",
    //           prevEl: ".swiper-button-prev",
    //       }
    //     });
    //   }
    // }
    //     function myFunction(x) {
    //   if (x.matches >= 800) { // If media query matches
    //     var swiper = new Swiper(".mySwiper", {
    //       slidesPerView: 3,
    //       spaceBetween: 10,
    //       pagination: {
    //         el: ".swiper-pagination",
    //         dynamicBullets: true,
    //       },
    //       navigation: {
    //           nextEl: ".swiper-button-next",
    //           prevEl: ".swiper-button-prev",
    //       }
    //     });
    //   } else if(x.matches >= 1000){
    //     var swiper = new Swiper(".mySwiper", {
    //       slidesPerView: 4,
    //       spaceBetween: 10,
    //       pagination: {
    //         el: ".swiper-pagination",
    //         dynamicBullets: true,
    //       },
    //       navigation: {
    //           nextEl: ".swiper-button-next",
    //           prevEl: ".swiper-button-prev",
    //       }
    //     });
    //   }
    // }
    
    // var x = window.matchMedia("(max-width: 860px)")
    // myFunction(x) 
    // x.addListener(myFunction) // Attach listener function on state changes