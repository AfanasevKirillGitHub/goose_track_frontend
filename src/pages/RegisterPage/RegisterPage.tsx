import { RegisterForm } from '../../components/RegisterForm/RegisterForm/RegisterForm';
import * as SC from './RegisterPage.styled';

export interface IFormOneData {
  email: string;
  password: string;
}

export const RegisterPage = () => {
  // const [Step1, setStep1] = useState<boolean>(true);
  // const [dataForm1, setDataForm1] = useState<IFormOneData | {}>({});

  // const toggleForm = () => {
  //   setStep1(!Step1);
  // };

  // const getDataForm1 = (data: IFormOneData) => {
  //   setDataForm1(data);

  return (
    <SC.Main>
        <RegisterForm />
    </SC.Main>
  );
};
