import faqItemVisibilityToggler from './features/faq.js';
import openNavigationSubmenu from './layout/small-screen-navigation-menu.js';

export default class View {
  $ = {};

  constructor() {
    this.$.pricingSelectionToggler = document.querySelector(
      '[data-id="plans-pricing-header-toggler"]'
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

  bindEventHamburgerMenuButton(handler) {
    this.$.hamburgerMenuButton.addEventListener('click', handler);
  }

  trackSmallScreenChanges() {
    const smallScreenMediaQuery = window.matchMedia('(min-width: 640px)');
    const pageHeaderNavigationMenu = document.querySelector(
      '[data-id="small-screen-page-header-navigation-menu"]'
    );
    const handleChange = (mediaQueryEvent) => {
      if (mediaQueryEvent.matches) {
        pageHeaderNavigationMenu.style.display = 'none';
      } else {
        pageHeaderNavigationMenu.style.display = 'block';
      }
    };
    smallScreenMediaQuery.addEventListener('change', handleChange);
  }
}
