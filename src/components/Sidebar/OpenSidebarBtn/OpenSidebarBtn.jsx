import { useState } from 'react';
import { AccountSidebar } from '../Sidebar';
import { SVG } from '../../../images';
import * as SC from './OpenSidebarBtn.styled';

export const OpenSidebarBtn = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const openBurgerMenu = () => {
        setIsBurgerMenuOpen(true);
        // MenuContainer.classList.toggle('is-open');
    }

    const closeBurgerMenu = () => {
        setIsBurgerMenuOpen(false);
    }
    
    return (
        <>
            <SC.ButtonOpen type='button' onClick={()=>openBurgerMenu()}>
                <SVG.BurgerMenu />
            </SC.ButtonOpen>

            {isBurgerMenuOpen && <AccountSidebar onClose={closeBurgerMenu} />}
        </>
    );
};