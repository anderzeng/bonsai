let activated = false;
const toggleElement = document.getElementById('pricing-header-toggle-switch');
const pricingBoxMonthly = document.getElementById('pricing-box-monthly');
const pricingBoxYearly = document.getElementById('pricing-box-yearly');
pricingBoxMonthly.classList.add('pricing__content-box-activate');

function toggle() {
	activated = !activated;

	if (activated) {
		toggleElement.firstElementChild.classList.add(
			'pricing__header-toogle-switch-activation'
		);
		pricingBoxMonthly.classList.remove('pricing__content-box-activate');
		pricingBoxYearly.classList.add('pricing__content-box-activate');
	} else {
		toggleElement.firstElementChild.classList.remove(
			'pricing__header-toogle-switch-activation'
		);
		pricingBoxYearly.classList.remove('pricing__content-box-activate');
		pricingBoxMonthly.classList.add('pricing__content-box-activate');
	}
}

toggleElement.addEventListener('click', toggle);
