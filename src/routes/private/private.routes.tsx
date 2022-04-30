import { RouteObject } from 'react-router-dom';
import accountRoute from "./account-route";
import projectRoute from "./project-route";

const PrivateRoutes: RouteObject[] = [
  accountRoute,
  projectRoute
];

export default PrivateRoutes;
