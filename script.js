// NAVBAR MENU
// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    });
  }
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  }
});

// BACK TO TOP
// Show the "Back to Top" button after scrolling down
window.addEventListener('scroll', function () {
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }
});

// Smooth scroll to the top when the button is clicked
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
  backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// PARALLAX
// Parallax effect with Stellar.js (if jQuery is loaded)
// if (typeof $ !== 'undefined') {
//   $(document).ready(function () {
//     $.stellar({
//       horizontalScrolling: false,
//       responsive: true,
//     });
//   });
// }

// window.addEventListener('scroll', function () {
//   const section = document.getElementById('text-carousel-intro-section');
//   const scrollPosition = window.scrollY * 0.15;
//   section.style.backgroundPosition = `center ${scrollPosition}px`;
// });

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  // Adjust the position of each layer at different speeds
  document.querySelector('.layer1').style.transform = `translateY(${
    scrollPosition * 0.2
  }px)`;
  document.querySelector('.layer2').style.transform = `translateY(${
    scrollPosition * 0.4
  }px)`;
  document.querySelector('.layer3').style.transform = `translateY(${
    scrollPosition * 0.6
  }px)`;
  document.querySelector('.layer4').style.transform = `translateY(${
    scrollPosition * 0.8
  }px)`;
  document.querySelector('.layer5').style.transform = `translateY(${
    scrollPosition * 1
  }px)`;
  document.querySelector('.layer6').style.transform = `translateY(${
    scrollPosition * 1.2
  }px)`;
  document.querySelector('.layer7').style.transform = `translateY(${
    scrollPosition * 1.4
  }px)`;
  document.querySelector('.layer8').style.transform = `translateY(0px)`; // Keep layer8 stationary
});

// CAROUSEL
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselButtons = document.querySelectorAll('.carousel-btn');
let currentIndex = 0;

// Show the next item with animation
function showCarouselItem(index) {
  // Hide the current item with slide-out animation
  carouselItems[currentIndex].classList.add('slide-out');
  carouselItems[currentIndex].classList.remove('active');

  // Set the outgoing item’s opacity to 0 after animation
  carouselItems[currentIndex].addEventListener(
    'animationend',
    function () {
      this.classList.remove('slide-out');
    },
    { once: true }
  );

  // Update to new index, show the new item, and highlight corresponding button
  currentIndex = index;
  carouselItems[currentIndex].classList.add('active');

  // Update active button
  carouselButtons.forEach((btn) => btn.classList.remove('active'));
  carouselButtons[currentIndex].classList.add('active');
}

// Set interval to auto-rotate carousel items
setInterval(() => {
  const nextIndex = (currentIndex + 1) % carouselItems.length;
  showCarouselItem(nextIndex);
}, 5000);

// Add click listeners to carousel buttons for manual navigation
carouselButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => showCarouselItem(index));
});
