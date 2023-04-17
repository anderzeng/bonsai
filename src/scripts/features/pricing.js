export default function selectionToggle() {
	const pricingBoxMonthly = document.querySelector(
		'[data-id="plans-pricing-monthly"]'
	);
	const pricingBoxYearly = document.querySelector(
		'[data-id="plans-pricing-yearly"]'
	);

	this.firstElementChild.classList.toggle(
		'plans-pricing__header-toggle-switch-activation'
	);

	setTimeout(() => {
		pricingBoxYearly.classList.toggle('plans-pricing__container-activate');
		pricingBoxMonthly.classList.toggle('plans-pricing__container-activate');
	}, 150);
}
