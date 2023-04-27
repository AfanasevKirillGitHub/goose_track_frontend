import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm';

export const TaskModal = ({ status, data, toggleModal }) => {
  const formData = { ...data, status };

  return (
    <Modal toggleModal={toggleModal}>
      <TaskForm fieldsData={formData} toggleModal={toggleModal} />
    </Modal>
  );
};
