export default function hamburgerMenuToggler() {
	const hamburgerMenuButton = document.querySelector(
		'[data-id="small-screen-page-header-hamburger-menu-button"]'
	);
	toggleOpacity(hamburgerMenuButton.children[1]);

	const pageHeaderNavigationMenu = document.querySelector(
		'[data-id="page-header-navigation-menu"]'
	);
	toggleDisplay(pageHeaderNavigationMenu);
}

function toggleOpacity(element) {
	if (element.style.opacity === '0') {
		element.style.opacity = '1';
	} else {
		element.style.opacity = '0';
	}
}

function toggleDisplay(element) {
	if (element.style.display === 'block') {
		element.style.display = 'none';
	} else {
		element.style.display = 'block';
	}
}
