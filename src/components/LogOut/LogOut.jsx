import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { MdLogout } from 'react-icons/md';
import * as SC from './LogOut.styled';

export const LogOut = () => {
  const dispatch = useDispatch();

  return (
    <>
      <SC.Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
        <MdLogout />
      </SC.Button>
    </>
  );
};
