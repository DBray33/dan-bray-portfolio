// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});

// Change navar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

// Show the "Back to Top" button after scrolling down
window.addEventListener('scroll', function () {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
    // Show after scrolling 300px
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Smooth scroll to the top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Parallax effect
<script>
  $(document).ready(function () {
    // Initialize Stellar.js with default settings
    $.stellar({
      horizontalScrolling: false,
      responsive: true,
    });
  });
</script>


// Carousel
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselBtns = document.querySelectorAll('.carousel-btn');
let currentIndex = 0;
const intervalTime = 5000; // 5 seconds

// Function to show the current carousel item
function showCarouselItem(index) {
  // Remove 'active' class from all items and buttons
  carouselItems.forEach(item => item.classList.remove('active'));
  carouselBtns.forEach(btn => btn.classList.remove('active'));

  // Add 'active' class to the current item and button
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

// Event listeners for navigation buttons
carouselBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    clearInterval(carouselInterval); // Stop auto-rotation on manual click
    currentIndex = parseInt(btn.getAttribute('data-index'));
    showCarouselItem(currentIndex);
    carouselInterval = setInterval(nextCarouselItem, intervalTime); // Restart auto-rotation
  });
});