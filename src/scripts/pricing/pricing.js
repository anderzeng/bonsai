export default function pricingSelectionToggle() {
	const pricingBoxMonthly = document.getElementById('pricing-box-monthly');
	const pricingBoxYearly = document.getElementById('pricing-box-yearly');

	this.firstElementChild.classList.toggle(
		'pricing__header-toogle-switch-activation'
	);

	setTimeout(() => {
		pricingBoxYearly.classList.toggle('pricing__content-box-activate');
		pricingBoxMonthly.classList.toggle('pricing__content-box-activate');
	}, 150);
}
