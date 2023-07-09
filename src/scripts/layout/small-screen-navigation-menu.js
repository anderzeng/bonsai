export default function openNavigationSubmenu() {
  const navigationMenuExpandibleItem = document.querySelectorAll(
    '.small-screen-page-header__navigation-menu-item-toggle'
  );
  const subMenus = document.querySelectorAll(
    '.small-screen-page-header__navigation-submenu'
  );

  navigationMenuExpandibleItem.forEach((subMenuItem, index) => {
    let togglerExpanded = false;
    subMenuItem.addEventListener('click', () => {
      togglerExpanded = !togglerExpanded;
      if (togglerExpanded) {
        subMenus[index].classList.toggle(
          'small-screen-page-header__navigation-submenu-visibility'
        );
        subMenuItem.classList.add(
          'small-screen-page-header__navigation-menu-animation-open'
        );
        subMenuItem.classList.remove(
          'small-screen-page-header__navigation-menu-animation-closed'
        );
      } else {
        subMenus[index].classList.toggle(
          'small-screen-page-header__navigation-submenu-visibility'
        );
        subMenuItem.classList.add(
          'small-screen-page-header__navigation-menu-animation-closed'
        );
        subMenuItem.classList.remove(
          'small-screen-page-header__navigation-menu-animation-open'
        );
      }
    });
  });
}
