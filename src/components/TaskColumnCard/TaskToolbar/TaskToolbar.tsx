import { ITask } from '../../../helpers/interfaces/taskApiInterface/taskApiInterface';
import { useModal } from '../../../hooks/useModal';
import { SVG } from '../../../images';
import {
  useRemoveTasksMutation,
  useUpdateTasksMutation,
} from '../../../redux/task/taskOperations';
import { TaskModal } from '../../TaskModal';
import { ChangeStatusPopUp } from '../ChangeStatusPopUp';
import * as SC from './TaskToolbar.styled';

interface IProps {
  taskData: ITask;
}

export const TaskToolbar = ({ taskData }: IProps) => {
  const { isOpenModal, toggleModal } = useModal();

  const [deleteTask, { isLoading: isDeletting }] = useRemoveTasksMutation();
  const [, { isLoading: isUpdatind }] = useUpdateTasksMutation();

  return (
    <>
      <SC.TaskToolbar>
        <ChangeStatusPopUp taskData={taskData} />

        <SC.TaskToolbarBtn
          type="button"
          onClick={toggleModal}
          disabled={isDeletting || isUpdatind}
        >
          <SVG.EditIcon />
        </SC.TaskToolbarBtn>

        <SC.TaskToolbarBtn
          type="button"
          onClick={() => deleteTask(taskData._id)}
          disabled={isDeletting || isUpdatind}
        >
          <SVG.Delete />
        </SC.TaskToolbarBtn>
      </SC.TaskToolbar>

      {isOpenModal && (
        <TaskModal
          status={taskData.status}
          data={taskData}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};
