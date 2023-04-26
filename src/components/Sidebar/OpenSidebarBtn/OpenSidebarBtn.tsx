import { SVG } from '../../../images';
import * as SC from './OpenSidebarBtn.styled';

export const OpenSidebarBtn = () => {
  const openBurgerMenu = () => {
    const mobileMenu = document.querySelector('#menuContainer') as HTMLElement;
    mobileMenu.classList.toggle('is-open');
    document.body.style.overflow = 'hidden';
  };

  return (
    <SC.ButtonOpen type="button" onClick={() => openBurgerMenu()}>
      <SVG.BurgerMenu />
    </SC.ButtonOpen>
  );
};
