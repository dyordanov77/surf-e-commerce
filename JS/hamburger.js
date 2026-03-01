const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("mobileMenu");

navMenu.style.display = "none";

hamburger.addEventListener("click", () => {
  if (navMenu.style.display === "none") {
    navMenu.style.display = "block";
  } else {
    navMenu.style.display = "none";
  }
});

navMenu.addEventListener("mouseleave", () => {
  navMenu.style.display = "none";
});
