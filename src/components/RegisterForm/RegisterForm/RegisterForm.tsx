import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../redux/auth/authOperations';
import { useInput } from '../../../hooks/useInput';
import { FcGoogle } from 'react-icons/fc';
import { FormEvent, useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { ICredentials } from '../../../helpers/interfaces/auth/authInterfaces';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import * as SC from './RegisterForm.styled';


export const RegisterForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { t } = useTranslation();
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  
  const name = useInput('', { isName: true });
  const email = useInput('', { isEmail: true });
  const password = useInput('', { isPassword: true });
  const confirmPassword = useInput('', { isSamePassword: password.value });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload: ICredentials = {
      name: name.value,
      email: email.value.toLowerCase(),
      password: password.value
    };

    dispatch(signUp(payload));
  };

  return (
    <SC.InnerDiv>
      <SC.Form onSubmit={onSubmit} autoComplete="off">
      <div>
        <SC.Title>{t('Sign Up')}</SC.Title>
        <SC.Google href="https://your-tasks-hv5t.onrender.com/api/auth/google">
        <FcGoogle style={{ width: '1.5em', height: '1.5em' }} />
      </SC.Google>
      </div>
      <SC.Div>
        <label>
          Name
          <SC.Input
            style={{
              border:
                ((name.isDirty &&
                  !name.nameError &&
                  '1px solid green') as string) ||
                ((name.isDirty &&
                  name.nameError &&
                  '1px solid red') as string),
            }}
            onChange={e => name.onChange(e)}
            onBlur={e => name.onBlur(e)}
            value={name.value}
            type="text"
            name="name"
            id='name'
            placeholder={t('Enter your name')!}
            required
          />
        </label>
          {name.isDirty && name.nameError && (
            <SC.Notification style={{ color: 'red' }}>
              {t('Enter your name pls')}
            </SC.Notification>
          )}
          {name.isDirty && !name.nameError && (
            <SC.Notification style={{ color: 'green' }}>
              {t('Name is valid')}
            </SC.Notification>
          )}
        </SC.Div>
      <SC.Div>
        <label>
          Email
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
          type="email"
          value={email.value}
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          name="email"
          placeholder={t('Enter your email')!}
          required
        />
        </label>
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
        <label>
          Password
        <SC.Input
          style={{
            border:
              ((password.isDirty &&
                !password.passwordError &&
                '1px solid green') as string) ||
              ((password.isDirty &&
                password.passwordError &&
                '1px solid red') as string),
          }}
          type={passwordType}
          value={password.value}
          onChange={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
          name="password"
          placeholder={t('Enter your password')!}
          required
        />
        </label>
        {password.isDirty && password.passwordError && (
          <SC.Notification style={{ color: 'red' }}>
            {t('Enter a valid Password')}
          </SC.Notification>
        )}
        {password.isDirty && !password.passwordError && (
          <SC.Notification style={{ color: 'green' }}>
            {t('Password is correct')}
          </SC.Notification>
        )}
        <SC.Eye
          onClick={() => {
            passwordType === 'password'
              ? setPasswordType('text')
              : setPasswordType('password');
          }}
        >
          {passwordType === 'password' ? <HiEye /> : <HiEyeOff />}
        </SC.Eye>
      </SC.Div>
      <SC.Div>
        <label>
          Confirm Password
        <SC.Input
          style={{
            border:
              ((confirmPassword.isDirty &&
                password.value === confirmPassword.value &&
                '1px solid green') as string) ||
              ((confirmPassword.isDirty &&
                password.value !== confirmPassword.value &&
                '1px solid red') as string),
          }}
          type={confirmPasswordType}
          value={confirmPassword.value}
          onChange={e => confirmPassword.onChange(e)}
          onBlur={e => confirmPassword.onBlur(e)}
          name="confirmPassword"
          placeholder={t('Confirm Password')!}
          required
        />
        </label>
        {confirmPassword.isDirty &&
          password.value === confirmPassword.value && (
            <SC.Notification style={{ color: 'green' }}>
              {t('confirmPassword is correct')}
            </SC.Notification>
          )}
        {confirmPassword.isDirty &&
          password.value !== confirmPassword.value && (
            <SC.Notification style={{ color: 'red' }}>
              {t('confirmPassword is not correct')}
            </SC.Notification>
          )}
        <SC.Eye
          onClick={() => {
            confirmPasswordType === 'password'
              ? setConfirmPasswordType('text')
              : setConfirmPasswordType('password');
          }}
        >
          {confirmPasswordType === 'password' ? <HiEye /> : <HiEyeOff />}
        </SC.Eye>
      </SC.Div>
      <SC.Button
        disabled={!email.validForm || !password.validForm || !name.validForm || !confirmPassword.validForm}
        type="submit"
      >
        {t('Sign Up')}
      </SC.Button>
      </SC.Form>
      <p>
        {t('Already have an account')}?{' '}
        <NavLink to="/login">{t('Login')}</NavLink>
      </p>
    </SC.InnerDiv>
  );
};
