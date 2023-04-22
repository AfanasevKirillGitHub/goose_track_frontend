import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AccountSidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { Wrapper } from './UserPage.styled';
import { Loader } from '../../components/Loader/Loader';

export const UserPage = () => {
  return (
    <Wrapper>
      <AccountSidebar />
      <div>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Wrapper>
  );
};
