import activatePricingToggler from './features/pricing';
import hamburgerMenuToggler from './layout/hamburger-menu';
import View from './view';

const App = {
	init() {
		const view = new View();
		view.bindEventPricingSelectionToggler(activatePricingToggler);
		view.bindEventFaqItemVisibilityToggler();
		if (window.innerWidth < 597) {
			view.applyInteractionOnSmallScreen();
			view.bindEventHamburgerMenuButton(hamburgerMenuToggler);
		}
		view.setCurrentYear();
	},
};

window.addEventListener('load', App.init);
