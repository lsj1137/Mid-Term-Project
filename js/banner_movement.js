let currentSlide = 0;
var keepSlide = 1;
const slides = document.querySelectorAll('.slider img');
const slideCount = slides.length;

function showSlide(mode) {
  slides[currentSlide].style.display = 'none';
  if (mode == -1)
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  else
    currentSlide = (currentSlide + 1) % slideCount;
  slides[currentSlide].style.display = 'inline-block';
}

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slideCount;
  slides[currentSlide].style.display = 'inline-block';
}

if (slideCount>0)
  var interval = setInterval(nextSlide, 3000);

document.querySelector('.btn.prev').addEventListener('click', () => {
  clearInterval(interval);
  showSlide(-1);
  interval = setInterval(nextSlide, 3000);
});

document.querySelector('.btn.next').addEventListener('click', () => {
  clearInterval(interval);
  showSlide(1);
  interval = setInterval(nextSlide, 3000);
});