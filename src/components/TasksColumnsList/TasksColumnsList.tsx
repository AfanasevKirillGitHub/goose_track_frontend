import { TasksColumn } from '../TasksColumn/TasksColumn';
import { useFetchTasksQuery } from '../../redux/task/taskOperations';
import { ColumnList } from './TasksColumnsList.styled';
import { Loader } from '../Loader/Loader';

interface ITasksColumnsListProps {
  items: string[];
  currentDate: string;
}

export const TasksColumnsList = ({
  items,
  currentDate,
}: ITasksColumnsListProps) => {
  const { data, isLoading } = useFetchTasksQuery(null);

  const getCurrentDayTasks = () => {
    return data?.filter(task => task.date === currentDate);
  };

  const currentDayTasks = getCurrentDayTasks();

  return (
    <>
      {isLoading && <Loader />}
      <ColumnList>
        {items.map(item => (
          <TasksColumn
            key={item}
            name={item}
            tasks={currentDayTasks!}
            status={item}
          />
        ))}
      </ColumnList>
    </>
  );
};
