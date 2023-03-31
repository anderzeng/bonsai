const faqItemToggleElements = document.querySelectorAll(
	'.faq__list-item-toggle-container'
);

faqItemToggleElements.forEach((element) => {
	element.addEventListener('click', function () {
		this.classList.toggle('faq__list-item-toggle-animation');
		// TODO buscar forma de vincular cada toggler con su respectiva section
	});
});
