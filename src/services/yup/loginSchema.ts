import { object, string } from "yup";

let loginSchema = object({
  username: string().required("username is Required"),
  password: string().required("password is Required"),
});

export default loginSchema;
