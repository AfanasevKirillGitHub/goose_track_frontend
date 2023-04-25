import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { Column } from './TasksColumn.styled';

export const TasksColumn = ({ name, tasks, status }) => {
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
      <AddTaskBtn></AddTaskBtn>
    </Column>
  );
};
