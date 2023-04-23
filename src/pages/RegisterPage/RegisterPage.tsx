import { RegisterForm } from '../../components/RegisterForm/RegisterForm/RegisterForm';
import * as SC from './RegisterPage.styled';

export interface IFormOneData {
  email: string;
  password: string;
}

export const RegisterPage = () => {
  return (
        <RegisterForm />
  );
};
