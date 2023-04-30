import { useAuth } from '../../hooks/useAuth';
import * as SC from './TaskColumnCard.styled';
import EllipsisText from 'react-ellipsis-text';
import { SVG } from '../../images';
import { TaskToolbar } from './TaskToolbar';
import { t } from 'i18next';
import { ITask } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';

interface IProps {
  taskData: ITask;
}

export const TaskColumnCard = ({ taskData }: IProps) => {
  const {
    user: { avatarURL },
  } = useAuth();

  return (
    <SC.TaskCard>
      <SC.TaskTitle>
        <EllipsisText text={taskData.title} length={30} tooltip="true" />
      </SC.TaskTitle>
      <SC.TaskWrapper>
        <SC.TaskWrapper>
          <SC.TaskAvatar>
            {avatarURL ? (
              <SC.TaskImage src={avatarURL} alt="user" />
            ) : (
              <SVG.UserAvatar width="16px" higth="16px" />
            )}
          </SC.TaskAvatar>
          <SC.TaskPriority name={taskData.priority}>
            {t(taskData.priority)}
          </SC.TaskPriority>
        </SC.TaskWrapper>
        <TaskToolbar taskData={taskData} />
      </SC.TaskWrapper>
    </SC.TaskCard>
  );
};
