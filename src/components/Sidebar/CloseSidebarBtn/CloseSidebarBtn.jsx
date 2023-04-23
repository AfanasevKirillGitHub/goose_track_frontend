import { SVG } from '../../../images';
import * as SC from './CloseSidebarBtn.styled';

export const CloseSidebarBtn = () => {

    // const closeBurgerMenu = () => {
    //     setIsBurgerMenuOpen(false);
    // }

    return (
        <SC.ButtonClose type='button'>
            <SVG.CloseIcon />
        </SC.ButtonClose>
    );
};