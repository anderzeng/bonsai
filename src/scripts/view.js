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
		this.$.footerCurrentYear = document.querySelector(
			'[data-id="footer-current-year"]'
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

	setCurrentYear() {
		const currentYear = new Date().getFullYear();
		this.$.footerCurrentYear.innerText = currentYear;
	}
}
