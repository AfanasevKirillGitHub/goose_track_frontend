import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { SVG } from '../../images';
import * as SC from './LogoutBtn.styled';

export const LogoutBtn = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <>
      <SC.Button type="button" onClick={() => dispatch(logOut())}>
        {t`Log Out`}
        <SVG.LogOutIcon />
      </SC.Button>
    </>
  );
};
