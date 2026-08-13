const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteMenu = document.querySelector(".site-menu");
const heroTrack = document.querySelector(".hero-track");
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");
const previousButton = document.querySelector(".hero-previous");
const nextButton = document.querySelector(".hero-next");

let currentSlide = 0;

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function closeMenu() {
  siteMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");
}

function showSlide(index) {
  currentSlide = (index + heroSlides.length) % heroSlides.length;
  heroTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  heroDots.forEach(function (dot, dotIndex) {
    dot.classList.toggle("active", dotIndex === currentSlide);
  });
}

navToggle.addEventListener("click", function () {
  const isOpen = siteMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("menu-open", isOpen);
});

siteMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

previousButton.addEventListener("click", function () {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", function () {
  showSlide(currentSlide + 1);
});

heroDots.forEach(function (dot, dotIndex) {
  dot.addEventListener("click", function () {
    showSlide(dotIndex);
  });
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

setInterval(function () {
  showSlide(currentSlide + 1);
}, 5000);
