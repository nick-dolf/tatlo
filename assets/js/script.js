const hamburger = document.querySelector(".hamburger-menu")
const dropdown = document.querySelector(".menu-list")
const nav = document.querySelector("#primary-menu")

function menuToggle() {
  hamburger.classList.toggle("clicked")
  dropdown.classList.toggle("clicked")
  nav.classList.toggle("clicked")
}
