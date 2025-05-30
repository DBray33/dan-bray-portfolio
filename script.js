// ///////////////////////////////////////
// LOGO - TOP LEFT CORNER //////////////////
// Logo spin animation:
const logoLink = document.querySelector('.logo-link');
if (logoLink) {
  logoLink.addEventListener('click', function (event) {
    event.preventDefault();
    logoLink.classList.add('spin');

    setTimeout(function () {
      window.location.href = logoLink.href;
    }, 500);
  });
}
// Logo shrink on scroll
window.addEventListener('scroll', function () {
  const logo = document.querySelector('.logo-link');
  if (window.scrollY > 50) {
    // Adjust threshold as needed
    logo.classList.add('logo-link-small');
  } else {
    logo.classList.remove('logo-link-small');
  }
});

// /////////////////////////////////////////////////////////
// NAVBAR MENU /////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu-items');
  const menuLinks = document.querySelectorAll('.mobile-menu-items a'); // Select all menu links

  // Scroll effect on navbar
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('.mobile-menu-items');

    if (navbar && mobileMenu) {
      // Only apply the scroll effect if the mobile menu is not active
      if (navbar && !mobileMenu.classList.contains('active')) {
        if (window.scrollY > 0) {
          navbar.classList.add('navbar-scroll');
        } else {
          navbar.classList.remove('navbar-scroll');
        }
      }
    }
  });

  // Toggle mobile menu and icon rotation
  toggleButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent event from bubbling to the document
    mobileMenu.classList.toggle('active');
    toggleButton.classList.toggle('menu-active'); // Add a class to indicate active state
  });

  // Close mobile menu when clicking anywhere else
  document.addEventListener('click', function () {
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      toggleButton.classList.remove('menu-active'); // Reset icon state
    }
  });

  // Close the menu when a link is clicked and ensure smooth scroll
  menuLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      const href = this.getAttribute('href');

      if (href.startsWith('#')) {
        // Smooth scroll for internal links
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = href.slice(1); // Get target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offset = 0; // Adjust this if you need a specific offset
          const elementPosition = targetElement.offsetTop;
          const finalPosition = elementPosition - offset;

          window.scrollTo({
            top: finalPosition,
            behavior: 'smooth', // Smooth scrolling
          });
        }
      }

      // Close the mobile menu after clicking any link
      mobileMenu.classList.remove('active');
      toggleButton.classList.remove('menu-active'); // Reset icon state
    });
  });

  // Close the menu when clicking anywhere on the mobile menu background
  mobileMenu.addEventListener('click', function (event) {
    if (
      event.target === mobileMenu &&
      mobileMenu.classList.contains('active')
    ) {
      mobileMenu.classList.remove('active');
      toggleButton.classList.remove('menu-active'); // Reset icon state
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.main-menu-list a'); // Adjust selector for your navbar links

  navbarLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      const href = this.getAttribute('href');

      if (href.startsWith('#')) {
        // Smooth scroll for internal links
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = href.slice(1); // Get target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offset = 0; // Adjust this if you need a specific offset
          const elementPosition = targetElement.offsetTop;
          const finalPosition = elementPosition - offset;

          window.scrollTo({
            top: finalPosition,
            behavior: 'smooth', // Smooth scrolling
          });
        }
      } else {
        // For external links, allow normal navigation
        // Do nothing here
      }
    });
  });
});

// /////////////////////////////////////////
// BACK TO TOP BUTTON ///////////////////////
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

// Show the "Back to Top" button after scrolling down
window.addEventListener('scroll', function () {
  if (backToTopButton) {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }
});

// //////////////////////////////////
// HERO /////////////////////////////
// Parallax effect in hero section
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
});

// HERO CAROUSEL FUNCTIONALITY
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselButtons = document.querySelectorAll('.carousel-btn');
let currentIndex = 0;

function showCarouselItem(index) {
  carouselItems[currentIndex].classList.add('slide-out');
  carouselItems[currentIndex].classList.remove('active');

  carouselItems[currentIndex].addEventListener(
    'animationend',
    function () {
      this.classList.remove('slide-out');
    },
    { once: true }
  );

  currentIndex = index;
  carouselItems[currentIndex].classList.add('active');

  carouselButtons.forEach((btn) => btn.classList.remove('active'));
  carouselButtons[currentIndex].classList.add('active');
}

setInterval(() => {
  const nextIndex = (currentIndex + 1) % carouselItems.length;
  showCarouselItem(nextIndex);
}, 5000);

carouselButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => showCarouselItem(index));
});

// HERO Carousel Parallax
document.addEventListener('DOMContentLoaded', function () {
  const carouselContent = document.querySelector('.carousel-content');

  if (carouselContent) {
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const parallaxOffset = scrollPosition * 0.5; // Adjust factor for effect speed

      // Apply translateY to move it down based on scroll
      carouselContent.style.transform = `translate(-50%, calc(-50% + ${parallaxOffset}px))`;
    });
  }
});

// //////////////////////////////////////////////////
// ABOUT ////////////////////////////////////////////
// Animation for About Intro section
document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll(
    '.animate-from-left, .animate-from-right'
  );

  function handleScroll() {
    animatedElements.forEach((element) => {
      const position = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if element is in view
      if (position.top < windowHeight * 0.8 && position.bottom > 0) {
        element.classList.add('animate-visible');
      } else {
        element.classList.remove('animate-visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check in case elements are already in view
});

// ///////////////////////////////////////////////////////
// ICONS - ABOUT SECTION /////////////////////////////////
// About-icon slide in animation
document.addEventListener('DOMContentLoaded', () => {
  const iconItems = document.querySelectorAll('.icon-item');
  const section = document.querySelector('.about-icons-section');

  function handleScroll() {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2; // Adjust as needed for when to trigger

    if (sectionPosition < screenPosition) {
      iconItems.forEach((item, index) => {
        item.style.setProperty('--icon-index', index); // Set custom delay for each icon
        item.classList.add('animate'); // Add animate class when section is in view
      });
      window.removeEventListener('scroll', handleScroll); // Remove scroll listener once triggered
    }
  }

  window.addEventListener('scroll', handleScroll);
});

// Icon Content hide/display with pop-up animation
function showContent(contentId) {
  // Hide all content sections
  document.querySelectorAll('.content-section').forEach((section) => {
    section.classList.remove('active');
    section.style.animation = ''; // Reset animation
  });

  // Remove active class from all icons
  document.querySelectorAll('.icon-item').forEach((item) => {
    item.classList.remove('active');
  });

  // Show the selected content section
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add('active');
    selectedContent.style.animation = 'bubble-up 0.3s ease-out forwards';
  }

  // Add active class to the corresponding icon-item
  const activeIcon = document.querySelector(
    `.icon-item[onclick="showContent('${contentId}')"]`
  );
  if (activeIcon) {
    activeIcon.classList.add('active');
  }

  // Close active content and icon when clicking outside
  document.addEventListener('click', function handleClickOutside(event) {
    // Check if the click happened outside the active content or icon
    if (
      !selectedContent.contains(event.target) &&
      !activeIcon.contains(event.target)
    ) {
      selectedContent.classList.remove('active');
      activeIcon.classList.remove('active');
      selectedContent.style.animation = ''; // Reset animation
      document.removeEventListener('click', handleClickOutside); // Remove listener to avoid duplicates
    }
  });
}
// //////////////////////////////////////////////////
// Projects Navigation and Interactions
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.projects-nav-item');
  const projectItems = document.querySelectorAll('.project-item');

  console.log('Found project items:', projectItems.length);

  // Add link icons to h3 elements that contain links
  projectItems.forEach((item) => {
    const h3 = item.querySelector('.project-info h3');
    const link = h3?.querySelector('a');

    if (h3 && link) {
      // Create link icon
      const linkIcon = document.createElement('span');
      linkIcon.innerHTML =
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';
      linkIcon.style.cssText = `
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        margin-left: 5px;
        position: relative;
        top: -1px; /* Fine-tune vertical alignment */
      `;
      h3.appendChild(linkIcon);
    }
  });

  // Ensure all project items are visible initially
  projectItems.forEach((item) => {
    item.classList.add('loaded');
  });

  // Project Filtering
  navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
      navItems.forEach((item) => item.classList.remove('active'));
      navItem.classList.add('active');
      const filter = navItem.getAttribute('data-filter');

      projectItems.forEach((project) => {
        if (filter === 'all' || project.classList.contains(filter)) {
          project.classList.remove('slide-out');
          project.classList.add('phase-in');
          project.style.display = 'block';

          project.addEventListener(
            'animationend',
            () => {
              project.classList.remove('phase-in');
            },
            { once: true }
          );
        } else {
          project.classList.add('slide-out');

          project.addEventListener(
            'animationend',
            () => {
              project.style.display = 'none';
              project.classList.remove('slide-out');
            },
            { once: true }
          );
        }
      });
    });
  });

  // Projects Hover-scroll effect
  projectItems.forEach((item) => {
    const image = item.querySelector('img');

    if (!image) {
      console.warn('No image found in project-item:', item);
      return;
    }

    image.addEventListener('mouseover', function () {
      const imageHeight = image.offsetHeight;
      const containerHeight = item.offsetHeight;
      const scrollDistance = imageHeight - containerHeight;

      if (scrollDistance > 0) {
        const duration = Math.max(3, scrollDistance / 150);
        image.style.transition = `transform ${duration}s linear`;
        image.style.transform = `translateY(-${scrollDistance}px)`;
      }
    });

    image.addEventListener('mouseout', function () {
      image.style.transition = 'transform 0.9s linear';
      image.style.transform = 'translateY(0)';
    });
  });

  // UPDATED OVERLAY IMPLEMENTATION WITH ANIMATIONS
  // Remove existing .more-info-btn elements (if any duplicates exist)
  document
    .querySelectorAll('.more-info-btn:nth-child(n+2)')
    .forEach((btn) => btn.remove());

  // Create new overlay buttons for each project
  projectItems.forEach((item, index) => {
    const existingButton = item.querySelector('.more-info-btn');

    if (existingButton) {
      // Style existing button
      existingButton.style.cssText = `
        display: block;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--secondary-color);
        color: black;
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        z-index: 999;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      `;

      // Set up click event
      existingButton.addEventListener('click', createModalOverlay);
    } else {
      // Create new button if none exists
      const newButton = document.createElement('button');
      newButton.classList.add('more-info-btn');
      newButton.textContent = 'More Info';
      newButton.style.cssText = `
        display: block;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--secondary-color);
        color: black;
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        z-index: 999;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      `;

      // Add the button to the project item
      item.appendChild(newButton);

      // Set up click event
      newButton.addEventListener('click', createModalOverlay);
    }

    function createModalOverlay() {
      console.log(`More Info button clicked for project ${index}`);

      // Find project info content
      const projectInfo = item.querySelector('.project-info');
      const titleElement = projectInfo?.querySelector('h3');
      const contentElement = projectInfo?.querySelector('.info-content');

      // Get title and content, including any HTML like links
      const title = titleElement ? titleElement.innerHTML : 'Project Details';
      const content = contentElement
        ? contentElement.innerHTML
        : '<p>No details available</p>';

      // Create modal overlay with animation
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: background-color 0.3s ease;
      `;

      // Create modal content with animation
      const modalContent = document.createElement('div');
      modalContent.style.cssText = `
        background: white;
        color: black;
        padding: 30px;
        border-radius: 8px;
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
        transform: scale(0.5);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
      `;

      // Create close button
      const closeButton = document.createElement('button');
      closeButton.innerHTML = '&times;';
      closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
      `;
      closeButton.addEventListener('click', function () {
        document.body.removeChild(modal);
      });

      // Create title container
      const titleContainer = document.createElement('div');
      titleContainer.innerHTML = title;
      titleContainer.style.cssText = `
        margin-top: 0;
        margin-bottom: 15px;
        font-size: 1.5rem;
      `;

      // Create content container
      const contentContainer = document.createElement('div');
      contentContainer.innerHTML = content;
      contentContainer.style.cssText = `
        font-size: 1rem;
        line-height: 1.6;
      `;

      // Assemble modal
      modalContent.appendChild(closeButton);
      modalContent.appendChild(titleContainer);
      modalContent.appendChild(contentContainer);
      modal.appendChild(modalContent);

      // Add modal to body
      document.body.appendChild(modal);

      // Trigger animation after a small delay
      setTimeout(() => {
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
      }, 10);

      // Close modal when clicking outside content
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          document.body.removeChild(modal);
        }
      });
    }
  });

  // Custom Scroll landing for Projects link in About section
  const customProjectLink = document.querySelector('.custom-project-link');
  if (customProjectLink) {
    customProjectLink.addEventListener('click', function (event) {
      event.preventDefault();
      const targetElement = document.querySelector('#projects');

      if (targetElement) {
        const customOffset = 8;
        const elementPosition = targetElement.offsetTop;
        const finalPosition = elementPosition - customOffset;

        window.scrollTo({
          top: finalPosition,
          behavior: 'smooth',
        });
      }
    });
  }
});
// /////////////////////////////////////////////
// CONTACT /////////////////////////////////////
// Contact link: Custom scroll when link in About section icon content box is clicked:
document.addEventListener('scroll', () => {
  const contactSection = document.querySelector('.contact');
  const sectionTop = contactSection.offsetTop;
  const sectionHeight = contactSection.offsetHeight;
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Check if the section is in the viewport
  if (
    scrollPosition + windowHeight >= sectionTop &&
    scrollPosition <= sectionTop + sectionHeight
  ) {
    const speed = parseFloat(contactSection.dataset.speed || 0.01);
    const offset = (scrollPosition - sectionTop) * speed;

    // Adjust the background position, starting lower to show more of the bottom
    contactSection.style.backgroundPositionY = `calc(${50 + offset / 6}%)`;
  }
});

// ///////////////////////////////
// ///////////////////////////////
// ///////////////////////////////
// ///////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.btn-blank[href^="#"]'); // Select all buttons with href starting with "#"

  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      const targetId = this.getAttribute('href').slice(1); // Get the ID of the target section
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 0; // Adjust this value if needed (e.g., -50 to account for fixed headers)
        const elementPosition = targetElement.offsetTop;
        const finalPosition = elementPosition - offset;

        window.scrollTo({
          top: finalPosition,
          behavior: 'smooth', // Enable smooth scrolling
        });
      }
    });
  });
});

// PROJECTS more info/less info button
document.addEventListener('DOMContentLoaded', () => {
  const moreInfoButtons = document.querySelectorAll('.more-info-btn');

  moreInfoButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const projectInfo = event.target.closest('.project-info');

      // Toggle expanded class
      projectInfo.classList.toggle('expanded');

      // Change button text and background color
      if (projectInfo.classList.contains('expanded')) {
        button.textContent = 'Less Info';
        button.style.backgroundColor = 'var(--tertiary-color)'; // Set active background color
      } else {
        button.textContent = 'More Info';
        button.style.backgroundColor = 'var(--primary-color)'; // Reset to default color
      }
    });
  });
});

// CONTACT Section parallax designated for smaller screens
document.addEventListener('scroll', () => {
  const contactSection = document.querySelector('.contact');
  if (!contactSection) return;

  const sectionTop = contactSection.offsetTop;
  const scrollPosition = window.scrollY;
  const offset = (scrollPosition - sectionTop) * 0.5; // Adjust speed

  // Update background position
  contactSection.style.backgroundPositionY = `calc(50% + ${offset}px)`;
});

// //////////////////////////////////////////////
// SKILLS SECTION ///////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.skills-section');
  const skillLogos = document.querySelectorAll('.skill-logo');

  const observerOptions = {
    root: null, // Observe within the viewport
    threshold: [0, 0.1, 0.5, 0.9, 1], // Trigger at various visibility percentages
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillLogos.forEach((logo, index) => {
          setTimeout(() => {
            logo.classList.add('spinning');
            logo.style.opacity = '1';
            logo.style.transform = `translateY(0)`; // Center in viewport
          }, index * 200); // Staggered spin start

          // Stop spinning after reaching the center
          setTimeout(() => {
            logo.classList.remove('spinning');
            logo.classList.add('active'); // Apply floating effect
          }, 2000); // Adjust delay as needed
        });
      } else {
        // Reset logos when the section leaves the viewport
        skillLogos.forEach((logo) => {
          logo.classList.remove('spinning', 'active');
          logo.style.opacity = '0';
          logo.style.transform = 'translateY(-200px)'; // Reset above the viewport
        });
      }
    });
  }, observerOptions);

  observer.observe(skillsSection);
});
// ///////////////////////////////
// ///////////////////////////////
// ///////////////////////////////
// ///////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.project-item');

  const observerOptions = {
    root: null, // Observe in the viewport
    threshold: 0.2, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded'); // Trigger animation
        observer.unobserve(entry.target); // Stop observing once it's animated
      }
    });
  }, observerOptions);

  projectItems.forEach((item) => {
    observer.observe(item); // Observe each project item
  });
});
