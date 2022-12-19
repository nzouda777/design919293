var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".closebtn").on('click', () => {

    $(".br-mobile-nav").css({"transform": "translateX(-100%)"})
})
$("#br-mobile-btn-nav").on('click', () => {
    $(".br-mobile-nav").css({"transform": "translateX(0%)"})
})