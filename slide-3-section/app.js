var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 250000,
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

    $(".br-mobile-nav").fadeOut("slow")
})
$("#br-mobile-btn-nav").on('click', () => {
    $(".br-mobile-nav").css({"display": "block"})
})