import React from "react";
import { Formik, Form } from "formik";
import Input from "../components/Input";
import Line from "../components/Line";
import Button from "../../../common/SharedComponents/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import RegisterSchema from "../../../../services/yup/RegisterSchema";
import useAuthApi from "../../../../services/hooks/useAuthApi";
import ImageInput from "../components/ImageInput";
import { toast } from "react-toastify";

const RegisterView: React.FC = (): JSX.Element => {
  const { register } = useAuthApi();
  const navigate = useNavigate();

  const submitHandler = async (values: any, { setSubmitting }: any) => {
    try {
      // await register(values);
      toast.promise(register(values), {
        pending: "Creating Account in prosess",
        success: "Account Created Successfully",
        error: "Error ocuured",
      });
      //navigate("/auth/login");
    } catch (err: any) {
      for (let key in err) {
        toast.error(err[key][0]);
      }
    }
    setSubmitting(false);
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Sign Up!.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <Formik
                  initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    phone_number: "",
                    profile_picture: "",
                  }}
                  validationSchema={RegisterSchema}
                  onSubmit={submitHandler}
                >
                  {(formik) => (
                    <>
                      <Form>
                        <Input
                          type={"text"}
                          id={"first_name"}
                          placeholder={"Enter Your first name"}
                          name={"first_name"}
                          label={"First Name"}
                        />
                        <Input
                          type={"text"}
                          id={"last_name"}
                          placeholder={"Enter Your Last Name"}
                          name={"last_name"}
                          label={"Last Name"}
                        />
                        <Input
                          id={"email"}
                          type={"email"}
                          name={"email"}
                          label={"Email"}
                          placeholder={"Enter Your Email"}
                        />
                        <Input
                          id={"pas"}
                          type={"password"}
                          placeholder={"Enter Your Password"}
                          name={"password"}
                          label={"Password"}
                        />
                        <Input
                          id={"pas_conf"}
                          type={"password"}
                          placeholder={"Enter Your Password Confirmation"}
                          name={"confirmPassword"}
                          label={"Confirm Password"}
                        />
                        <Input
                          id={"phone"}
                          type={"text"}
                          name={"phone_number"}
                          placeholder={"Enter Your Phone Number"}
                          label={"Phone Number"}
                        />
                        <ImageInput
                          id={"img"}
                          type={"file"}
                          name={"profile_picture"}
                          label={"Profile Picture"}
                          onChange={(event: any) =>
                            formik.setFieldValue(
                              "profile_picture",
                              event.target.files[0]
                            )
                          }
                        />
                        <Button
                          text={"Sign up"}
                          color={"blue"}
                          type={"submit"}
                        />
                      </Form>
                    </>
                  )}
                </Formik>
                <div className="text-sm text-gray-500 text-center mt-3">
                  By creating an account, you agree to the{" "}
                  <a className="underline" href="#0">
                    terms & conditions
                  </a>
                  , and our{" "}
                  <a className="underline" href="#0">
                    privacy policy
                  </a>
                  .
                </div>
                <Line label="Or" />
                <Button
                  text={"Continue with GitHub"}
                  icon={"fa-brands fa-github"}
                  color={"gray"}
                />
                <br />
                <Button
                  text={"Continue with Google"}
                  icon={"fa-brands fa-google"}
                  color={"red"}
                />
                <div className="text-gray-600 text-center mt-6">
                  Already a Member?
                  <Link
                    to="/auth/login"
                    className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegisterView;
