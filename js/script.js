// Navigation Elements
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

// Toggle mobile menu
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Function to reset active classes and transition
const activePage = () => {
  const header = document.querySelector('header');
  const barsBox = document.querySelector('.bars-box');

  // Animate header and bar box
  header.classList.remove('active');
  barsBox.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
    barsBox.classList.add('active');
  }, 1100);

  // Remove active from links and sections
  navLinks.forEach(link => link.classList.remove('active'));
  sections.forEach(section => section.classList.remove('active'));

  // Close mobile menu
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Nav link click behavior
navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');

      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);
    }
  });
});

// Logo click resets to first section
logoLink.addEventListener('click', () => {
  if (!navLinks[0].classList.contains('active')) {
    activePage();
    navLinks[0].classList.add('active');

    setTimeout(() => {
      sections[0].classList.add('active');
    }, 1100);
  }
});

// Resume section switching
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    resumeBtns.forEach(b => b.classList.remove('active'));
    resumeDetails.forEach(detail => detail.classList.remove('active'));

    btn.classList.add('active');
    resumeDetails[idx].classList.add('active');
  });
});

// Portfolio carousel navigation
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let index = 0;
const maxIndex = portfolioDetails.length - 1;

// Activate portfolio slide and content
const activePortfolio = () => {
  imgSlide.style.transform = `translateX(calc(-${index * 100}% - ${index * 2}rem))`;

  portfolioDetails.forEach(detail => detail.classList.remove('active'));
  portfolioDetails[index].classList.add('active');

  // Enable/disable arrows
  arrowLeft.classList.toggle('disabled', index === 0);
  arrowRight.classList.toggle('disabled', index === maxIndex);
};

// Right arrow click
arrowRight.addEventListener('click', () => {
  if (index < maxIndex) {
    index++;
    activePortfolio();
  }
});

// Left arrow click
arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    activePortfolio();
  }
});

// Initialize portfolio state on load
activePortfolio();
