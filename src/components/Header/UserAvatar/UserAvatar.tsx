import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../hooks/useAuth';
import * as SC from './UserAvatar.styled';
import { SVG } from '../../../images';

interface IUserAvatarProps {
  invert: boolean;
}

export const UserAvatar: React.FC<IUserAvatarProps> = ({
  invert,
}: IUserAvatarProps) => {
  const { user } = useAuth();
  const { t } = useTranslation();

  const userName = user.name?.split(' ')[0];

  return (
    <SC.Wrapper invert={invert}>
      <SC.Text>{t(`${userName}`)}</SC.Text>
      {user.avatarURL === null || user.avatarURL === 'null' ? (
        <SC.AvatarDefault>
          <SC.IconWrapper>
            <SVG.UserAvatar />
          </SC.IconWrapper>
        </SC.AvatarDefault>
      ) : (
        <SC.AvatarUser>
          <SC.Avatar src={user.avatarURL} alt="User Avatar" />
        </SC.AvatarUser>
      )}
    </SC.Wrapper>
  );
};
