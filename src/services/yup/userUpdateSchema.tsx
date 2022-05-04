import {mixed, object, ref, string} from "yup";

let userUpdateSchema = object({
  firstname: string()
  .min(3, `First name must be at least 3 chars`)
  .max(15, `First name Must be 15 chars or less`)
  .required('FirstName is Required'),
  lastname: string()
  .min(3, `Last name must be at least 3 chars`)
  .max(20, `Last name Must be 20 chars or less`)
  .required('LastName is Required'),
  email: string()
  .email(`Please Enter a valid Email`)
  .required('Email is Required'),
  password: string()
  .min(8, `Password Should be at least 8 chars`)
  .matches(
    /(?=.*[A-Z].*[A-Z])/g,
    'Password must contain at least two uppercase Letters'
  )
  .matches(
    /(?=.*[!@#$&*])/g,
    'Password must contain at least one Special case letter'
  )
  .matches(
    /(?=.*[0-9].*[0-9])/g,
    'Password must contain at least two digits'
  )
  .matches(
    /(?=.*[a-z].*[a-z].*[a-z])/g,
    'Password must contain at least three lowercase letters'
  )
  .optional(),
  confirmPassword: string()
  .oneOf([ref('password'), null], `Password doesn't match`)
  .required('Confirm Password is Required'),
  phoneNumber: string()
  .matches(/^01[0125][0-9]{8}$/, 'Please Enter a valid Phone Number')
  .optional(),
  profilePicture: mixed()
      .nullable()
      .notRequired()
      .test("FILE_SIZE", "Uploaded file is too big.",
          value => !value || (value && value.size > console.log(value)))
      .test("FILE_FORMAT", "Uploaded file has unsupported format.",
          value => !value || (value && ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'].includes(value.type)))
});

export default userUpdateSchema;
