import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../common/SharedComponents/ui/wrapper";
import TextInput from "../../common/SharedComponents/TextInput";
import Checkbox from "../../common/SharedComponents/Checkbox";
import ButtonIcon from "../../common/SharedComponents/ButtonIcon";

const Login: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  function handleEmailChange(value: string) {
    setFormData({ ...formData, email: value });
  }

  function handlePasswordChange(value: string) {
    setFormData({ ...formData, password: value });
  }

  function handleRememberMeChange(value: boolean) {
    setFormData({ ...formData, remember: value });
  }

  function login() {
    console.log("clicked");
  }

  function loginWithGoogle() {
    console.log("clicked");
  }

  function loginWithGithub() {
    console.log("clicked");
  }

  return (
    <Wrapper>
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="h1">Sign In.</h1>
      </div>
      <div className="max-w-sm mx-auto">
        <form>
          <TextInput
            label="Email"
            value={formData.email}
            name="email"
            placeholder="Enter Your Email"
            type="email"
            onChange={handleEmailChange}
          />
          <TextInput
            label="Password"
            value={formData.password}
            name="email"
            placeholder="Enter Your Password"
            type="password"
            onChange={handlePasswordChange}
          />
          <Checkbox
            label="Keep me signed in"
            checked={formData.remember}
            onChange={handleRememberMeChange}
          />
          <ButtonIcon text={"Login"} color={"blue"} onClick={login} />
        </form>
        <div className="flex items-center my-6">
          <div
            className="border-t border-gray-300 flex-grow mr-3"
            aria-hidden="true"
          />
          <div className="text-gray-600 italic">Or</div>
          <div
            className="border-t border-gray-300 flex-grow ml-3"
            aria-hidden="true"
          />
        </div>
        <ButtonIcon
          text={"Login with Github"}
          icon={"fa-brands fa-github"}
          color={"gray"}
          onClick={loginWithGithub}
        />
        <br />
        <ButtonIcon
          text={"Login with Gmail"}
          icon={"fa-brands fa-google"}
          color={"red"}
          onClick={loginWithGoogle}
        />
        <div className="text-gray-600 text-center mt-6">
          Don’t you have an account?{" "}
          <Link
            to="/account/register"
            className="text-blue-600 hover:underline transition duration-150 ease-in-out"
          >
            Sign up
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
