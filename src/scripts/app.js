import activatePricingToggler from './features/pricing';
import activateHamburgerMenu from './layout/small-screen-hamburger-menu';
import View from './view';

const App = {
  init() {
    const view = new View();
    view.bindEventPricingSelectionToggler(activatePricingToggler);
    view.bindEventFaqItemVisibilityToggler();
    view.bindEventHamburgerMenuButton(activateHamburgerMenu);
    view.bindEventNavigationMenuSmallScreen();
    view.trackSmallScreenChanges();
  },
};

window.addEventListener('load', App.init);
