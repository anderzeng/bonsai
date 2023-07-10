export default function activatePricingToggler() {
  this.firstElementChild.classList.toggle(
    'plans-pricing__header-toggler-activation'
  );

  const pricingMonthlyContainer = document.querySelector(
    '[data-id="plans-pricing-monthly"]'
  );
  const pricingYearlyContainer = document.querySelector(
    '[data-id="plans-pricing-yearly"]'
  );

  pricingMonthlyContainer.classList.toggle('plans-pricing__container-selected');
  pricingYearlyContainer.classList.toggle('plans-pricing__container-selected');
}
