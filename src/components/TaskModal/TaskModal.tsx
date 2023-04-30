import { ITask } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';
import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm';

interface IProps {
  status: string;
  data: ITask | null;
  toggleModal: () => void;
}

export const TaskModal = ({ status, data, toggleModal }: IProps) => {
  let formData: Partial<ITask>;
  if (!data) {
    formData = { status };
  } else {
    formData = { ...data, status };
  }

  return (
    <Modal toggleModal={toggleModal}>
      <TaskForm fieldsData={formData} toggleModal={toggleModal} />
    </Modal>
  );
};
