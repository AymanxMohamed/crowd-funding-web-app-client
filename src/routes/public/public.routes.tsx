import { RouteObject } from 'react-router-dom';
import mainRoute from "./main-route";
import authRoute from "./auth-route";

const PublicRoutes: RouteObject[] = [
  mainRoute,
  authRoute
];

export default PublicRoutes;
