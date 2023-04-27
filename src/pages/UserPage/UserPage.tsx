import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AccountSidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { Loader } from '../../components/Loader/Loader';
import * as SC from './UserPage.styled';

export const UserPage: React.FC = () => {
  return (
    <SC.Wrapper className="container">
      <AccountSidebar />
      <div>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </SC.Wrapper>
  );
};
