import * as SC from './UserInfo.styled';
import { useTranslation } from 'react-i18next';
import avatarDefault from '../../../images/avatar-default.png';

import { useAuth } from '../../../hooks/useAuth';
import { useState } from 'react';
import { ModalUserInfo } from './ModalUserInfo';

export const UserInfo = ({ design }) => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <SC.UserInfo design={design}>
      <SC.Text>{t(`${user.name}`)}</SC.Text>
      {
        <div onClick={toggleModal}>
          {user.avatarURL !== null ? (
            <SC.UserAvatar>
              <SC.Avatar src={user.avatarURL} alt="User Avatar" />
            </SC.UserAvatar>
          ) : (
            <SC.AvatarDefault>
              <SC.Avatar src={avatarDefault} alt="Default Avatar" />
            </SC.AvatarDefault>
          )}
          {showModal && <ModalUserInfo />}
        </div>
      }
    </SC.UserInfo>
  );
};
