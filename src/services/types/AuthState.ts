import User from "./User";

export default interface AuthState {
  authenticated: boolean;
  user?: User;
  tokens?: { access: string; refresh: string };
}