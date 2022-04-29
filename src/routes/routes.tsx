import React, { Fragment } from "react";
import { useRoutes } from 'react-router-dom';

import mainRoute from "./main-route";
import accountRoute from "./account-route";

const Routes: React.FC = (): JSX.Element => {

  const routing = useRoutes([mainRoute, accountRoute]);

  return <Fragment>{routing}</Fragment>
}

export default Routes;
