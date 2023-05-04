import { FormEvent, useState } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../redux/auth/authOperations';
import { useInput } from '../../../hooks/useInput';
import { ICredentials } from '../../../helpers/interfaces/auth/authInterfaces';
import * as SC from './RegisterForm.styled';
import { SVG, IMG, IMG2x } from '../../../images';
import { ChangeLngElem } from '../../ChangeLngElem/ChangeLngElem';

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
      name: name.value as string,
      email: (email.value as string).toLowerCase(),
      password: password.value as string,
    };

    dispatch(signUp(payload));
  };

  return (
    <SC.Wrapper>
      <SC.InnerDiv>
        <SC.Form onSubmit={onSubmit} autoComplete="off">
          <SC.TitleDiv>
            <SC.Title>{t('Sign Up')}</SC.Title>
            <ChangeLngElem />
          </SC.TitleDiv>
          <SC.Div>
            <SC.Label>
              {t('Name')}
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
                value={name.value as string}
                type="text"
                name="name"
                id="name"
                placeholder={t('Enter your name')!}
                required
              />
            </SC.Label>
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
            <SC.Label>
              {t('Email')}
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
                value={email.value as string}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                name="email"
                placeholder={t('Enter your email')!}
                required
              />
            </SC.Label>
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
            <SC.Label>
              {t('Password')}
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
                value={password.value as string}
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
                name="password"
                placeholder={t('Enter your password')!}
                required
              />
            </SC.Label>
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
              {passwordType === 'password' ? (
                <SVG.EyeIcon />
              ) : (
                <SVG.EyeClosedIcon />
              )}
            </SC.Eye>
          </SC.Div>
          <SC.Div>
            <SC.Label>
              {t('Confirm Password')}
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
                value={confirmPassword.value as string}
                onChange={e => confirmPassword.onChange(e)}
                onBlur={e => confirmPassword.onBlur(e)}
                name="confirmPassword"
                placeholder={t('Confirm Password')!}
                required
              />
            </SC.Label>
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
              {confirmPasswordType === 'password' ? (
                <SVG.EyeIcon />
              ) : (
                <SVG.EyeClosedIcon />
              )}
            </SC.Eye>
          </SC.Div>

          <SC.Button
            disabled={
              !email.validForm ||
              !password.validForm ||
              !name.validForm ||
              !confirmPassword.validForm
            }
            type="submit"
          >
            {t('Sign Up')}
            <SVG.LogInIcon />
          </SC.Button>
          <SC.Google href="https://your-tasks-hv5t.onrender.com/api/auth/google">
            <SC.Span>{t('register with')}</SC.Span>
            <SC.GoogleName>
              <SVG.GoogleIcon />
              <SC.Span>
                <i>oo</i>gle
              </SC.Span>
            </SC.GoogleName>
          </SC.Google>
        </SC.Form>
        <SC.Link to="/login">{t('Log In')}</SC.Link>
        <SC.GooseImage
          srcSet={`${IMG.register} 1x, ${IMG2x.register2x} 2x`}
          alt="goose"
        />
      </SC.InnerDiv>
    </SC.Wrapper>
  );
};
