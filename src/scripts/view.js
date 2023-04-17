import faqItemVisibilityToggler from './features/faq.js';

export default class View {
	$ = {};

	constructor() {
		this.$.pricingSelectionToggler = document.querySelector(
			'[data-id="plans-pricing-header-toggler"]'
		);
	}

	bindEventPricingSelectionToggler(handler) {
		this.$.pricingSelectionToggler.addEventListener('click', handler);
	}

	bindEventFaqItemVisibilityToggler() {
		faqItemVisibilityToggler();
	}
}
