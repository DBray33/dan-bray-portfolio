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

// Parallax effect with Stellar.js (if jQuery is loaded)
if (typeof $ !== 'undefined') {
  $(document).ready(function () {
    $.stellar({
      horizontalScrolling: false,
      responsive: true,
    });
  });
}

// Carousel
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselBtns = document.querySelectorAll('.carousel-btn');
let currentIndex = 0;
const intervalTime = 5000; // 5 seconds

// Function to show the current carousel item
function showCarouselItem(index) {
  carouselItems.forEach((item) => item.classList.remove('active'));
  carouselBtns.forEach((btn) => btn.classList.remove('active'));

  carouselItems[index].classList.add('active');
  carouselBtns[index].classList.add('active');
}

// Function to go to the next item
function nextCarouselItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showCarouselItem(currentIndex);
}

// Set interval for automatic slide rotation
let carouselInterval = setInterval(nextCarouselItem, intervalTime);

// Event listeners for carousel navigation buttons
carouselBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    clearInterval(carouselInterval); // Stop auto-rotation on manual click
    currentIndex = idx; // Use the index from the loop
    showCarouselItem(currentIndex);
    carouselInterval = setInterval(nextCarouselItem, intervalTime); // Restart auto-rotation
  });
});
