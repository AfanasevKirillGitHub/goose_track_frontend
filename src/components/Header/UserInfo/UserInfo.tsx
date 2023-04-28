import * as SC from './UserInfo.styled';
import { useState } from 'react';
import { ModalUserInfo } from '../UserModal/ModalUserInfo';
import { UserAvatar } from '../UserAvatar/UserAvatar';

export const UserInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <SC.UserInfo onClick={toggleModal}>
        <UserAvatar invert />
      </SC.UserInfo>
      {showModal && (
        <ModalUserInfo toggleModal={toggleModal}>
          <UserAvatar invert={false} />
        </ModalUserInfo>
      )}
    </>
  );
};
