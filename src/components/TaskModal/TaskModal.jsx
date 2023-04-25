import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm';
import { useState } from 'react';

export const TaskModal = ({ status, data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // console.log('data :>> ', data);
  const formData = { ...data, status };
  // console.log('formData :>> ', formData);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <button type="button" onClick={toggleModal}>
        Open modal for {status}
      </button>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <TaskForm fieldsData={formData} />
        </Modal>
      )}
    </>
  );
};
