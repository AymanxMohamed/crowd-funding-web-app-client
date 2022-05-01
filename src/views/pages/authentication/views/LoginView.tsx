import React from "react";
import { Formik, Form } from "formik";
import Input from "../components/Input";
import loginSchema from "../../../../services/yup/loginSchema";

const LoginView: React.FC = (): JSX.Element => {
  const submitHandler = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <div>
      <Formik
        initialValues={{
          firstname: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={submitHandler}
      >
        {(formik) => (
          <>
            <Form>
              <Input type={"text"} name={"username"} label={"User Name"} />
              <Input type={"password"} name={"password"} label={"Password"} />
              <div className="form-group row m-5">
                <div className="offset-md-2 col-md-10">
                  <button type={"submit"} className={"btn btn-dark me-3"}>
                    Login
                  </button>
                  <button type={"reset"} className={"btn btn-danger ms-3"}>
                    Reset
                  </button>
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
