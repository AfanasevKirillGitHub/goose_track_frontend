import goose from '../../images/goose.png';
import { useTranslation } from 'react-i18next';
import {
  RiCloseLine,
  RiAccountCircleLine,
  RiCalendarCheckLine,
} from 'react-icons/ri';
import { accountPages } from '../../helpers/pages';
import { LogOut } from '../LogOut/LogOut';
import * as SC from './AccountSidebar.styled';

export const AccountSidebar = () => {
  const { t } = useTranslation();

  return (
    <SC.Sidebar>
      <SC.LogoWrapper>
        <SC.LogoImg src={goose} alt="logo goose" />
        <SC.Title>
          G<SC.Span>oo</SC.Span>seTrack
        </SC.Title>
        <SC.ButtonClose type='button'><RiCloseLine size={12}/></SC.ButtonClose>
      </SC.LogoWrapper>

      <SC.NavTitle>User Panel</SC.NavTitle>

      <SC.NavList>
        {accountPages.map(({ href, name, id }) => (
          <SC.NavItem key={id}>
            <SC.Link to={href}>
              {id === 3 ? <RiAccountCircleLine /> : <RiCalendarCheckLine />} {t(`navigation.${name}`)}
            </SC.Link>
          </SC.NavItem>
        ))}
      </SC.NavList>
      <LogOut />
    </SC.Sidebar>
  );
};
