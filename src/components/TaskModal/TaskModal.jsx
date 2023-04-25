import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm';
import { useState } from 'react';

export const TaskModal = ({ status, data }) => {
  const [isOpenModal, setIsOpenModal] = useState(true);
  // console.log('data :>> ', data);
  const formData = { ...data, status };
  // console.log('formData :>> ', formData);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <AddTaskBtn onClick={toggleModal} />

      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <TaskForm fieldsData={formData} />
        </Modal>
      )}
    </>
  );
};
