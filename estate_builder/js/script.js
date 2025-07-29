const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
  current = index;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

let slideInterval = setInterval(nextSlide, 5000);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    showSlide(parseInt(dot.dataset.index, 10));
    slideInterval = setInterval(nextSlide, 5000);
  });
});

// Update footer year dynamically
const yearElem = document.getElementById('year');
if (yearElem) {
  yearElem.textContent = new Date().getFullYear();
}