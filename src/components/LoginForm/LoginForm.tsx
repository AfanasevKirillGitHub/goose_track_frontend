import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { signIn } from '../../redux/auth/authOperations';
import { ICredentials } from '../../helpers/interfaces/auth/authInterfaces';
import { NavLink } from 'react-router-dom';
import * as SC from './LoginForm.styled';
import { useInput } from '../../hooks/useInput';
import { FcGoogle } from 'react-icons/fc'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useState } from 'react';


export const LoginForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { t } = useTranslation();
  const[passwordType, setPasswordType] = useState('password')

  const email = useInput('', { isEmail: true });
  const password = useInput('', { minLength: 6 });


  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      'password'
    ) as HTMLInputElement;
    const payload: ICredentials = {
      email: emailInput.value.toLowerCase(),
      password: passwordInput.value,
    };
    dispatch(signIn(payload));
    form.reset();
  };
  return (
    <SC.InnerDiv>
      <SC.Title>{t('Login')}</SC.Title>
      <SC.Google href="https://your-pets.onrender.com/api/users/google"> <FcGoogle style={{width: "1.5em", height: "1.5em" }}/></SC.Google>  
      <SC.Form onSubmit={handleSubmit} autoComplete="off">
        <SC.Div>
          <SC.Input
            style={{
              border:
                ((email.isDirty &&
                  !email.emailError &&
                  '1px solid green') as string) ||
                ((email.isDirty &&
                  email.emailError &&
                  '1px solid red') as string),
            }}
            onChange={e => email.onChange(e)}
            type="email"
            value={email.value}
            name="email"
            placeholder={t('Example@gmail.com')!}
            required
          />
          {(email.isDirty && email.emailError && (
            <SC.Notification style={{ color: 'red' }}>
              {t('Enter a valid Email')}
            </SC.Notification>
          )) ||
            (email.isDirty && !email.emailError && (
              <SC.Notification style={{ color: 'green' }}>
                {t('Email is correct')}
              </SC.Notification>
            ))}
        </SC.Div>
        <SC.Div>
          <SC.Input
            style={{
              border:
                ((password.isDirty &&
                  password.minLengthError &&
                  '1px solid red') as string) ||
                ((password.isDirty &&
                  !password.minLengthError &&
                  '1px solid green') as string),
            }}
            onChange={e => password.onChange(e)}
            type={passwordType}
            value={password.value}
            name="password"
            placeholder={t('Password')!}
            required
          />
          {password.isDirty && password.minLengthError && (
            <SC.Notification style={{ color: 'red' }}>
              {t('Enter a valid Password')}
            </SC.Notification>
          )}
          {password.isDirty && !password.minLengthError && (
            <SC.Notification style={{ color: 'green' }}>
              {t('Password is correct')}
            </SC.Notification>
          )}
          <SC.Eye onClick={() => {passwordType === 'password' ? setPasswordType('text') : setPasswordType('password')}}>{passwordType === 'password' ? <HiEye/> : <HiEyeOff/>}</SC.Eye>
        </SC.Div>
        <SC.Button type="submit">{t('Login')}</SC.Button>
      </SC.Form>
      <p>
        {t("Don't have an account")}?{' '}
        <NavLink to="/registration">{t('Register')}</NavLink>
      </p>
    </SC.InnerDiv>
  );
};
