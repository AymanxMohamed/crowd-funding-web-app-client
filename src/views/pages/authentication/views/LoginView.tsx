import React from 'react';
import { Formik, Form } from 'formik';
import { object, string, ref } from 'yup';
import Input from "../components/Input";

const LoginView: React.FC = (): JSX.Element => {
  let userSchema = object({
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
    .min(6, `Password Should be at least 6 chars`)
    .matches(/^/g)
    .required('Password is Required'),
    confirmPassword: string()
    .oneOf([ref('password'), null], `Password doesn't match`)
    .required('Confirm Password is Required'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={userSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <>
            <Form>
              <Input type={'firstname'} name={'firstname'} label={'First Name'}/>
              <Input type={'lastname'} name={'lastname'} label={'Last Name'}/>
              <Input type={'email'} name={'email'} label={'Email'}/>
              <Input type={'password'} name={'password'} label={'Password'}/>
              <Input type={'password'} name={'confirmPassword'} label={'Confirm Password'}/>
              <div className="form-group row m-5">
                <div className="offset-md-2 col-md-10">
                    <button type={'submit'} className={'btn btn-dark me-3'}>Register</button>
                    <button type={'reset'} className={'btn btn-danger ms-3'}>Reset</button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default LoginView;
