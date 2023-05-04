import { useDispatch } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { useAuth } from '../../hooks/useAuth';
import { useInput } from '../../hooks/useInput';
import { updateInfo } from '../../redux/auth/authOperations';
import * as SC from './UserForm.styled';
import { SVG } from '../../images';
import { ICredentials } from '../../helpers/interfaces/auth/authInterfaces';
import { AddReview } from '../Reviews/addReview';
import { Modal } from '../Modal/Modal';
import DefaultAvatar from '../../images/icons/user.svg';

export const UserForm = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const [birthday, setBirthday] = useState(
    user.birthday ? new Date(user.birthday) : ''
  );

  const [avatarURL, setAvatarURL] = useState<File | null>(null);

  const name = useInput(user.name ?? '', { isName: true });
  const email = useInput(user.email ?? '', { isEmail: true });
  const skype = useInput(user.skype ?? '', { isSkype: true });
  const phone = useInput(user.phone ?? '', { isPhone: true });
  const birthDay = useInput(birthday, {});

  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = evt.target;
    switch (name) {
      case 'avatarURL':
        setAvatarURL(files![0] as File);
        return;
      default:
        return;
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', name.value as string);
    formData.append('email', email.value as string);
    formData.append('phone', phone.value as string);
    formData.append('skype', skype.value as string);
    formData.append('birthday', birthday as string);
    formData.append(
      'avatar',
      avatarURL ? (avatarURL as File) : (user.avatarURL as string)
    );

    localStorage.getItem('i18nextLng') === 'en'
      ? toast.success('User data updated')
      : toast.success('Дані оновлено');

    dispatch(updateInfo(formData as ICredentials));
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  return (
    <SC.Wrapper>
      <SC.Form autoComplete="off" onSubmit={handleSubmit}>
        <SC.ContainerAvatar>
          {avatarURL ? (
            <SC.ImgAvatar src={URL.createObjectURL(avatarURL)} alt="avatar" />
          ) : (
            <SC.ImgAvatar
              src={
                user.avatarURL === null || user.avatarURL === 'null'
                  ? DefaultAvatar
                  : user.avatarURL
              }
              alt="avatar"
            />
          )}
        </SC.ContainerAvatar>

        <SC.AvatarButton htmlFor="avatar">
          <SC.IconWrapper>
            <SC.Icon>
              <SVG.AddIcon />
            </SC.Icon>
          </SC.IconWrapper>
          <SC.InputFile
            id="avatar"
            type="file"
            onChange={handleChange}
            accept="image/*,.png,.jpg,.jpeg,.webp"
            name="avatarURL"
          />
          <SC.HiddenTitle>Upload Avatar</SC.HiddenTitle>
        </SC.AvatarButton>

        <SC.UserName> {user?.name ?? ' '} </SC.UserName>
        <SC.UserText> {t('User')} </SC.UserText>

        <SC.InputList>
          <SC.DivNotifications>
            <SC.LabelBtn htmlFor="username">
              {t('Name')}
              <SC.Input
                style={{
                  border:
                    (name.isDirty && !name.nameError && '1px solid green') ||
                    (name.isDirty && name.nameError && '1px solid red'),
                }}
                type="text"
                value={name.value as string}
                name="name"
                id="name"
                onChange={e => name.onChange(e)}
                onBlur={e => name.onBlur(e)}
                placeholder={t('Enter your name')!}
                required
              />
            </SC.LabelBtn>
            {name.isDirty && name.nameError && (
              <SC.Notifications style={{ color: 'red' }}>
                {t('Enter your name pls')}
              </SC.Notifications>
            )}
            {name.isDirty && !name.nameError && (
              <SC.Notifications style={{ color: 'green' }}>
                {t('Name is valid')}
              </SC.Notifications>
            )}
          </SC.DivNotifications>

          <SC.DivNotifications>
            <SC.LabelBtn htmlFor="phone">
              {t('Phone')}
              <SC.Input
                style={{
                  border:
                    (phone.isDirty && !phone.phoneError && '1px solid green') ||
                    (phone.isDirty && phone.phoneError && '1px solid red'),
                }}
                type="tel"
                name="phone"
                id="phone"
                value={phone.value as string}
                onChange={e => phone.onChange(e)}
                onBlur={e => phone.onBlur(e)}
              ></SC.Input>
            </SC.LabelBtn>
            {phone.isDirty && phone.phoneError && (
              <SC.Notifications style={{ color: 'red' }}>
                {t('Enter your phone pls')}
              </SC.Notifications>
            )}
            {phone.isDirty && !phone.phoneError && (
              <SC.Notifications style={{ color: 'green' }}>
                {t('Phone is valid')}
              </SC.Notifications>
            )}
          </SC.DivNotifications>

          <SC.DivNotifications>
            <SC.LabelBtn htmlFor="birthday">
              {t('Birthday')}
              <SC.DatePickerWrapper>
                <SC.DatePick
                  name="birthday"
                  id="date"
                  type="date"
                  input={true}
                  birthDay={birthDay.isDirty}
                  selected={birthday as Date}
                  onBlur={e => birthDay.onBlur(e)}
                  onChange={data => setBirthday(data as Date)}
                  dateFormat="yyyy-MM-dd"
                  calendarStartDay={1}
                />
              </SC.DatePickerWrapper>
            </SC.LabelBtn>
            {birthDay.isDirty && birthday === null && (
              <SC.Notifications style={{ color: 'red' }}>
                {t('Enter your birthday pls')}
              </SC.Notifications>
            )}
            {birthDay.isDirty && birthday !== null && (
              <SC.Notifications style={{ color: 'green' }}>
                {t('birthday is valid')}
              </SC.Notifications>
            )}
          </SC.DivNotifications>

          <SC.DivNotifications>
            <SC.LabelBtn htmlFor="skype">
              Skype
              <SC.Input
                style={{
                  border:
                    (skype.isDirty && !skype.skypeError && '1px solid green') ||
                    (skype.isDirty && skype.skypeError && '1px solid red'),
                }}
                type="text"
                name="skype"
                id="skype"
                value={skype.value as string}
                onChange={e => skype.onChange(e)}
                onBlur={e => skype.onBlur(e)}
              />
            </SC.LabelBtn>
            {skype.isDirty && skype.skypeError && (
              <SC.Notifications style={{ color: 'red' }}>
                {t('Enter your skype pls')}
              </SC.Notifications>
            )}
            {skype.isDirty && !skype.skypeError && (
              <SC.Notifications style={{ color: 'green' }}>
                {t('Skype is valid')}
              </SC.Notifications>
            )}
          </SC.DivNotifications>

          <SC.DivNotifications>
            <SC.LabelBtn htmlFor="email">
              {t('Email')}
              <SC.Input
                style={{
                  border:
                    (email.isDirty && !email.emailError && '1px solid green') ||
                    (email.isDirty && email.emailError && '1px solid red'),
                }}
                type="email"
                name="email"
                id="email"
                value={email.value as string}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
                placeholder={t('Enter your email')!}
                required
              />
            </SC.LabelBtn>
            {(email.isDirty && email.emailError && (
              <SC.Notifications style={{ color: 'red' }}>
                {t('Enter a valid Email')}
              </SC.Notifications>
            )) ||
              (email.isDirty && !email.emailError && (
                <SC.Notifications style={{ color: 'green' }}>
                  {t('Email is correct')}
                </SC.Notifications>
              ))}
          </SC.DivNotifications>
        </SC.InputList>

        <SC.SubmitButton
          type="submit"
          disabled={!email.validForm || !name.validForm}
        >
          {t('Save changes')}
        </SC.SubmitButton>
      </SC.Form>
      <SC.ButtonReview onClick={toggleModal} type="button">
        {t('Leave review')}
      </SC.ButtonReview>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <AddReview toggleModal={toggleModal} />
        </Modal>
      )}
    </SC.Wrapper>
  );
};
