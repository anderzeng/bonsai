export default function activateHamburgerMenu() {
  const hamburgerMenuButton = document.querySelector(
    '[data-id="small-screen-page-header-hamburger-menu-button"]'
  );

  toggleOpacity(hamburgerMenuButton.children[1]);

  const pageHeaderNavigationMenu = document.querySelector(
    '[data-id="small-screen-page-header-navigation-menu"]'
  );

  toggleDisplay(pageHeaderNavigationMenu);
  applyAnimationToHamburgerMenuButton(hamburgerMenuButton);
}

function toggleOpacity(element) {
  element.style.opacity === '0'
    ? (element.style.opacity = '1')
    : (element.style.opacity = '0');
}

function toggleDisplay(element) {
  element.style.display === 'block'
    ? (element.style.display = 'none')
    : (element.style.display = 'block');
}

function applyAnimationToHamburgerMenuButton(hamburgerMenuButton) {
  const hamburgerMenuTopBar = hamburgerMenuButton.children[0];
  const hamburgerMenuBottomBar = hamburgerMenuButton.children[2];
  hamburgerMenuTopBar.classList.toggle(
    'small-screen-page-header__hamburger-menu-top-bar-rotate'
  );

  hamburgerMenuBottomBar.classList.toggle(
    'small-screen-page-header__hamburger-menu-bottom-bar-rotate'
  );
}
