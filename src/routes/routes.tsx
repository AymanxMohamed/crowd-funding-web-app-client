import React, { Fragment } from "react";
import { useRoutes } from 'react-router-dom';

import PublicRoutes from "./public/public.routes";
import { useSelector } from "react-redux";
import PrivateRoutes from "./private/private.routes";

const Routes: React.FC = (): JSX.Element => {
  const { isLoggedIn } = useSelector((state:any) => state.auth);

  const routes = isLoggedIn ? [...PublicRoutes, ...PrivateRoutes] : [...PublicRoutes];

  const routing = useRoutes(routes);

  return <Fragment>{routing}</Fragment>
}

export default Routes;
