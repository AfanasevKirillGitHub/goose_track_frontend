import { RegisterForm1 } from '../../components/RegisterForm/RegisterForm1/RegisterForm1';
import { RegisterForm2 } from '../../components/RegisterForm/RegisterForm2/RegisterForm2';
import { useState } from 'react';
import * as SC from './RegisterPage.styled';

export interface IFormOneData {
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const [Step1, setStep1] = useState<boolean>(true);
  const [dataForm1, setDataForm1] = useState<IFormOneData | {}>({});

  const toggleForm = () => {
    setStep1(!Step1);
  };

  const getDataForm1 = (data: IFormOneData) => {
    setDataForm1(data);
  };
  return (
    <SC.Main>
      {Step1 ? (
        <RegisterForm1 getData={getDataForm1} onToggle={toggleForm} />
      ) : (
        <RegisterForm2 dataForm1={dataForm1} onToggle={toggleForm} />
      )}
    </SC.Main>
  );
};
