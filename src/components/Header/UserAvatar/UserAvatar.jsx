import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../hooks/useAuth';
import * as SC from './UserAvatar.styled';
import { SVG } from '../../../images';

export const UserAvatar = ({ invert }) => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <SC.Wrapper invert={invert}>
      <SC.Text>{t(`${user.name}`)}</SC.Text>
      {user.avatarURL !== null ? (
        <SC.AvatarUser>
          <SC.Avatar src={user.avatarURL} alt="User Avatar" />
        </SC.AvatarUser>
      ) : (
        <SC.AvatarDefault>
          <SC.IconWrapper>
            <SVG.UserAvatar />
          </SC.IconWrapper>
        </SC.AvatarDefault>
      )}
    </SC.Wrapper>
  );
};
