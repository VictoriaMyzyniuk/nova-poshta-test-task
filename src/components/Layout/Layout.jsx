import { Outlet } from 'react-router-dom';
import { Nav } from 'components/Nav/Nav';

import { Suspense } from 'react';

export const Layout = () => {
  console.log('layout render');
  return (
    <>
      <Nav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
