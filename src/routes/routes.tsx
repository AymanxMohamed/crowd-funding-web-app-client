import React, { Fragment } from "react";

import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from "../pages/main/MainLayout";
import MainView from "../pages/main/views/MainView";
import PageNotFoundView from "../pages/error/PageNotFoundView";
import AccountLayout from "../pages/account/AccountLayout";
import AccountDetailView from "../pages/account/views/AccountDetailView";


const Routes:React.FC = (): JSX.Element => {

  const mainRoutes = {
    path: '/',
    element: <MainLayout/>,
    children: [
      { path: '*', element: <Navigate to='/404' /> },
      { path: '/', element: <MainView /> },
      { path: '404', element: <PageNotFoundView /> },
      { path: 'account', element: <Navigate to='account' /> },
    ],
  };

  const accountRoutes = {
    path: 'account',
    element: <AccountLayout/>,
    children: [
      { path: '*', element: <Navigate to='/404' /> },
      { path: ':id', element: <AccountDetailView /> },
    ],
  };
  const routing = useRoutes([mainRoutes, accountRoutes]);

  return (
    <Fragment>
      {routing}
    </Fragment>
  )
}
export default Routes;
