import { useState } from 'react';
import { ITask } from '../../../helpers/interfaces/taskApiInterface/taskApiInterface';
import { useModal } from '../../../hooks/useModal';
import { SVG } from '../../../images';
import { useUpdateTasksMutation } from '../../../redux/task/taskOperations';
import { TaskModal } from '../../TaskModal';
import { ChangeStatusPopUp } from '../ChangeStatusPopUp';
import * as SC from './TaskToolbar.styled';

interface IProps {
  taskData: ITask;
}

export const TaskToolbar = ({ taskData }: IProps) => {
  const [btnClicked, setBtnClicked] = useState('');
  const { isOpenModal, toggleModal } = useModal();

  const [, { isLoading: isUpdatind }] = useUpdateTasksMutation();

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setBtnClicked(evt.currentTarget.name);
    toggleModal();
  };

  return (
    <>
      <SC.TaskToolbar>
        <ChangeStatusPopUp taskData={taskData} />

        <SC.TaskToolbarBtn
          type="button"
          name="edit"
          onClick={handleClick}
          disabled={isUpdatind}
        >
          <SVG.EditIcon />
        </SC.TaskToolbarBtn>

        <SC.TaskToolbarBtn
          type="button"
          name="delete"
          onClick={handleClick}
          disabled={isUpdatind}
        >
          <SVG.Delete />
        </SC.TaskToolbarBtn>
      </SC.TaskToolbar>

      {isOpenModal && (
        <TaskModal
          status={taskData.status}
          data={taskData}
          toggleModal={toggleModal}
          btnClicked={btnClicked}
        />
      )}
    </>
  );
};
