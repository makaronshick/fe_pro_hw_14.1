"use strict";

const images = [
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png',
];

let currentIndex = 0;

const slideImage = document.getElementById('slideImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const dotsContainer = document.getElementById('dotsContainer');

function updateSlider() {
  slideImage.src = images[currentIndex];

  prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
  nextButton.style.display = currentIndex === images.length - 1 ? 'none' : 'block';

  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
  });
}

function createDots() {
  images.forEach((image, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
          currentIndex = index;
          updateSlider();
      });
      dotsContainer.append(dot);
  });
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
      currentIndex++;
      updateSlider();
  }
});

createDots();
updateSlider();
