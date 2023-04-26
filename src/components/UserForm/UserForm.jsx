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
  const [avatarURL, setAvatarURL] = useState(user.avatarURL ?? avatarDefault);

  const name = useInput(user.name ?? '', { isName: true, maxLength: 16 });
  const email = useInput(user.email ?? '', { isEmail: true });
  const skype = useInput(user.skype ?? '', { maxLength: 16 });
  const phone = useInput(user.phone ?? '', { isPhone: true });

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
          <SC.ImgAvatar src={user.avatarURL ?? avatarDefault} alt="avatar" />
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
        <SC.User> User </SC.User>

        <SC.InputList>
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
          {/* {name.isDirty && name.nameError && (
            <SC.Notification style={{ color: 'red' }}>
              {t('Enter your name pls')}
            </SC.Notification>
          )} */}

          <SC.LabelBtn htmlFor="phone">
            Phone
            <SC.Input
              style={{
                border:
                  (phone.isDirty && !phone.phoneError && '1px solid green') ||
                  (phone.isDirty && phone.phoneError && '1px solid red'),
              }}
              type="tel"
              name="phone"
              id="phone"
              value={phone.value}
              onChange={e => phone.onChange(e)}
              onBlur={e => phone.onBlur(e)}
            ></SC.Input>
          </SC.LabelBtn>

          <SC.LabelBtn htmlFor="birthday">
            Birthday
            <SC.DatePick
              name="birthday"
              id="date"
              type="date"
              input={true}
              selected={birthday}
              onChange={data => setBirthday(data)}
              dateFormat="yyyy-MM-dd"
            />
          </SC.LabelBtn>

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
          {/* {email.isDirty && email.emailError && (
            <SC.Notification style={{ color: 'red' }}>
              {t('Enter a valid Email')}
            </SC.Notification>
          )} */}
        </SC.InputList>

        <SC.Btn
          disabled={
            !email.validForm ||
            !name.validForm ||
            !phone.validForm ||
            !skype.validForm
          }
          type="submit"
        >
          Save changes
        </SC.Btn>
      </SC.Forms>
    </SC.Wrapper>
  );
};
