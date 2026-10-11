// =========================
// NETFLIX CLONE JAVASCRIPT
// =========================

// Navbar Background Change
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.background = "#000";

    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.6)";
  } else {
    navbar.style.background =
      "linear-gradient(to bottom,rgba(0,0,0,.9),transparent)";

    navbar.style.boxShadow = "none";
  }
});

// Smooth Scroll for Navbar Links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Watch Now Button
document.getElementById("watchBtn").addEventListener("click", () => {
  document.getElementById("tvshows").scrollIntoView({
    behavior: "smooth",
  });
});

// More Info Button
document.getElementById("infoBtn").addEventListener("click", () => {
  document.getElementById("movies").scrollIntoView({
    behavior: "smooth",
  });
});

// Movie Card Click Effect
const cards = document.querySelectorAll(".movie-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(1.12)";

    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 300);
  });
});

// Fade Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document
  .querySelectorAll(".movies-section,.info-section")
  .forEach((section) => {
    observer.observe(section);
  });

// Active Navbar Link
const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Sign In Button
document.querySelector(".sign-btn").addEventListener("click", () => {
  alert("Welcome to Netflix Clone!");
});

// Console
console.log("Netflix Clone Loaded Successfully!");
