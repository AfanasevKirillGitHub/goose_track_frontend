import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { NavLink } from 'react-router-dom';
import { signUp } from '../../../redux/auth/authOperations';
import { useTranslation } from 'react-i18next';
import { IFormOneData } from '../../../pages/RegisterPage/RegisterPage';
import { ICredentials } from '../../../helpers/interfaces/auth/authInterfaces';
import * as SC from './RegisterForm2.styled';
import { useInput } from '../../../hooks/useInput';

interface IProps {
  onToggle: () => void;
  dataForm1: IFormOneData | {};
}

export const RegisterForm2 = ({ onToggle, dataForm1 }: IProps) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { t } = useTranslation();
  const name = useInput('', { minLength: 2 });
  const city = useInput('', { minLength: 3 });
  const phone = useInput('', { minLength: 10 });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const payload: ICredentials = {
      ...(dataForm1 as {
        email: string;
        password: string;
      }),
      name: name.value,
      city: city.value,
      phone: phone.value,
    };

    dispatch(signUp(payload));
    form.reset();
  };

  return (
    <SC.InnerDiv>
      <SC.Title>{t('Registration')}</SC.Title>
      <SC.Form onSubmit={onSubmit} autoComplete="off">
        <SC.Div>
          <SC.Input
            style={{
              border:
                ((name.isDirty &&
                  !name.minLengthError &&
                  '1px solid green') as string) ||
                ((name.isDirty &&
                  name.minLengthError &&
                  '1px solid red') as string),
            }}
            onChange={e => name.onChange(e)}
            value={name.value}
            type="text"
            name="name"
            placeholder={t('Name')!}
            required
          />
          {name.isDirty && name.minLengthError && (
            <SC.Notification style={{ color: 'red' }}>
              {t('Enter your name pls')}
            </SC.Notification>
          )}
          {name.isDirty && !name.minLengthError && (
            <SC.Notification style={{ color: 'green' }}>
              {t('Name is valid')}
            </SC.Notification>
          )}
        </SC.Div>
        <SC.Div>
          <SC.Input
            style={{
              border:
                ((city.isDirty &&
                  !city.minLengthError &&
                  '1px solid green') as string) ||
                ((city.isDirty &&
                  city.minLengthError &&
                  '1px solid red') as string),
            }}
            onChange={e => city.onChange(e)}
            value={city.value}
            type="text"
            name="city"
            placeholder={t('City, Region')!}
            required
          />
          {city.isDirty && city.minLengthError && (
            <SC.Notification style={{ color: 'red' }}>
              {t('Enter your city pls')}
            </SC.Notification>
          )}
          {city.isDirty && !city.minLengthError && (
            <SC.Notification style={{ color: 'green' }}>
              {t('City is valid')}
            </SC.Notification>
          )}
        </SC.Div>
        <SC.Div>
          <SC.Input
            style={{
              border:
                ((phone.isDirty &&
                  !phone.minLengthError &&
                  '1px solid green') as string) ||
                ((phone.isDirty &&
                  phone.minLengthError &&
                  '1px solid red') as string),
            }}
            onChange={e => phone.onChange(e)}
            value={phone.value}
            type="tel"
            name="phone"
            placeholder={t('Mobile Phone')!}
            required
          />
          {phone.isDirty && phone.minLengthError && (
            <SC.Notification style={{ color: 'red' }}>
              {t('Enter your phone pls')}
            </SC.Notification>
          )}
          {phone.isDirty && !phone.minLengthError && (
            <SC.Notification style={{ color: 'green' }}>
              {t('Phone is valid')}
            </SC.Notification>
          )}
        </SC.Div>

        <SC.Button1
          disabled={
            name.minLengthError || city.minLengthError || phone.minLengthError
          }
          type="submit"
        >
          {t('Registration')}
        </SC.Button1>
        <SC.Button2 onClick={onToggle} type="button">
          {t('Back')}
        </SC.Button2>
      </SC.Form>
      <p>
        {t('Already have an account')}?
        <NavLink to="/login">{t('Login')}</NavLink>
      </p>
    </SC.InnerDiv>
  );
};
