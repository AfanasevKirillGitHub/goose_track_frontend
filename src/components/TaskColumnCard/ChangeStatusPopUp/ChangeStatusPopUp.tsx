import 'reactjs-popup/dist/index.css';
import { SVG } from '../../../images';
import * as SC from './ChangeStatusPopUp.styled';
import { ESTATUS, STATUS } from '../../../helpers/enums';
import { useMediaQuery } from '@react-hook/media-query';
import { useUpdateTasksMutation } from '../../../redux/task/taskOperations';
import { useTranslation } from 'react-i18next';
import { ITask } from '../../../helpers/interfaces/taskApiInterface/taskApiInterface';

interface IProps {
  taskData: ITask;
}

export const ChangeStatusPopUp = ({ taskData }: IProps) => {
  const [updateTask, { isLoading: isUpdatind }] = useUpdateTasksMutation();

  const tablet = useMediaQuery('screen and (min-width: 768px)');
  const { t } = useTranslation();

  const changeStatus = (data: string) => {
    const updatedTask = { ...taskData, status: data };

    updateTask(updatedTask);
  };

  return (
    <SC.PopupContainer
      trigger={
        <SC.TaskToolbarBtn>
          <SVG.ArrowCircle />
        </SC.TaskToolbarBtn>
      }
      position={tablet ? 'top center' : 'top center'}
      arrow={false}
      offsetY={tablet ? 14 : 27}
      lockScroll
      closeOnDocumentClick
      closeOnEscape
      contentStyle={{
        width: 'auto',
        height: tablet ? '90px' : '70px',
        padding: 0,
        borderRadius: '8px',
        boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
      }}
    >
      <SC.PopupContent>
        {STATUS.filter(status => status !== taskData.status).map(status => {
          let buttonName = status;
          switch (buttonName) {
            case ESTATUS.TODO:
              buttonName = t('To do');
              break;
            case ESTATUS.INPROGRESS:
              buttonName = t('In progress');
              break;
            case ESTATUS.DONE:
              buttonName = t('Done');
              break;
            default:
              return null;
          }

          return (
            <SC.PopupItem key={status}>
              <SC.PopupButton
                onClick={() => changeStatus(status)}
                disabled={isUpdatind}
              >
                {buttonName}{' '}
                <SVG.ArrowCircle
                  width={tablet ? '14px' : '12px'}
                  height={tablet ? '14px' : '12px'}
                />
              </SC.PopupButton>
            </SC.PopupItem>
          );
        })}
      </SC.PopupContent>
    </SC.PopupContainer>
  );
};
