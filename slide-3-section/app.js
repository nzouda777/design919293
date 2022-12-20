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
    $(".br-mobile-nav").css({ "visibility": "visible","transform": "translateX(0%)"})
})
$(document).scroll(() => {
  let $height = $(document).scrollTop()
  if ($(this).scrollTop() > 30) {
    $(".br-nav-navbar").css({"transition" : "all 20s", "position":"fixed","top": "-9%", "width":"100%","z-index":"3", "background": "url('https://global-uploads.webflow.com/600fe7d75184f7b68f55c88e/623da4c89a3f8d677f827868_header-back.png')"}).fadeIn()
  }else{
    $(".br-nav-navbar").css({"transition" : "all 2s","position":"relative", "width":"100%","z-index":"3", "background": "transparent"})
  }
  if ($(this).scrollTop() > 30) {
    $(".br-nav-navbar").css({"transition" : "all 1s", "position":"fixed","top": "0", "width":"100%","z-index":"3", "background": "url('https://global-uploads.webflow.com/600fe7d75184f7b68f55c88e/623da4c89a3f8d677f827868_header-back.png')"}).fadeIn()
  }
  
})  