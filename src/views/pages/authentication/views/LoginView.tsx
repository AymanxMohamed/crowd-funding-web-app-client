import React, { useState } from "react";
import { Formik, Form } from "formik";
import Input from "../components/Input";
import loginSchema from "../../../../services/yup/loginSchema";
import Wrapper from "../../../common/SharedComponents/ui/wrapper";
import Line from "../components/Line";
import Button from "../../../common/SharedComponents/ui/Button";
import Checkbox from "../../../common/SharedComponents/Checkbox";
import useAuthApi from "../../../../services/hooks/useAuthApi";
import { useNavigate } from "react-router-dom";

const LoginView: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { login } = useAuthApi();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  function handleRememberMeChange(value: boolean) {
    setFormData({ ...formData, remember: value });
  }

  function loginWithGoogle() {
    console.log("clicked");
  }

  function loginWithGithub() {
    console.log("clicked");
  }

  const submitHandler = (values: any, { setSubmitting }: any) => {
    login(values.username, values.password)
      .then((r) => {
        navigate("/");
      })
      .catch((err) => alert(err.message));
    setSubmitting(false);
  };
  return (
    <Wrapper>
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="h1">Sign In.</h1>
      </div>
      <div className="max-w-sm mx-auto">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={submitHandler}
        >
          {(formik) => (
            <>
              <Form>
                <Input
                  type={"text"}
                  name={"username"}
                  label={"User Name"}
                  placeholder={"Enter your username"}
                />
                <Input
                  type={"password"}
                  name={"password"}
                  label={"Password"}
                  placeholder={"Enter your password"}
                />
                <Checkbox
                  label="Keep me signed in"
                  checked={formData.remember}
                  onChange={handleRememberMeChange}
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
    </Wrapper>
  );
};

export default LoginView;
