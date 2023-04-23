import { useDispatch } from 'react-redux';
import { logOut } from '../../../../redux/auth/authOperations';
import { SVG } from '../../../../images';
import * as SC from './ModalForLogOut.styled';

export const ModalForLogOut = ({ onClose }) => {
    const dispatch = useDispatch();

    return (
        <SC.Overlay>
            <SC.Inner>
                <SC.CloseBtn type="button" onClick={onClose}>
                    <SVG.CloseIcon />
                </SC.CloseBtn>
                <SC.ModalTitle>Do you really wanna fly away?</SC.ModalTitle>
                <SC.ModalList>
                    <li>
                        <SC.ItemBtn type="button" onClick={() => dispatch(logOut())}>Yes</SC.ItemBtn>
                    </li>
                    <li>
                        <SC.ItemBtn type="button" onClick={onClose}>No</SC.ItemBtn>
                    </li>
                </SC.ModalList>
            </SC.Inner>
        </SC.Overlay>
    );
};
