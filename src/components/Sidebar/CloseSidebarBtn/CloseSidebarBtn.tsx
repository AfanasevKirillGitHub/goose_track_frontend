import { SVG } from '../../../images';
import * as SC from './CloseSidebarBtn.styled';

interface IProps {
  closeBurgerMenu: () => void;
}

export const CloseSidebarBtn = ({ closeBurgerMenu }: IProps ) => {
  const closeSidebar = () => {
    closeBurgerMenu();
    document.body.style.overflow = '';
  };

  return (
    <SC.ButtonClose type="button" onClick={closeSidebar}>
      <SVG.CloseIcon />
    </SC.ButtonClose>
  );
};
