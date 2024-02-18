document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelector('.slides');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.children.length - 1;
    } else if (index >= slides.children.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const newTranslateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + newTranslateValue + ')';
  }

  prevButton.addEventListener('click', function () {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', function () {
    showSlide(currentIndex + 1);
  });
});