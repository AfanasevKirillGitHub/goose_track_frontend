import { TaskColumnCard } from '../TaskColumnCard';
import * as SC from './ColumnTasksList.styled';

export const ColumnTasksList = ({ tasks, status }) => {
  const getTasksByStatus = () => {
    return tasks?.filter(task => task.status === status);
  };

  const tasksByStatus = getTasksByStatus();

  return (
    /*
    Тут будуть рендиритися картки тудушок
    Передати tasksByStatus як проп
    */
    <SC.TaskList>
      {tasksByStatus?.map(task => (
        <SC.TaskElement key={task._id}>
          <TaskColumnCard taskData={task} />
        </SC.TaskElement>
      ))}
    </SC.TaskList>
  );
};
