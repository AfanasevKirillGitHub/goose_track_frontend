import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../hooks/useAuth';
import avatarDefault from '../../../images/avatar-default.png';
import * as SC from './UserAvatar.styled';

export const UserAvatar = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <SC.Text>{t(`${user.name}`)}</SC.Text>
      {user.avatarURL !== null ? (
        <SC.UserAvatar>
          <SC.Avatar src={user.avatarURL} alt="User Avatar" />
        </SC.UserAvatar>
      ) : (
        <SC.AvatarDefault>
          <SC.Avatar src={avatarDefault} alt="Default Avatar" />
        </SC.AvatarDefault>
      )}
    </SC.Wrapper>
  );
};
