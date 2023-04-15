const swiperThumb = new Swiper(".swiper-thumbnail", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 400,
  //   spaceBetween: 100,
  slidesPerView: 2,

  //   breakpoints: {
  //     // when window width is >= 320px
  //     310: {
  //       slidesPerView: 1,
  //       spaceBetween: 30,
  //     },
  //     // when window width is >= 480px
  //     600: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //     // when window width is >= 640px
  //     900: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     1200: {
  //       slidesPerView: 4,
  //       spaceBetween: 30,
  //     },
  //   },
  //   thumbs: {
  //     swiper: galleryThumbs,
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 400,
  //   spaceBetween: 100,
  //   slidesPerView: 1,

  breakpoints: {
    // when window width is >= 320px
    310: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  thumbs: {
    swiper: swiperThumb,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

{
  /* <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script>
   
     var galleryThumbs  = new Swiper("#thumb-swiper", {
       spaceBetween: 12,
      slidesPerView:"auto",
       watchSlidesProgress: true,
       grabCursor:true,
       centeredSlides: false,
       allowTouchMove: false,
      a11y: false,
});
       var galleryTop  = new Swiper("#gallery-swiper", {
       spaceBetween: 12,
       navigation: {
         nextEl: "#thumb-arrow-next-slide",
         prevEl: "#thumb-arrow-prev-slide",
       }, */
}
/* This piece of code connects main slider with thumbnail slider*/
//        thumbs: {
//          swiper: galleryThumbs,
//        },
//        a11y: false,
// loop: true,
//      });
//    </script>
