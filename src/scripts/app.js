import faqItemToggler from './features/faq';
import activateToggler from './features/pricing';

const App = {
	$: {
		pricingSelectionToggler: document.querySelector(
			'[data-id="plans-pricing-header-toggler"]'
		),
		faqItemToggler: faqItemToggler,
	},

	init() {
		App.registerEventListeners();
	},

	registerEventListeners() {
		App.$.pricingSelectionToggler.addEventListener('click', activateToggler);
		App.$.faqItemToggler();
	},
};

window.addEventListener('load', App.init);
