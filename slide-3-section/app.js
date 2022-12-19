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

    $(".bs-mobile-nav").css({"transform": "translateX(-100%)"})
})
$("#bs-mobile-btn-nav").on('click', () => {
    $(".bs-mobile-nav").css({"transform": "translateX(0%)"})
})