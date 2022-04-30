import { RouteObject } from 'react-router-dom';
import mainRoute from "./main-route";
import authRoute from "./auth-route";
import accountRoute from "../private/account-route";

const PublicRoutes: RouteObject[] = [
  mainRoute,
  accountRoute,
  authRoute
];

export default PublicRoutes;
