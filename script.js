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
if (typeof $ !== 'undefined') {
  $(document).ready(function () {
    $.stellar({
      horizontalScrolling: false,
      responsive: true,
    });
  });
}

window.addEventListener('scroll', function () {
  const section = document.getElementById('text-carousel-intro-section');
  const scrollPosition = window.scrollY * 0.15; // Adjust speed with multiplier
  section.style.backgroundPosition = `center ${scrollPosition}px`;
});

// CAROUSEL
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselBtns = document.querySelectorAll('.carousel-btn');
let currentIndex = 0;
const intervalTime = 5000; // 5 seconds

// Function to show the current carousel item
function showCarouselItem(index) {
  // Mark the current item as outgoing for the slide-out effect
  carouselItems[currentIndex].classList.remove('active');
  carouselItems[currentIndex].classList.add('outgoing');

  // When the slide-out animation ends, remove the outgoing class
  carouselItems[currentIndex].addEventListener('animationend', function () {
    this.classList.remove('outgoing');
  });

  // Update the index
  currentIndex = index;

  // Add active class for slide-in effect
  carouselItems[currentIndex].classList.add('active');
  carouselBtns.forEach((btn, btnIndex) => {
    btn.classList.toggle('active', btnIndex === currentIndex);
  });
}

// Function to go to the next item
function nextCarouselItem() {
  const newIndex = (currentIndex + 1) % carouselItems.length;
  showCarouselItem(newIndex);
}

// Set interval for automatic slide rotation
let carouselInterval = setInterval(nextCarouselItem, intervalTime);

// Event listeners for carousel navigation buttons
carouselBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    clearInterval(carouselInterval); // Stop auto-rotation on manual click
    showCarouselItem(idx); // Show the selected item
    carouselInterval = setInterval(nextCarouselItem, intervalTime); // Restart auto-rotation
  });
});
