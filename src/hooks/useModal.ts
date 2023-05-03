import { useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  return { isOpenModal, toggleModal };
};
