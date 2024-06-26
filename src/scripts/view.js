import faqItemVisibilityToggler from './features/faq.js';
import openNavigationSubmenu from './layout/small-screen-navigation-menu.js';

export default class View {
  $ = {};

  constructor() {
    this.$.pricingSelectionToggler = document.querySelector(
      '[data-id="plans-pricing-header-toggler"]'
    );
    this.$.pricingWorkflowPlusTitle = document.querySelector(
      '[data-id="title-workflow-plus"]'
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

  bindEventNavigationMenuSmallScreen() {
    openNavigationSubmenu();
  }

  applyInteractionOnSmallScreen() {
    this.modifyPricingTitleSmallScreen();
  }

  modifyPricingTitleSmallScreen() {
    this.$.pricingWorkflowPlusTitle.innerText = 'Workflow +';
  }

  bindEventHamburgerMenuButton(handler) {
    this.$.hamburgerMenuButton.addEventListener('click', handler);
  }
}
