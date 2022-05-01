import { object, string } from "yup";

let loginSchema = object({
  username: string().required("FirstName is Required"),
  password: string().required("FirstName is Required"),
});

export default loginSchema;
