import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { FindPetNan } from '../../components/FindPetNan/FindPetNan';

export const FindPetPage = () => {
  return (
    <>
      <h1>FindPetPage</h1>
      <FindPetNan />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
