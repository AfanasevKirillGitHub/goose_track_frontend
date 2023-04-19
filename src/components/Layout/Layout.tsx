import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Navigation } from '../Navigation/Navigation';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <div className="container">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
