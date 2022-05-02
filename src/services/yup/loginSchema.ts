import { object, string } from "yup";

let loginSchema = object({
  email: string()
    .email(`Please Enter a valid Email`)
    .required("Email is Required"),
  password: string().required("password is Required"),
});

export default loginSchema;
