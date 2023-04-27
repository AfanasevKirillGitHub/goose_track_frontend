import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useInput } from '../../hooks/useInput';
import { updateInfo } from '../../redux/auth/authOperations';
import plus from '../../images/icons/plusAvatar.svg';
import avatarDefault from '../../images/avatar-default.png';
import * as SC from './UserForm.styled';
import { useTranslation } from 'react-i18next';

export const UserForm = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const [birthday, setBirthday] = useState(
    user.birthday ? new Date(user.birthday) : ''
  );

   const [avatarURL, setAvatarURL] = useState(null);

  const name = useInput(user.name ?? '', { isName: true });
  const email = useInput(user.email ?? '', { isEmail: true });
  const skype = useInput(user.skype ?? '', { isSkype: true });
  const phone = useInput(user.phone ?? '', { isPhone: true });
  const birthDay = useInput(birthday)
  
  // const avatarURL = useInput(user.avatarURL ?? avatarDefault, {
  //   isEmail: true,
  // });
  // const birthday = useInput(user.birthday ? new Date(user.birthday) : '', {
  //   isEmail: true,
  // });

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, files } = evt.target;
    switch (name) {
      case 'avatarURL':
        setAvatarURL(files[0]);
        return;
      default:
        return;
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('phone', phone.value);
    formData.append('skype', skype.value);
    formData.append('birthday', birthday);
    formData.append('avatar', avatarURL);

    dispatch(updateInfo(formData));
  };

  return (
    <SC.Wrapper>
      <SC.Forms autoComplete="off" onSubmit={handleSubmit}>
        <SC.Container>
          {avatarURL ? (
            <SC.ImgAvatar src={URL.createObjectURL(avatarURL)} alt="avatar" />
          ) : (
            <SC.ImgAvatar src={user.avatarURL ?? avatarDefault} alt="avatar" />
          )}
        </SC.Container>

        <SC.LabelImg htmlFor="avatar">
          <SC.ImgBtn src={plus} alt="user" />

          <SC.InputFile
            id="avatar"
            type="file"
            onChange={handleChange}
            accept="image/*,.png,.jpg,.jpeg,.webp"
            name="avatarURL"
          />
        </SC.LabelImg>

        <SC.Title> {user?.name ?? ' '} </SC.Title>
        <SC.User> {t('User')} </SC.User>

        <SC.InputList>
        <SC.Div>
          <SC.LabelBtn htmlFor="username">
            {t('Name')}
            <SC.Input
              style={{
                border:
                  (name.isDirty && !name.nameError && '1px solid green') ||
                  (name.isDirty && name.nameError && '1px solid red'),
              }}
              type="text"
              value={name.value}
              name="name"
              id="name"
              onChange={e => name.onChange(e)}
              onBlur={e => name.onBlur(e)}
              placeholder={t('Enter your name')}
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
          </SC.Div>

          <SC.Div>
          <SC.LabelBtn htmlFor="phone">
            {t('Phone')}
            <SC.Input
              style={{
                border:
                  (phone.isDirty && !phone.phoneError && '1px solid green') ||
                  (phone.isDirty && phone.phoneError && '1px solid red') 
              }}
              type="tel"
              name="phone"
              id="phone"
              value={phone.value}
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
          </SC.Div>

          <SC.Div>
          <SC.LabelBtn htmlFor="birthday">
          {t('Birthday')}
            <SC.DatePick
              name="birthday"
              id="date"
              type="date"
              input={true}
              birthDay={birthDay.isDirty}
              selected={birthday}
              onBlur={e => birthDay.onBlur(e)}
              onChange={data => setBirthday(data)}
              dateFormat="yyyy-MM-dd"
            />
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
          </SC.Div>

          <SC.Div>
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
              value={skype.value}
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
          </SC.Div>

          <SC.Div>
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
              value={email.value}
              onChange={e => email.onChange(e)}
              onBlur={e => email.onBlur(e)}
              placeholder={t('Enter your email')}
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
          </SC.Div>

        </SC.InputList>

        <SC.Btn
          type="submit"
          disabled={
            !email.validForm ||
            !name.validForm 

          }

        >
          {t('Save changes')}
        </SC.Btn>
      </SC.Forms>
    </SC.Wrapper>
  );
};
