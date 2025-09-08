document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq__question");
    btn.addEventListener("click", function () {
      const isOpen = item.classList.contains("open");
      // Закрыть все
      document.querySelectorAll(".faq__item").forEach((el) => {
        el.classList.remove("open");
        const q = el.querySelector(".faq__question");
        if (q) q.setAttribute("aria-expanded", "false");
      });
      // Открыть выбранный, если был закрыт
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
});
