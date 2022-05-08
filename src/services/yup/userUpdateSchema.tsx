import {mixed, object, ref, string} from "yup";

let userUpdateSchema = object({
  first_name: string()
  .min(3, `First name must be at least 3 chars`)
  .max(15, `First name Must be 15 chars or less`)
  .required('FirstName is Required'),
  last_name: string()
  .min(3, `Last name must be at least 3 chars`)
  .max(20, `Last name Must be 20 chars or less`)
  .required('LastName is Required'),
  email: string()
  .email(`Please Enter a valid Email`)
  .required('Email is Required'),
  password: string()
      .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  confirmPassword: string()
  .oneOf([ref('password'), null], `Password doesn't match`),

  phone_number: string()
  .matches(/^01[0125][0-9]{8}$/, 'Please Enter a valid Phone Number')
  .optional(),
});

export default userUpdateSchema;
