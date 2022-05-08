export default interface Token {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
}
