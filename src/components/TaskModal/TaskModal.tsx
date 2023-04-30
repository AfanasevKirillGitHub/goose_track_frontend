import { ITask } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';
import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm';

interface IFieldsData {
  date?: string;
  title?: string;
  start?: string;
  end?: string;
  priority?: string;
  status: string;
  _id?: string;
  owner?: {
    email: string;
    name: string;
    _id: string;
  };
}

interface IProps {
  status: string;
  data: ITask | null;
  toggleModal: () => void;
}

export const TaskModal = ({ status, data, toggleModal }: IProps) => {
  let formData: IFieldsData;
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
