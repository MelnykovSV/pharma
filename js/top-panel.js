const topPanel = document.querySelector('.top-panel');

var options = {
  threshold: 0.01,
};
var callback = function (entries, observer) {
  if (window.scrollY <= 140) {
    topPanel.classList.add('hidden');
  }
  if (window.scrollY > 140) {
    topPanel.classList.remove('hidden');
  }
};
var observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('.header'));
