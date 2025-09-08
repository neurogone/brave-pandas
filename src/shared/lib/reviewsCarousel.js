(function () {
  const root = document.querySelector(".reviews");
  if (!root) return;
  const track = root.querySelector(".reviews__track");
  const prev = root.querySelector(".reviews__nav--prev");
  const next = root.querySelector(".reviews__nav--next");
  const dotsRoot = root.querySelector(".reviews__dots");
  const items = Array.from(track.querySelectorAll(".review"));

  // Create dots
  items.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "reviews__dot" + (i === 0 ? " reviews__dot--active" : "");
    dot.type = "button";
    dot.setAttribute("aria-label", `Слайд ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsRoot.appendChild(dot);
  });
  const dots = Array.from(dotsRoot.querySelectorAll(".reviews__dot"));

  let index = 0;
  const clamp = (n) => Math.max(0, Math.min(n, items.length - 1));

  function getStepWidth() {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const slideWidth = items[0].getBoundingClientRect().width;
    return slideWidth + gap;
  }

  function updateButtons() {
    const last = items.length - 1;
    if (prev) prev.disabled = index <= 0;
    if (next) next.disabled = index >= last;
  }

  function update() {
    const step = getStepWidth();
    track.scrollTo({ left: step * index, behavior: "smooth" });
    dots.forEach((d, i) =>
      d.classList.toggle("reviews__dot--active", i === index)
    );
    updateButtons();
  }

  function goTo(i) {
    index = clamp(i);
    update();
  }

  if (prev) prev.addEventListener("click", () => goTo(index - 1));
  if (next) next.addEventListener("click", () => goTo(index + 1));

  // Snap to the closest slide after touch scroll
  let scrollTimeout;
  track.addEventListener(
    "scroll",
    () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const step = getStepWidth();
        const nearest = Math.round(track.scrollLeft / step);
        const clamped = clamp(nearest);
        if (clamped !== index) {
          index = clamped;
          dots.forEach((d, i) =>
            d.classList.toggle("reviews__dot--active", i === index)
          );
        }
        updateButtons();
      }, 80);
    },
    { passive: true }
  );

  window.addEventListener("resize", () => update());
  // initial
  updateButtons();
})();
