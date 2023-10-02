import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '@src/constant';
import { Loader } from '@src/components';
import { Home, ProductInfo } from '@src/pages';

export const routeConfigs = [
  { path: ROUTES.HOME, element: <Home /> },
  {
    path: ROUTES.PRODUCT_DETAILS,
    element: <ProductInfo />,
  },
];

export const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routeConfigs.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
