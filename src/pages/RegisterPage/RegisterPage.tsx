import { RegisterForm } from '../../components/RegisterForm/RegisterForm/RegisterForm';

export interface IFormOneData {
  email: string;
  password: string;
}

export const RegisterPage = () => {
  return (
        <RegisterForm />
  );
};
