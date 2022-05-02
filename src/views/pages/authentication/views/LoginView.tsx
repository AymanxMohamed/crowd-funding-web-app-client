import React, { useState } from "react";
import { Formik, Form } from "formik";
import Input from "../components/Input";
import loginSchema from "../../../../services/yup/loginSchema";
import AuthWrapper from "../../../common/SharedComponents/ui/AuthWrapper";
import Line from "../components/Line";
import Button from "../../../common/SharedComponents/ui/Button";
import useAuthApi from "../../../../services/hooks/useAuthApi";
import { useNavigate } from "react-router-dom";
import Checkbox from "../components/CheckBox";

const LoginView: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { login } = useAuthApi();

  function loginWithGoogle() {
    console.log("clicked");
  }

  function loginWithGithub() {
    console.log("clicked");
  }

  const submitHandler = (values: any, { setSubmitting }: any) => {
    console.log("inside submit");
    login(values)
      .then((r) => {
        navigate("/");
      })
      .catch((err) => alert(err.message));
    setSubmitting(false);
  };
  return (
    <AuthWrapper>
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="h1">Sign In.</h1>
      </div>
      <div className="max-w-sm mx-auto">
        <Formik
          initialValues={{
            email: "",
            password: "",
            checked: [],
          }}
          validationSchema={loginSchema}
          onSubmit={submitHandler}
        >
          {(formik) => (
            <>
              <Form>
                <Input
                  type={"text"}
                  name={"email"}
                  label={"Email"}
                  placeholder={"Enter your Email"}
                />
                <Input
                  type={"password"}
                  name={"password"}
                  label={"Password"}
                  placeholder={"Enter your password"}
                />
                <Checkbox
                  label="Keep me signed in"
                  name={"checked"}
                  value={"Keep me signed in"}
                />
                <Button text={"Login"} color={"blue"} type={"submit"} />
              </Form>
            </>
          )}
        </Formik>
        <Line label="Or" />
        <Button
          text={"Login with Github"}
          icon={"fa-brands fa-github"}
          color={"gray"}
          onClick={loginWithGithub}
        />
        <br />
        <Button
          text={"Login with Gmail"}
          icon={"fa-brands fa-google"}
          color={"red"}
          onClick={loginWithGoogle}
        />
      </div>
    </AuthWrapper>
  );
};

export default LoginView;
