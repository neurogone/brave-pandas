(function () {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  const showAt = 200; // px
  let isVisible = false;

  const toggle = () => {
    const shouldShow = window.scrollY > showAt;
    if (shouldShow && !isVisible) {
      btn.classList.add("back-to-top--visible");
      isVisible = true;
    } else if (!shouldShow && isVisible) {
      btn.classList.remove("back-to-top--visible");
      isVisible = false;
    }
  };

  window.addEventListener("scroll", toggle, { passive: true });
  window.addEventListener("load", toggle);

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
