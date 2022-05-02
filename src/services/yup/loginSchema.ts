import { object, string } from "yup";

let loginSchema = object({
  email: string().required("Email Field is Required"),
  password: string().required("password is Required"),
});

export default loginSchema;
