export default interface Token {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profilePicture: string;
}
