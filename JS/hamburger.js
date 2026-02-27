// HAMBURGER MENU LOGIC
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("mobileMenu");

function openHamburger() {
  navMenu.style.display = "block";
}

function closeHamburger() {
  navMenu.style.display = "none";
}

hamburger.addEventListener("click", openHamburger);
navMenu.addEventListener("mouseleave", closeHamburger);
