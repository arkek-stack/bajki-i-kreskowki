// Bajki i kreskówki – landing page: animacje przy przewijaniu
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || reduceMotion) return;

  document.documentElement.classList.add("js");

  var targets = document.querySelectorAll(
    ".step, .feature, .bonus, .review, .for-card, .effects li, .research__card, .mechanism__step, .numbers li, .bars"
  );

  targets.forEach(function (el) {
    if (!el.classList.contains("bars")) el.classList.add("reveal");
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(function (el) { io.observe(el); });
})();
