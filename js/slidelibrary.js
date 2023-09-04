

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
},
  breakpoints: {
    481: {
        slidesPerView: 3
      }
}
});