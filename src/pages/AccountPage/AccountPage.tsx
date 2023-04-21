import { AccountSidebar } from '../../components/Account/AccountSidebar';

export const AccountPage = () => {
  const modalHandler = (): void => {
    console.log('working');
  };
  return (
    <>
      <AccountSidebar/>
    </>
  );
};
