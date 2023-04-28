import * as SC from './Header.styled';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { UserInfo } from './UserInfo/UserInfo';
import { ThemeToogle } from './ThemeToogle/ThemeToogle';
import { OpenSidebarBtn } from '../Sidebar/OpenSidebarBtn/OpenSidebarBtn';
import { ColorToggle } from './ColorToggle/ColorToggle';
import { MotivationGoose } from './MotivationGoose/MotivationGoose';

interface IProps {
  toggleBurgerMenu: () => void;
}

export const Header = ({ toggleBurgerMenu }: IProps) => {
  return (
    <SC.Header>
      <OpenSidebarBtn openBurgerMenu={toggleBurgerMenu} />
      <MotivationGoose />
      <SC.UserInfo>
        <ColorToggle />
        <ThemeToogle />
        <ChangeLngElem />
        <UserInfo />
      </SC.UserInfo>
    </SC.Header>
  );
};
