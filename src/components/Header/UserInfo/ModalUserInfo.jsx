import { useTranslation } from 'react-i18next';
import { SVG } from '../../../images';
import { LogoutBtn } from '../../Sidebar/LogoutBtn/LogoutBtn';

import * as SC from './ModalUserInfo.styled';
import { UserInfo } from './UserInfo';

export const ModalUserInfo = () => {
  const { t } = useTranslation();
  return (
    <SC.Wrapper>
      <SC.ModalUserInfo>
        <UserInfo design />
        <SC.Link to="account">
          <SVG.UserCheck />
          {t`My account`}
        </SC.Link>

        <LogoutBtn design />
      </SC.ModalUserInfo>
    </SC.Wrapper>
  );
};
