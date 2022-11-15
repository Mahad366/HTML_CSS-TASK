const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .header-right a");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("class");
    }
  });
  navLi.forEach((a) => {
    a.classList.remove("home-link");
    if (a.classList.contains(current)) {
      a.classList.add("home-link");
    }
  });
});

window.addEventListener("scroll", () => {
  pageYOffset > 400
    ? (navbar.style.backgroundColor = "#ffffff")
    : (navbar.style.backgroundColor = "rgba(0, 0, 0, 0)");
});
