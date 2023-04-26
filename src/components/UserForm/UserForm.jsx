import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
// import { useInput } from '../../hooks/useInput';
import { updateInfo } from '../../redux/auth/authOperations';
import plus from '../../images/icons/plusAvatar.svg';
import avatarDefault from '../../images/avatar-default.png';
import * as SC from './UserForm.styled';

export const UserForm = () => {
  const { user } = useAuth();

  const [birthday, setBirthday] = useState(new Date(user.birthday) ?? '');
  const [avatarURL, setAvatarURL] = useState('');
  const [name, setName] = useState(user.name ?? '');
  const [skype, setSkype] = useState(user.skype ?? '');
  const [email, setEmail] = useState(user.email ?? '');
  const [phone, setPhone] = useState(user.phone ?? '');

  // const name = useInput('', { isName: true });
  // const email = useInput('', { isEmail: true });

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value, files } = evt.target;
    console.log(value);
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'skype':
        setSkype(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'phone':
        setPhone(value);
        return;
      case 'avatarURL':
        setAvatarURL(files[0]);
        return;
      default:
        return;
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('skype', skype);
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
            User Name
            <SC.Input
              type="text"
              value={name}
              name="name"
              id="name"
              onChange={handleChange}
            />
          </SC.LabelBtn>

          <SC.LabelBtn htmlFor="phone">
            Phone
            <SC.Input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={handleChange}
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
              type="text"
              name="skype"
              id="skype"
              value={skype}
              onChange={handleChange}
            />
          </SC.LabelBtn>

          <SC.LabelBtn htmlFor="email">
            Email
            <SC.Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </SC.LabelBtn>
        </SC.InputList>

        <SC.Btn type="submit"> Save changes </SC.Btn>
      </SC.Forms>
    </SC.Wrapper>
  );
};
