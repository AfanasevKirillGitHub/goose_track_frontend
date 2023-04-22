import { Outlet } from 'react-router-dom';
import { AccountSidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { Wrapper } from './UserPage.styled';

export const UserPage = () => {
  return (
    <Wrapper>
      <AccountSidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </Wrapper>
  );
};
