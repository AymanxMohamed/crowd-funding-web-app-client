import React, { Fragment } from "react";
import { useRoutes } from 'react-router-dom';

import mainRoutes from "./main-routes";
import accountRoutes from "./account-routes";

const Routes: React.FC = (): JSX.Element => {

  const routing = useRoutes([mainRoutes, accountRoutes]);

  return <Fragment>{routing}</Fragment>
}
export default Routes;
