import React from 'react';
import { Formik, Form } from 'formik';
import Input from "../components/Input";
import userSchema from "../../../../services/yup/userSchema";

const RegisterView: React.FC = (): JSX.Element => {
  const submitHandler = (values: any, { setSubmitting }:any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }
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
        onSubmit={submitHandler}
      >
        {(formik) => (
          <>
            <Form>
              <Input type={'text'} name={'firstname'} label={'First Name'}/>
              <Input type={'text'} name={'lastname'} label={'Last Name'}/>
              <Input type={'email'} name={'email'} label={'Email'}/>
              <Input type={'password'} name={'password'} label={'Password'}/>
              <Input type={'password'} name={'confirmPassword'} label={'Confirm Password'}/>
              <Input type={'text'} name={'phoneNumber'} label={'Phone Number'}/>
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

export default RegisterView;
