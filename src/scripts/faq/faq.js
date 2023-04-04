const faqItemToggleElements = document.querySelectorAll('.faq__list-item');
const faqItemDescriptionElements = document.querySelectorAll(
	'.faq__list-item-description'
);

faqItemToggleElements.forEach((faqItemToggleElement, index) => {
	let toggleExpanded = false;
	faqItemToggleElement.addEventListener('click', () => {
		toggleExpanded = !toggleExpanded;
		if (toggleExpanded) {
			faqItemDescriptionElements[index].classList.toggle(
				'faq__list-item-description-toggle'
			);
			faqItemToggleElement.lastElementChild.classList.add(
				'faq__list-item-toggle-animation-up'
			);
			faqItemToggleElement.lastElementChild.classList.remove(
				'faq__list-item-toggle-animation-down'
			);
		} else {
			faqItemDescriptionElements[index].classList.toggle(
				'faq__list-item-description-toggle'
			);
			faqItemToggleElement.lastElementChild.classList.add(
				'faq__list-item-toggle-animation-down'
			);
			faqItemToggleElement.lastElementChild.classList.remove(
				'faq__list-item-toggle-animation-up'
			);
		}
	});
});
