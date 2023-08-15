import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@src/constant';
import { Loader } from '@src/components';
import { Home } from '@src/pages';

export const routeConfigs = [{ path: ROUTES.HOME, element: <Home /> }];

export const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routeConfigs.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
