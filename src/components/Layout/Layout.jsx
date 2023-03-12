import { Outlet } from 'react-router-dom';
import { Nav } from 'components/Nav/Nav';
import Container from 'components/Container/Container';

import { Suspense } from 'react';

export const Layout = () => {
  return (
    <main>
      <Container>
        <Nav />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};
