import { SVG } from '../../../images';
import * as SC from './CloseSidebarBtn.styled';

export const CloseSidebarBtn = () => {
    return (
        <SC.ButtonClose type='button'>
            <SVG.CloseIcon />
        </SC.ButtonClose>
    );
};