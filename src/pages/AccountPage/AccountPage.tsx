import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';
import { MyInfo } from '../../components/MyInfo/MyInfo';

export const AccountPage: React.FC = () => {
  const modalHandler = (): void => {
    console.log('working');
  };
  return (
    <>
      <MyInfo />
      <AddPetBtn toggleModal={modalHandler} />
    </>
  );
};
