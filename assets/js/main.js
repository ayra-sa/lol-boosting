// Hamburger menu
const hamburger = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", mobileMenu);
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-item");
const closeBtn = document.querySelector(".close-mobo");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
if (closeBtn) {
  closeBtn.addEventListener("click", closeMenu);
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Slider

// let slideIndex = 1;
// console.log(slideIndex)
// showSlides(slideIndex);

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slider-card");
// //   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
//   slides[slideIndex-1].style.display = "block";
// //   dots[slideIndex-1].className += " active";
// }
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// Modal popup

// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
const closeModal = document.querySelector(".x-btn");

// When the user clicks the button, open the modal

if (btn) {
  btn.addEventListener("click", openModal)
}

function openModal() {
  modal.style.display = "flex"
}

// // When the user clicks on <span> (x), close the modal

if (closeModal) {
  closeModal.addEventListener("click", closeModalOpen) 
}

function closeModalOpen() {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// Order

const order = document.querySelector(".rank-up-mobo")
const orderBtn = document.getElementById("orderBtn")
const closeOrder = document.getElementById("closeOrder")
const rankCheckout = document.getElementById("rankCheckout")

if (orderBtn) {
  orderBtn.addEventListener("click", orderOpen)
}

function orderOpen() {
  order.classList.toggle("active");
}

if (closeOrder) {
  closeOrder.addEventListener("click", orderClose)
}

function orderClose() {
  order.classList.remove("active")
}

if (rankCheckout) {
  rankCheckout.addEventListener("click", rankCheckoutOpen)
}

function rankCheckoutOpen() {
  modal.style.display = "flex"
}

// Nav

// console.log(document.URL);

// const current = 0;
// for (let i = 0; i < document.links.length; i++) {
//   if (document.links[i].href === document.URL) {
//     current = i;
//   }
// }
// document.links[current].className = "current";



// Slider

// let children = document.querySelector(".sample").children;
// let i = 0;

// children[i].classList.add("selected"); // Item default selection

// function resetClass() {
//   for (let j = 0; j < children.length; j++) {
//     children[j].classList.remove("selected");
//   }
// }

function next() {
  if (i >= children.length - 1) {
    return false;
  }
  resetClass();
  i++;
  children[i].classList.add("selected");
}

function previous() {
  if (i <= 0) {
    return false;
  }
  resetClass();
  i--;
  children[i].classList.add("selected");
}


// Tab

function openTab(evt, tabName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("product-box");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("filter-games");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}