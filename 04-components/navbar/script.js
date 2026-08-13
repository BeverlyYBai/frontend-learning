const menuToggle = document.querySelector(".menu-toggle");
const navContent = document.querySelector(".nav-content");

menuToggle.addEventListener("click", function () {
  const isOpen = navContent.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "关闭主导航" : "打开主导航"
  );
});
