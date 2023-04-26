import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskModal } from '../TaskModal';
import { Column } from './TasksColumn.styled';

export const TasksColumn = ({ name, tasks, status }) => {
  const modalStatus = name;
  switch (name) {
    case 'todo':
      name = 'To do';
      break;
    case 'inprogress':
      name = 'In progress';
      break;
    case 'done':
      name = 'Done';
      break;
    default:
      return;
  }

  return (
    <Column>
      <ColumnHeadBar name={name}></ColumnHeadBar>
      <ColumnTasksList tasks={tasks} status={status}></ColumnTasksList>
      <TaskModal status={modalStatus} data={null} />
    </Column>
  );
};
