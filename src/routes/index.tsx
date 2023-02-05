import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
const Discovery = lazy(() => import('../pages/Discovery'));
const Videos = lazy(() => import('../pages/Videos'));
import ROUTES from '../constants/routes';

const Router = () => {
  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: ROUTES.discovery, element: <Discovery /> },
    { path: ROUTES.videos, element: <Videos /> },
    {
      path: 'ROUTES.root',
      element: <Discovery />
      // Nested routes use a children property, which is also
      // the same as <Route>
      // children: [
      //   { path: ':id', element: <Invoice /> },
      //   { path: 'sent', element: <SentInvoices /> }
      // ]
    }
    // Not found routes work as you'd expect
    // { path: '*', element: <NotFound /> }
  ]);

  return element;
};
export default Router;
