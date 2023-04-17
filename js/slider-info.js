const thumbs = new Swiper(".info-slider__thumbs-slider", {
  // Optional parameters
  direction: "vertical",
  // loop: true,
  //   rewind: true,

  speed: 400,
  spaceBetween: 20,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: ".info-slider_thumbs-button-next",
    prevEl: ".info-slider_thumbs-button-prev",
  },
});
