export default function selectionToggle() {
	const pricingBoxMonthly = document.querySelector(
		'[data-id="pricing-box-monthly"]'
	);
	const pricingBoxYearly = document.querySelector(
		'[data-id="pricing-box-yearly"]'
	);

	this.firstElementChild.classList.toggle(
		'pricing__header-toggle-switch-activation'
	);

	setTimeout(() => {
		pricingBoxYearly.classList.toggle('pricing__content-box-activate');
		pricingBoxMonthly.classList.toggle('pricing__content-box-activate');
	}, 150);
}
