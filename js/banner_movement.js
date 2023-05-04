let currentSlide = 0;
let keepPlay = 1;
const slides = document.querySelectorAll('.slider img');
const play_btn = document.getElementById('play_btn');
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
  var interval = setInterval(nextSlide, 4000);

document.querySelector('.btn.prev').addEventListener('click', () => {
  clearInterval(interval);
  showSlide(-1);
  if (keepPlay == 1)
    interval = setInterval(nextSlide, 4000);
});

document.querySelector('.btn.next').addEventListener('click', () => {
  clearInterval(interval);
  showSlide(1);
  if (keepPlay == 1)
    interval = setInterval(nextSlide, 4000);
});

document.querySelector('.btn.play').addEventListener('click', ()=>{
  if (keepPlay == 1) {
    clearInterval(interval);
    play_btn.src = '../img_srcs/play-button-arrowhead.png';
    keepPlay = 0;
  }
  else{
    interval = setInterval(nextSlide, 4000);
    play_btn.src = '../img_srcs/pause.png';
    keepPlay = 1;
  }
})