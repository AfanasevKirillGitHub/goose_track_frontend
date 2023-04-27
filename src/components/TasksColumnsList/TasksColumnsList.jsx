import { TasksColumn } from '../TasksColumn/TasksColumn';
import { useFetchTasksQuery } from '../../redux/task/taskOperations';
import { ColumnList } from './TasksColumnsList.styled';

export const TasksColumnsList = ({ items, currentDate }) => {
  const { data } = useFetchTasksQuery();

  const getCurrentDayTasks = () => {
    return data?.filter(task => task.date === currentDate);
  };

  const currentDayTasks = getCurrentDayTasks();

  return (
    <ColumnList>
      {items.map(item => (
        <TasksColumn
          key={item}
          name={item}
          tasks={currentDayTasks}
          status={item}
        />
      ))}
    </ColumnList>
  );
};
