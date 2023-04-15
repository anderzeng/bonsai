import faqItemToggleElements from './features/faq';
import selectionToggle from './features/pricing';

const App = {
	$: {
		pricingSelectionToggle: document.querySelector(
			'[data-id="pricing-selection-toggle"]'
		),
		faqItemToggleElements: faqItemToggleElements,
	},

	init() {
		App.$.pricingSelectionToggle.addEventListener('click', selectionToggle);
		App.$.faqItemToggleElements();
	},
};

window.addEventListener('load', App.init);
