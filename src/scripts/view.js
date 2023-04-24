import faqItemVisibilityToggler from './features/faq.js';

export default class View {
	$ = {};

	constructor() {
		this.$.pricingSelectionToggler = document.querySelector(
			'[data-id="plans-pricing-header-toggler"]'
		);
		this.$.pricingWorkflowPlusTitle = document.querySelector(
			'[data-id="title-workflow-plus"]'
		);
	}

	bindEventPricingSelectionToggler(handler) {
		this.$.pricingSelectionToggler.addEventListener('click', handler);
	}

	bindEventFaqItemVisibilityToggler() {
		faqItemVisibilityToggler();
	}

	modifyPricingTitleSmallScreens() {
		if (window.innerWidth < 597) {
			this.$.pricingWorkflowPlusTitle.innerText = 'Workflow +';
		}
	}
}
