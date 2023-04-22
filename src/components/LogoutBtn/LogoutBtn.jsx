import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { MdLogout } from 'react-icons/md';
import * as SC from './LogoutBtn.styled';
import { useTranslation } from 'react-i18next';

export const LogoutBtn = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <>
      <SC.Button type="button" onClick={() => dispatch(logOut())}>
        {t`Log Out`}
        <MdLogout />
      </SC.Button>
    </>
  );
};
