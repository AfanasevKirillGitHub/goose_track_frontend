import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

export const MyInfo = () => {
    const dispatch = useDispatch();

    return (
        <>
        <p>информация о пользователе</p>
        <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
        </>
    )
}