import faqItemToggleElements from './features/faq';
import activateToggler from './features/pricing';

const App = {
	$: {
		pricingSelectionToggler: document.querySelector(
			'[data-id="plans-pricing-header-toggler"]'
		),
		faqItemToggleElements: faqItemToggleElements,
	},

	init() {
		App.$.pricingSelectionToggler.addEventListener('click', activateToggler);
		App.$.faqItemToggleElements();
	},
};

window.addEventListener('load', App.init);
