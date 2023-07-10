export default function faqItemVisibilityToggler() {
  const faqItems = document.querySelectorAll('.faq__item');
  const faqItemsDescriptions = document.querySelectorAll(
    '.faq__item-description'
  );

  faqItems.forEach((faqItem, index) => {
    let togglerExpanded = false;
    faqItem.addEventListener('click', () => {
      togglerExpanded = !togglerExpanded;
      if (togglerExpanded) {
        faqItemsDescriptions[index].classList.toggle(
          'faq__item-description-toggler'
        );
        faqItem.lastElementChild.classList.add(
          'faq__item-toggler-animation-up'
        );
        faqItem.lastElementChild.classList.remove(
          'faq__item-toggler-animation-down'
        );
      } else {
        faqItemsDescriptions[index].classList.toggle(
          'faq__item-description-toggler'
        );
        faqItem.lastElementChild.classList.add(
          'faq__item-toggler-animation-down'
        );
        faqItem.lastElementChild.classList.remove(
          'faq__item-toggler-animation-up'
        );
      }
    });
  });
}
