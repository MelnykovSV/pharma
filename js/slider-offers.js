const MAX_SLIDES_PER_VIEW = 4;

const swiper = new Swiper('.swiper-offers', {
  // Optional parameters
  direction: 'horizontal',
  // loop: false,
  // rewind: true,
  watchSlidesProgress: true,

  speed: 400,
  spaceBetween: 30,
  // slidesPerView: "auto",
  // loopedSlides: 1,
  // loopedSlidesLimit: false,

  breakpoints: {
    270: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    570: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

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
    nextEl: '.offers-slider__button-next',
    prevEl: '.offers-slider__button-prev',
  },
});

const slider = document.querySelector('.product-gallery__slider');
const sliderBigImageThumb = document.querySelector(
  '.info-slider__big-image-thumb'
);

function generateMarkup(imageName, imageAlt) {
  return `<picture>
  <source
    srcset="
      ./images/products/${imageName}.webp    1x,
      ./images/products/${imageName}@2x.webp 2x
    "
    type="image/webp"
  />
  <source
    srcset="
      ./images/products/${imageName}.jpg    1x,
      ./images/products/${imageName}@2x.jpg 2x
    "
    type="image/jpeg"
  />
  <img
    src="./images/products/${imageName}.jpg"
    width="420"
    height="420"
    alt=${imageAlt}
    class="info-slider__big-image"
    data-img-name=${imageName}
  />
  </picture>`;
}

function renderBigSliderImage(e) {
  if (e.target.classList.contains('info-slider__small-image')) {
    const imageName = e.target.dataset.imgName;
    const imageAlt = e.target.alt;

    const markup = generateMarkup(imageName, imageAlt);

    if (
      e.target.dataset.imgName !==
      sliderBigImageThumb.querySelector('img').dataset.imgName
    ) {
      sliderBigImageThumb.innerHTML = markup;
    }
  }
}
function initialRenderBigSliderImage() {
  const sliderWrapper = document.querySelector('.info-slider__thumbs-slider');
  const firstSliderImage = sliderWrapper.querySelector('img');

  const imageName = firstSliderImage.dataset.imgName;
  const imageAlt = firstSliderImage.alt;

  const markup = generateMarkup(imageName, imageAlt);

  sliderBigImageThumb.innerHTML = markup;
}
initialRenderBigSliderImage();
slider.addEventListener('click', renderBigSliderImage);
