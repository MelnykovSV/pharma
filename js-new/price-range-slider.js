let sliderOne = document.getElementById('slider-1');
let sliderTwo = document.getElementById('slider-2');
let displayValOne = document.getElementById('range1');
let displayValTwo = document.getElementById('range2');
let minGap = 50;
let sliderTrack = document.querySelector('.slider-track');

if (sliderOne && sliderTwo) {
  let sliderMaxValue = document.getElementById('slider-1').max;

  window.onload = function () {
    slideOne();
    slideTwo();
  };

  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
  }
  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
  }

  sliderOne.addEventListener('input', slideOne);
  sliderTwo.addEventListener('input', slideTwo);

  ///Change colors here!
  function fillColor() {
    const percent1 = (sliderOne.value / sliderMaxValue) * 100;
    const percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #E7E6E6 ${percent1}% , #176975 ${percent1}% , #176975 ${percent2}%, #E7E6E6 ${percent2}%)`;
  }
}
