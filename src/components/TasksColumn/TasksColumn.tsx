import { useTranslation } from 'react-i18next';
import { ITask } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';
import { useModal } from '../../hooks/useModal';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskModal } from '../TaskModal';
import * as SC from './TasksColumn.styled';

interface ITaskColumnProps {
  name: string;
  status: string;
  tasks: ITask[];
}

export const TasksColumn = ({ name, tasks, status }: ITaskColumnProps) => {
  const { isOpenModal, toggleModal } = useModal();
  const { t } = useTranslation();

  const modalStatus = name;
  switch (name) {
    case 'todo':
      name = t('To do');
      break;
    case 'inprogress':
      name = t('In progress');
      break;
    case 'done':
      name = t('Done');
      break;
    default:
      return null;
  }

  return (
    <SC.Column>
      <ColumnHeadBar name={name}></ColumnHeadBar>
      <ColumnTasksList tasks={tasks} status={status}></ColumnTasksList>
      {isOpenModal && (
        <TaskModal
          status={modalStatus}
          btnClicked="add"
          data={null}
          toggleModal={toggleModal}
        />
      )}

      <AddTaskBtn onClick={toggleModal} />
    </SC.Column>
  );
};
