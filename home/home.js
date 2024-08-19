const navLinks = document.querySelectorAll("nav a");
const dropdownBtn = document.querySelector(".dropdown-btn");
const navUl = document.querySelector("nav ul");
const modal = document.getElementById("modal");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    if (window.innerWidth <= 600) {
      navUl.classList.remove("show");
    }
  });
});

dropdownBtn.addEventListener("click", () => {
  navUl.classList.toggle("show");
});


window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});
