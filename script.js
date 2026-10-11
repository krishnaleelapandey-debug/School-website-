

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      navigation.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        navigation.classList.contains("open")
      );
    });
  }
});

/* ========================================
   ST. THOMAS SCHOOL — SCROLL REVEAL
   ======================================== */

(() => {
  // Avoid hiding content when motion is reduced
  // or the browser does not support IntersectionObserver.
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    reduceMotion ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const revealSelectors = [
    "main section",
    ".feature-card",
    ".facility-card",
    ".academic-card",
    ".gallery-item",
    ".gallery-card",
    ".gallery-grid > *"
  ];

  const elements = document.querySelectorAll(
    revealSelectors.join(",")
  );

  if (!elements.length) return;

  document.documentElement.classList.add("js-enabled");

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  elements.forEach((element, index) => {
    element.classList.add("reveal");

    // Small stagger between nearby items.
    element.style.transitionDelay =
      `${Math.min(index % 4, 3) * 80}ms`;

    observer.observe(element);
  });
})();

