import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm';

export const TaskModal = ({ data, closeModal }) => {
  console.log('data :>> ', data);
  return (
    <>
      <Modal toggleModal={closeModal}>
        <TaskForm fieldsData={data} />
      </Modal>
    </>
  );
};
