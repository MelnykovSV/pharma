const MAX_SLIDES_PER_VIEW = 4;

const swiper = new Swiper(".swiper-offers", {
  // Optional parameters
  direction: "horizontal",
  // loop: false,
  // rewind: true,
  watchSlidesProgress: true,

  speed: 400,
  spaceBetween: 30,
  // slidesPerView: "auto",
  // loopedSlides: 1,
  // loopedSlidesLimit: false,

  breakpoints: {
    // when window width is >= 320px
    270: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    570: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    870: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1170: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".offers-slider__button-next",
    prevEl: ".offers-slider__button-prev",
  },
});

// if (
//   swiper.slides.length < MAX_SLIDES_PER_VIEW * 2 &&
//   swiper.slides.length > MAX_SLIDES_PER_VIEW
// ) {
//   console.log(swiper.slides[0]);
//   // Duplicate the existing slides until the total number of slides is >= slidesPerView * 2

//   const originalSlides = swiper.slides;
//   for (let i = 0; i < originalSlides.length; i++) {
//     swiper.appendSlide(originalSlides[i].outerHTML);
//   }

//   console.log(swiper.slides.length);
// }

// swiper.on("reachEnd", function () {
//   // const slideIndex = swiper.slides.length - 1;
//   // const newSlideHtml = '<div class="swiper-slide">New slide</div>';
//   console.log("end");
//   // swiper.appendSlide(swiper.slides[0]);
// });

// {
//   /* <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
// <script>

//      var galleryThumbs  = new Swiper("#thumb-swiper", {
//        spaceBetween: 12,
//       slidesPerView:"auto",
//        watchSlidesProgress: true,
//        grabCursor:true,
//        centeredSlides: false,
//        allowTouchMove: false,
//       a11y: false,
// });
//        var galleryTop  = new Swiper("#gallery-swiper", {
//        spaceBetween: 12,
//        navigation: {
//          nextEl: "#thumb-arrow-next-slide",
//          prevEl: "#thumb-arrow-prev-slide",
//        }, */
// }
/* This piece of code connects main slider with thumbnail slider*/
//        thumbs: {
//          swiper: galleryThumbs,
//        },
//        a11y: false,
// loop: true,
//      });
//    </script>
