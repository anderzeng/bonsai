const toggleElement = document.getElementById('pricing-header-toggle-switch');
const pricingBoxMonthly = document.getElementById('pricing-box-monthly');
const pricingBoxYearly = document.getElementById('pricing-box-yearly');

function pricingSelectionToggle() {
	toggleElement.firstElementChild.classList.toggle(
		'pricing__header-toogle-switch-activation'
	);

	setTimeout(() => {
		pricingBoxYearly.classList.toggle('pricing__content-box-activate');
		pricingBoxMonthly.classList.toggle('pricing__content-box-activate');
	}, 150);
}

toggleElement.addEventListener('click', pricingSelectionToggle);
