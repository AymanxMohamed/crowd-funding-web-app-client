import User from "./User";

export default interface AuthState {
  user?: User;
  tokens?: { access: string; refresh: string };
}