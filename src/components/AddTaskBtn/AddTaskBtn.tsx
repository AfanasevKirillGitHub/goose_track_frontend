import { useTranslation } from 'react-i18next';
import { SVG } from '../../images';
import { AddButton } from './AddTaskBtn.styled';

interface IAddBtnProps {
  onClick: () => void;
}

export const AddTaskBtn = ({ onClick }: IAddBtnProps) => {
  const { t } = useTranslation();
  return (
    <AddButton type="button" onClick={onClick}>
      <SVG.AddIcon />
      {t('Add task')}
    </AddButton>
  );
};
