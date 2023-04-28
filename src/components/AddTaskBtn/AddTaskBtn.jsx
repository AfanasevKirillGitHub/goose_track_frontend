import { useTranslation } from 'react-i18next';
import { SVG } from '../../images';
import { AddButton } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <AddButton type="button" onClick={onClick}>
      <SVG.AddIcon />
      {t('Add task')}
    </AddButton>
  );
};
