const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Open Menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Close Menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Close menu when clicking mobile links
const mobileLinks = document.querySelectorAll(".nav-mobile-list a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
