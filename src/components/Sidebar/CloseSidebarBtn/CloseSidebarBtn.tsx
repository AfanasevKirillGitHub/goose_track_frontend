import { SVG } from '../../../images';
import * as SC from './CloseSidebarBtn.styled';

export const CloseSidebarBtn = () => {
  const closeBurgerMenu = () => {
    const mobileMenu = document.querySelector('#menuContainer') as HTMLElement;
    mobileMenu.classList.toggle('is-open');
    document.body.style.overflow = '';
  };

  return (
    <SC.ButtonClose type="button" onClick={() => closeBurgerMenu()}>
      <SVG.CloseIcon />
    </SC.ButtonClose>
  );
};
