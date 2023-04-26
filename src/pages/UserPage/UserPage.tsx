import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AccountSidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { Loader } from '../../components/Loader/Loader';
import * as SC from './UserPage.styled';

export const UserPage = () => {
  // const handleBurgerMenu = () => {
  //   const mobileMenu = document.querySelector('#menuContainer') as HTMLElement;
  //   mobileMenu.classList.toggle('is-open');
  // };

  return (
    <SC.Wrapper>
      <AccountSidebar />
      {/* <AccountSidebar onToggleBurgerMenu={handleBurgerMenu}/> */}
      <div>
        <Header />
        {/* <Header onToggleBurgerMenu={handleBurgerMenu}/> */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </SC.Wrapper>
  );
};
