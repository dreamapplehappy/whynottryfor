// Why Not Try For — interactions
// 1. Scroll reveal via IntersectionObserver
// 2. Nav background on scroll

(function () {
  "use strict";

  // --- Scroll reveal ---
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // --- Nav scrolled state ---
  var nav = document.getElementById("nav");
  var ticking = false;

  function updateNav() {
    if (window.scrollY > 24) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateNav();
})();
