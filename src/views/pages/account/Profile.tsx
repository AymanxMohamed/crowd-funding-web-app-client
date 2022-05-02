import React from "react";
import AuthWrapper from "../../common/SharedComponents/ui/AuthWrapper";
import Breadcrumb from "../../common/SharedComponents/ui/Breadcrumb";
import Navbar from "../../common/SharedComponents/Navbar";
import UserProfileCard from "./components/UserProfileCard";
import {Field, Form, Formik} from "formik";
import userSchema from "../../../services/yup/userSchema";
import ProfileInput from "./components/ProfileInput";

const Profile: React.FC = (): JSX.Element => {
    const user = {
        firstname: "Ashraf",
        lastname: "Eldawody",
        email: "Ashraf6450@gmail.com",
        password:"",
        passwordConfirmation: "",
        phone:"01000555888"
    }
    const inputClasses = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    const labelClasses = "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    return (
        <>
            <Navbar/>
            <Breadcrumb title={"Settings"} parents={[{title: "Account", link: 'accounts'}]}></Breadcrumb>
            <main className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 m-12">
                <div className="flex flex-wrap justify-between gap-10">
                    <UserProfileCard name={"Ashraf Eldawody"} image={"https://flowbite.com/docs/images/people/profile-picture-1.jpg"}></UserProfileCard>
                    <div className="flex-grow">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal Information</h5>
                        <Formik
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                email: '',
                                phoneNumber:'',
                                password: '',
                                confirmPassword: '',
                            }}
                            validationSchema={userSchema}
                            onSubmit={values => {
                                console.log(values);
                            }}
                        >
                            {({ errors, touched }) => (
                            <Form>
                                <div className="grid xl:grid-cols-2 xl:gap-6">
                                    <ProfileInput name="firstname" label="First Name" type="text"></ProfileInput>
                                    <ProfileInput name="lastname" label="Last Name" type="text"></ProfileInput>
                                </div>
                                <ProfileInput name="email" label="Email Address" type="email"></ProfileInput>
                                <ProfileInput name="phoneNumber" label="Phone Number" type="tel"></ProfileInput>
                                <ProfileInput name="password" label="Password" type="password"></ProfileInput>
                                <ProfileInput name="confirmPassword" label="Password Confirmation" type="password"></ProfileInput>

                                <button type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                                </button>
                            </Form>
                            )}
                        </Formik>
                    </div>

                    </div>

            </main>
        </>
    );
};

export default Profile;
