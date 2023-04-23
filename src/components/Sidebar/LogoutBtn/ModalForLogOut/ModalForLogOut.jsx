import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../redux/auth/authOperations';
import { SVG } from '../../../../images';
import * as SC from './ModalForLogOut.styled';

export const ModalForLogOut = ({ onClose }) => {
    const dispatch = useDispatch();

    const handleCloseByOverlay = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        const handleCloseByEsc = event => {
            if (event.code === 'Escape') {
                onClose();
            }
        };
        
        window.addEventListener('keydown', handleCloseByEsc);

        return () => {
            window.removeEventListener('keydown', handleCloseByEsc);
        };
    }, [onClose]);

    return (
        <SC.Overlay onClick={handleCloseByOverlay}>
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
