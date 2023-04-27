import { SVG } from '../../../images';
import * as SC from './OpenSidebarBtn.styled';

interface IProps {
  openBurgerMenu: () => void;
}

export const OpenSidebarBtn = ({ openBurgerMenu }: IProps ) => {
  const openSidebar = () => {
    openBurgerMenu();
    document.body.style.overflow = 'hidden';
  };

  return (
    <SC.ButtonOpen type="button" onClick={openSidebar}>
      <SVG.BurgerMenu />
    </SC.ButtonOpen>
  );
};
