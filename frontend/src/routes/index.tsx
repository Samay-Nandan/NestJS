import { ReactElement, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '@src/components';
import { Home } from '@src/pages';

interface RouteConfig {
  path: string;
  element: ReactElement;
}

const routeConfigs: RouteConfig[] = [{ path: '/', element: <Home /> }];

export const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routeConfigs.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
