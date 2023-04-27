import { useModal } from '../../../hooks/useModal';
import { SVG } from '../../../images';
import {
  useRemoveTasksMutation,
  useUpdateTasksMutation,
} from '../../../redux/task/taskOperations';
import { TaskModal } from '../../TaskModal';
import * as SC from './TaskToolbar.styled';

export const TaskToolbar = ({ taskData }) => {
  // console.log('TaskToolbar taskData :>> ', taskData);

  const { isOpenModal, toggleModal } = useModal();

  const [deleteTask, { isLoading: isDeletting }] = useRemoveTasksMutation();
  const [updateTask, { isLoading: isUpdatind }] = useUpdateTasksMutation();

  // const del = id => {
  //   console.log('id :>> ', id);
  // };

  return (
    <>
      <SC.TaskToolbar>
        <SC.TaskToolbarBtn
          type="button"
          // onClick={toggleModal}
          // disabled={isDeletting || isUpdatind}
        >
          <SVG.ArrowCircle />
        </SC.TaskToolbarBtn>
        <SC.TaskToolbarBtn
          type="button"
          onClick={toggleModal}
          // disabled={isDeletting || isUpdatind}
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
