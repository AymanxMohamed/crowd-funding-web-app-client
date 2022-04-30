import React, {useState} from 'react';
import Header from "../homepage/components/Header";
import {Link} from "react-router-dom";
import TextInput from "../../shared-components/TextInput";
import Checkbox from "../../shared-components/Checkbox";
import ButtonIcon from "../../shared-components/ButtonIcon";

const Login: React.FC = (): JSX.Element => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        remember:false
    });
    function handleEmailChange(value:string) {
        setFormData({...formData,email: value})
    }
    function handlePasswordChange(value:string) {
        setFormData({...formData,password: value})
    }
    function handleRememberMeChange(value:boolean) {
        setFormData({...formData,remember: value})
    }

  return (
      <div className="flex flex-col min-h-screen overflow-hidden">
          {/*  Site header */}
          <Header />
          {/*  Page content */}
          <main className="flex-grow">
              <section className="bg-gradient-to-b from-gray-100 to-white">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6">
                      <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                          {/* Page header */}
                          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                              <h1 className="h1">Welcome back. We exist to make entrepreneurism easier.</h1>
                          </div>

                          {/* Form */}
                          <div className="max-w-sm mx-auto">
                              <form>
                                  <TextInput label="Email" value={formData.email} name="email" placeholder="Enter Your Email" type="email" onChange={handleEmailChange}></TextInput>
                                  <TextInput label="Password" value={formData.password} name="email" placeholder="Enter Your Password" type="password" onChange={handlePasswordChange}></TextInput>
                                  <Checkbox label="Keep me signed in" checked={formData.remember} onChange={handleRememberMeChange}></Checkbox>
                                  <div className="flex flex-wrap -mx-3 mt-6">
                                      <div className="w-full px-3">
                                          <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign in</button>
                                      </div>
                                  </div>
                              </form>
                              <div className="flex items-center my-6">
                                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                                  <div className="text-gray-600 italic">Or</div>
                                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                              </div>
                                  <ButtonIcon text={"Login with Github"} icon={"fa-brands fa-github"} color={"gray"}/>
                                <br/>
                                  <ButtonIcon text={"Login with Gmail"} icon={"fa-brands fa-google"} color={"red"}/>
                              <div className="text-gray-600 text-center mt-6">
                                  Don’t you have an account? <Link to="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
                              </div>
                          </div>

                      </div>
                  </div>
              </section>

          </main>

      </div>
  );
};

export default Login;
