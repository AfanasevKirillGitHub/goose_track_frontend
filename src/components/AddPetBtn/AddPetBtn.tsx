import { useTranslation } from 'react-i18next';
import * as SC from './AddPetBtn.styled';

interface IAddPetBtnProps {
  toggleModal: () => void;
}

export const AddPetBtn: React.FC<IAddPetBtnProps> = ({ toggleModal }) => {
  const { t } = useTranslation();

  return (
    <SC.Button type="button" onClick={toggleModal}>
      {t('add pet')}
      <SC.Wrapper>
        <SC.Plus />
      </SC.Wrapper>
    </SC.Button>
  );
};
