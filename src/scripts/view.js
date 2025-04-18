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
    const hamburgerMenuButton = document.querySelector(
      '[data-id="small-screen-page-header-hamburger-menu-button"]'
    );
    const handleSmallScreenChange = (mediaQueryEvent) => {
      if (mediaQueryEvent.matches) {
        if (this.isHamburgerMenuOpen()) hamburgerMenuButton.click();
      }
    };
    smallScreenMediaQuery.addEventListener('change', handleSmallScreenChange);
  }

  isHamburgerMenuOpen() {
    const pageHeaderNavigationMenu = document.querySelector(
      '[data-id="small-screen-page-header-navigation-menu"]'
    );
    return pageHeaderNavigationMenu.style.display === 'block';
  }
}
