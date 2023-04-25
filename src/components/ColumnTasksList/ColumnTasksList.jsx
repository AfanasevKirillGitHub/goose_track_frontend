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
    <ul>
      {tasksByStatus?.map(task => (
        <li style={{ listStyle: 'none' }} key={task.title}>
          {task.title}
        </li>
      ))}
    </ul>
  );
};
