// Hamburger menu
const hamburger = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-item");
const closeBtn = document.querySelector(".close-mobo")

navLink.forEach(n => n.addEventListener("click", closeMenu));
closeBtn.addEventListener('click', closeMenu)

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Slider

let slideIndex = 1;
console.log(slideIndex)
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-card");
//   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
