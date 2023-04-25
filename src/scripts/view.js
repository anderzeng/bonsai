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
		this.$.hamburgerMenuButton = document.querySelector(
			'[data-id="small-screen-page-header-hamburger-menu-button"]'
		);
	}

	bindEventPricingSelectionToggler(handler) {
		this.$.pricingSelectionToggler.addEventListener('click', handler);
	}

	bindEventFaqItemVisibilityToggler() {
		faqItemVisibilityToggler();
	}

	applyInteractionOnSmallScreen() {
		this.modifyPricingTitleSmallScreen();
	}

	modifyPricingTitleSmallScreen() {
		this.$.pricingWorkflowPlusTitle.innerText = 'Workflow +';
	}

	setCurrentYear() {
		const currentYear = new Date().getFullYear();
		this.$.footerCurrentYear.innerText = currentYear;
	}

	bindEventHamburgerMenuButton(handler) {
		this.$.hamburgerMenuButton.addEventListener('click', handler);
	}
}
