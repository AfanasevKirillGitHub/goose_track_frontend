import { TaskColumnCard } from '../TaskColumnCard';
import * as SC from './ColumnTasksList.styled';
import { scrollbars } from '../../helpers/scrollbars';
import { ITask } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';

interface IColumnTasksListProps {
  tasks: ITask[];
  status: string;
}

export const ColumnTasksList: React.FC<IColumnTasksListProps> = ({
  tasks,
  status,
}: IColumnTasksListProps) => {
  const getTasksByStatus = () => {
    return tasks?.filter(task => task.status === status);
  };

  const tasksByStatus = getTasksByStatus();

  return (
    <SC.TaskList element="ul" options={{ scrollbars }}>
      {tasksByStatus?.map(task => (
        <SC.TaskElement key={task._id}>
          <TaskColumnCard taskData={task as ITask} />
        </SC.TaskElement>
      ))}
    </SC.TaskList>
  );
};
