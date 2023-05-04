import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

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

    localStorage.getItem('i18nextLng') === 'en'
      ? toast.success('Yaay, more free time!')
      : toast.success('Юху, більше вільного часу!');
  };

  return (
    <>
      <SC.ModalTitle>{t(`confirm delete`)}</SC.ModalTitle>
      <SC.ModalList>
        <SC.ItemBtn type="button" onClick={handleDelete}>
          {t(`Yes`)}
        </SC.ItemBtn>
        <SC.SecondaryItemBtn type="button" onClick={toggleModal}>
          {t(`No`)}
        </SC.SecondaryItemBtn>
      </SC.ModalList>
    </>
  );
};
