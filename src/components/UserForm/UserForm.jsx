import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import * as SC from './UserForm.styled';

import { updateInfo } from '../../redux/auth/authOperations';

import plus from '../../images/icons/plusAvatar.svg';
import avatarDefault from '../../images/avatar-default.png';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().min(7).max(15).required('Phone number is required'),
  //   birthday: yup.date(), // TODO: - валидацию
  email: yup.string().email().required(),
  skype: yup.string().max(16),
});

const UserForm = () => {
  const { user } = useAuth();
  const [birthday, setBirthday] = useState();
  const [avatarURL, setAvatarURL] = useState();

  console.log(user);
  const dispatch = useDispatch();

  return (
    <SC.Wrapper>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: user ? user.name : '',
          email: user ? user.email : '',
          phone: user ? user.phone : '',
          skype: user ? user.skype : '',
          birthday: user ? user.birthday : '',
          avatar: user ? user.avatarURL : avatarDefault,
        }}
        onSubmit={(values, { resetForm }) => {
          const newContact = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            skype: values.skype,
            birthday: birthday,
            avatar: avatarURL,
          };
          console.log(newContact);
          dispatch(updateInfo(newContact));
          // resetForm();
        }}
        validationSchema={schema}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <SC.Forms autoComplete="off" onSubmit={handleSubmit}>
            <SC.Container>
              {avatarURL ? (
                <SC.ImgAvatar
                  src={URL.createObjectURL(avatarURL)}
                  alt="avatar"
                />
              ) : (
                <SC.ImgAvatar
                  src={user.avatarURL || avatarDefault}
                  alt="avatar"
                />
              )}
            </SC.Container>

            <SC.LabelImg htmlFor="avatar">
              <SC.ImgBtn src={plus} alt="user" />

              <SC.InputFile
                id="avatar"
                type="file"
                onChange={event => setAvatarURL(event.target.files[0])}
                accept="image/*,.png,.jpg,.gif,.web"
                name="avatar"
              ></SC.InputFile>
            </SC.LabelImg>

            <SC.Title> {user?.name ?? ' '} </SC.Title>
            <SC.User> User </SC.User>

            <SC.InputList>
              <SC.LabelBtn htmlFor="username">
                <p>User Name</p>
                <SC.Input
                  type="text"
                  value={values.name}
                  name="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={'Name'}
                ></SC.Input>
                <ErrorMessage name="name" />
              </SC.LabelBtn>

              <SC.LabelBtn htmlFor="phone">
                <p>Phone</p>
                <SC.Input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  placeholder={'+380'}
                ></SC.Input>
                <ErrorMessage name="phone" />
              </SC.LabelBtn>

              <SC.LabelBtn htmlFor="birthday">
                <p>Birthday</p>
                <SC.DatePick
                  name="birthday"
                  id="date"
                  type="date"
                  input={true}
                  // maxDate={new Date()}
                  selected={birthday}
                  onChange={data => setBirthday(data)}
                  dateFormat="dd/MM/yyyy"
                  placeholder={'Birthday date'}
                />
                <ErrorMessage name="birthday" />
              </SC.LabelBtn>

              <SC.LabelBtn htmlFor="skype">
                <p>Skype</p>
                <SC.Input
                  type="text"
                  name="skype"
                  id="skype"
                  value={values.skype}
                  placeholder={'Skype'}
                ></SC.Input>
                <ErrorMessage name="skype" />
              </SC.LabelBtn>

              <SC.LabelBtn htmlFor="email">
                <p>Email</p>
                <SC.Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  placeholder={'Email'}
                  value={values.email}
                  onBlur={handleBlur}
                ></SC.Input>
                <ErrorMessage name="email" />
              </SC.LabelBtn>
            </SC.InputList>

            <SC.Btn type="submit"> Save changes </SC.Btn>
          </SC.Forms>
        )}
      </Formik>
    </SC.Wrapper>
  );
};

export default UserForm;
