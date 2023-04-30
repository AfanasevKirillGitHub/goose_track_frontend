import { ITask } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';
import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm';

interface IProps {
  status: string;
  data: ITask;
  toggleModal: () => void;
}

export const TaskModal = ({ status, data, toggleModal }: IProps) => {
  const formData = { ...data, status };

  return (
    <Modal toggleModal={toggleModal}>
      <TaskForm fieldsData={formData} toggleModal={toggleModal} />
    </Modal>
  );
};
