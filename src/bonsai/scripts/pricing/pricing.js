let activated = false;
const toggleElement = document.getElementById('pricing--header-toggle-switch');

console.log(toggleElement.firstChild);

function toggle() {
	activated = !activated;

	if (activated) {
		toggleElement.firstElementChild.classList.add(
			'pricing__header-toogle-switch-activation'
		);
	} else {
		toggleElement.firstElementChild.classList.remove(
			'pricing__header-toogle-switch-activation'
		);
	}
}

toggleElement.addEventListener('click', toggle);
