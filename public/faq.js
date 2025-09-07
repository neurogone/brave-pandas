document.addEventListener('DOMContentLoaded', function () {
  const faqQuestions = document.querySelectorAll('.faq__question');
  faqQuestions.forEach((btn) => {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq__item');
      const isOpen = item.classList.contains('open');
      // Закрыть все
      document.querySelectorAll('.faq__item').forEach((el) => {
        el.classList.remove('open');
        el.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });
      // Открыть выбранный, если был закрыт
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
