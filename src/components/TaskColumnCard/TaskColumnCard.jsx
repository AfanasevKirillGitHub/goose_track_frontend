import { useAuth } from '../../hooks/useAuth';
import * as SC from './TaskColumnCard.styled';
import EllipsisText from 'react-ellipsis-text';
import avatarDefault from '../../images/avatar-default.png';
import { SVG } from '../../images';
import { TaskToolbar } from './TaskToolbar';

export const TaskColumnCard = ({ taskData }) => {
  //   console.log('taskData :>> ', taskData);

  const {
    user: { avatarURL },
  } = useAuth();
  //   console.log('user :>> ', avatarURL);

  return (
    <SC.TaskCard>
      <SC.TaskTitle>
        <EllipsisText text={taskData.title} length={30} tooltip="true" />
      </SC.TaskTitle>
      <SC.TaskWrapper>
        <SC.TaskWrapper>
          <SC.TaskAvatar>
            {avatarURL ? (
              <img src={avatarURL} alt="user" />
            ) : (
              <SVG.UserAvatar width="16px" higth="16px" />
            )}
          </SC.TaskAvatar>
          <SC.TaskPriority name={taskData.priority}>
            {taskData.priority}
          </SC.TaskPriority>
        </SC.TaskWrapper>
        <TaskToolbar taskData={taskData} />
      </SC.TaskWrapper>
      {/* <p>{taskData.priority}</p>
      <p>{taskData.status}</p>
      <p>{taskData.start}</p>
      <p>{taskData.end}</p> */}
    </SC.TaskCard>
  );
};
