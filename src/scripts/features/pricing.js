export default function activateToggler() {
	this.firstElementChild.classList.toggle(
		'plans-pricing__header-toggler-activation'
	);

	const pricingBoxMonthly = document.querySelector(
		'[data-id="plans-pricing-monthly"]'
	);
	const pricingBoxYearly = document.querySelector(
		'[data-id="plans-pricing-yearly"]'
	);
	pricingBoxYearly.classList.toggle('plans-pricing__container-selected');
	pricingBoxMonthly.classList.toggle('plans-pricing__container-selected');
}
