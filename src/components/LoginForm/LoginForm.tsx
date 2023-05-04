import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { signIn } from '../../redux/auth/authOperations';
import { ICredentials } from '../../helpers/interfaces/auth/authInterfaces';
import * as SC from './LoginForm.styled';
import { useInput } from '../../hooks/useInput';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { SVG, IMG, IMG2x } from '../../images';

export const LoginForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { t } = useTranslation();
  const [passwordType, setPasswordType] = useState('password');

  const email = useInput('', { isEmail: true });
  const password = useInput('', { isPassword: true });

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const payload: ICredentials = {
      email: (email.value as string).toLowerCase(),
      password: password.value as string,
    };
    dispatch(signIn(payload));
  };
  return (
    <SC.Wrapper>
      <SC.InnerDiv>
        <SC.Form onSubmit={handleSubmit} autoComplete="off">
          <SC.TitleDiv>
            <SC.Title>{t('Log In')}</SC.Title>
            <ChangeLngElem />
          </SC.TitleDiv>
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
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                type="email"
                value={email.value as string}
                name="email"
                placeholder={t('Example@gmail.com')!}
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
                      password.passwordError &&
                      '1px solid red') as string) ||
                    ((password.isDirty &&
                      !password.passwordError &&
                      '1px solid green') as string),
                }}
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
                type={passwordType}
                value={password.value as string}
                name="password"
                placeholder={t('Password')!}
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

          <SC.Button
            type="submit"
            disabled={!email.validForm || !password.validForm}
          >
            {t('Log In')}
            <SVG.LogInIcon />
          </SC.Button>

          <SC.Google href="https://your-tasks-hv5t.onrender.com/api/auth/google">
            <SC.Span>{t('login with')}</SC.Span>
            <SC.GoogleName>
              <SVG.GoogleIcon />
              <SC.Span>
                <i>oo</i>gle
              </SC.Span>
            </SC.GoogleName>
          </SC.Google>
        </SC.Form>

        <SC.Link to="/registration">{t('Sign Up')}</SC.Link>
        <SC.GooseImage
          srcSet={`${IMG.rocket} 1x, ${IMG2x.rocket2x} 2x`}
          alt="goose"
        />
      </SC.InnerDiv>
    </SC.Wrapper>
  );
};
