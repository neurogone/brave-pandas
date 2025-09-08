document.addEventListener("DOMContentLoaded", function () {
  const pricingCards = document.querySelectorAll(".pricing-card");
  const buttons = document.querySelectorAll(".pricing-card__button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      pricingCards.forEach((card) => card.classList.remove("selected"));
      const card = btn.closest(".pricing-card");
      card.classList.add("selected");
    });
  });
});
