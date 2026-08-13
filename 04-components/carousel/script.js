const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(function (dot, dotIndex) {
    dot.classList.toggle("active", dotIndex === currentIndex);
  });
}

previousButton.addEventListener("click", function () {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", function () {
  showSlide(currentIndex + 1);
});

dots.forEach(function (dot, dotIndex) {
  dot.addEventListener("click", function () {
    showSlide(dotIndex);
  });
});

setInterval(function () {
  showSlide(currentIndex + 1);
}, 4000);
