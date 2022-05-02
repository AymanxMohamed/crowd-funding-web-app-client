export default interface User {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_picture: string;
}