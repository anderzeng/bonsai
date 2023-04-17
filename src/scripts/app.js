import pricingToggler from './features/pricing';
import View from './view';

const App = {
	init() {
		const view = new View();
		view.bindEventPricingSelectionToggler(pricingToggler);
		view.bindEventFaqItemVisibilityToggler();
	},
};

window.addEventListener('load', App.init);
