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

btn.onclick = function () {
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  // else if (event.target == checkoutModal) {
  //   checkoutModal.style.display = "none";
  // }
};

// TAB ABOUT

const acc = document.querySelectorAll(".info-title");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.log("oke")
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "none") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// const tabLink = document.querySelectorAll(".tab-link");
// const tabTitle = document.querySelectorAll(".tab-title");

// let i;

// for (i = 0; i < tabTitle.length; i++) {
//   tabTitle[i].onclick = function () {
//     let contentClass = this.parentNode.classList.value;

//     for (i = 0; i < tabLink.length; i++) {
//       tabLink[i].className = "tab-link";
//     }

//     if (contentClass == "tab-link") {
//       this.parentNode.classList = "tab-link active";
//     } else {
//       this.parentNode.className = "tab-link active";
//     }
//   };
// }

// TAB ABOUT END
