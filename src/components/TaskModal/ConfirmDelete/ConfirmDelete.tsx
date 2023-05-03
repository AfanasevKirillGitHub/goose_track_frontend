import { useTranslation } from 'react-i18next';
import { useRemoveTasksMutation } from '../../../redux/task/taskOperations';
import * as SC from './ConfirmDelete.styled';

interface IDelete {
  id: string;
  toggleModal: () => void;
}

export const ConfirmDelete = ({ id, toggleModal }: IDelete) => {
  const { t } = useTranslation();
  const [deleteTask] = useRemoveTasksMutation();

  const handleDelete = () => {
    deleteTask(id);
    toggleModal();
  };

  return (
    <>
      <SC.ModalTitle>{t(`confirm delete`)}</SC.ModalTitle>
      <SC.ModalList>
        <li>
          <SC.ItemBtn type="button" onClick={handleDelete}>
            {t(`Yes`)}
          </SC.ItemBtn>
        </li>
        <li>
          <SC.ItemBtn type="button" onClick={toggleModal}>
            {t(`No`)}
          </SC.ItemBtn>
        </li>
      </SC.ModalList>
    </>
  );
};
