

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

document.addEventListener("DOMContentLoaded", function () {
  if (
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  // Select common content sections and gallery elements.
  
const elements = document.querySelectorAll(
  "main section, " +
  ".page-hero .inner, " +
  ".wrap > *, " +
  ".gallery figure, " +
  ".card, " +
  ".stats-row .stat, " +
  ".split > *"
);


  if (!elements.length) {
    console.log("Scroll reveal: no matching elements found.");
    return;
  }

  document.documentElement.classList.add("js-enabled");

  const observer = new IntersectionObserver(
    function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px 0px 0px"
    }
  );

  elements.forEach(function (element, index) {
    element.classList.add("reveal");
    element.style.transitionDelay =
      (index % 4) * 70 + "ms";
    observer.observe(element);
  });
});
