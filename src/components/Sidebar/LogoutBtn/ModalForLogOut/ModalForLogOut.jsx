import { useDispatch } from 'react-redux';
import { logOut } from '../../../../redux/auth/authOperations';
import * as SC from './ModalForLogOut.styled';

export const ModalForLogOut = ({ onCloseModal }) => {
    const dispatch = useDispatch();

    return (
        <>
            <SC.ModalTitle>Do you really wanna fly away?</SC.ModalTitle>
            <SC.ModalList>
                <li>
                    <SC.ItemBtn type="button" onClick={() => dispatch(logOut())}>Yes</SC.ItemBtn>
                </li>
                <li>
                    <SC.ItemBtn type="button" onClick={onCloseModal}>No</SC.ItemBtn>
                </li>
            </SC.ModalList>
        </>
    );
};
