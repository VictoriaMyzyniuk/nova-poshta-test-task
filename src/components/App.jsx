import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

import { lazy } from 'react';

const CheckTtn = lazy(() => import('pages/CheckTtn/CheckTtn'));
const DepartmentList = lazy(() =>
  import('pages/DepartmentList/DepartmentList')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CheckTtn />} />
        <Route path="/list" element={<DepartmentList />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
