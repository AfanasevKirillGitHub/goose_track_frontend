import { ITask } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';
import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm';
import { ConfirmDelete } from './ConfirmDelete/ConfirmDelete';

interface IProps {
  status: string;
  data: ITask | null;
  btnClicked: string;
  toggleModal: () => void;
}

export const TaskModal = ({
  status,
  data,
  btnClicked,
  toggleModal,
}: IProps) => {
  let formData: Partial<ITask>;
  if (!data) {
    formData = { status };
  } else {
    formData = { ...data, status };
  }

  return (
    <Modal toggleModal={toggleModal}>
      {btnClicked === 'edit' || btnClicked === 'add' ? (
        <TaskForm fieldsData={formData} toggleModal={toggleModal} />
      ) : (
        <ConfirmDelete id={data?._id as string} toggleModal={toggleModal} />
      )}
    </Modal>
  );
};
