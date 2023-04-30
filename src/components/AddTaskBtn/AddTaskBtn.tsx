import { useTranslation } from 'react-i18next';
import { SVG } from '../../images';
import * as SC from './AddTaskBtn.styled';

interface IAddBtnProps {
  onClick: () => void;
}

export const AddTaskBtn = ({ onClick }: IAddBtnProps) => {
  const { t } = useTranslation();
  return (
    <SC.AddButton type="button" onClick={onClick}>
      <SVG.AddIcon />
      {t('Add task')}
    </SC.AddButton>
  );
};
