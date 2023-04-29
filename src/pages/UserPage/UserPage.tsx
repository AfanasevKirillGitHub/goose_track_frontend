import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AccountSidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { Loader } from '../../components/Loader/Loader';
import * as SC from './UserPage.styled';

export const UserPage: React.FC = () => {
  const handleBurgerMenu = () => {
    const mobileMenu = document.querySelector('#menuContainer') as HTMLElement;
    mobileMenu.classList.toggle('is-open');
  };

  return (
    <SC.FullPageWrapper>
      <SC.Wrapper className="container">
        <AccountSidebar toggleBurgerMenu={handleBurgerMenu} />

        <div>
          <Header toggleBurgerMenu={handleBurgerMenu} />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </SC.Wrapper>
    </SC.FullPageWrapper>
  );
};
