import faqItemTooggleElements from './faq/faq';
import pricingSelectionToggle from './pricing/pricing';

const App = {
	$: {
		pricingSelectionToggle: document.getElementById(
			'pricing-header-toggle-switch'
		),
		faqItemToggleElements: faqItemTooggleElements,
	},

	init() {
		App.$.pricingSelectionToggle.addEventListener(
			'click',
			pricingSelectionToggle
		);
		App.$.faqItemToggleElements();
	},
};

window.addEventListener('load', App.init);
