import activatePricingToggler from './features/pricing';
import View from './view';

const App = {
	init() {
		const view = new View();
		view.bindEventPricingSelectionToggler(activatePricingToggler);
		view.bindEventFaqItemVisibilityToggler();
		view.modifyPricingTitleSmallScreens();
		view.setCurrentYear();
	},
};

window.addEventListener('load', App.init);
