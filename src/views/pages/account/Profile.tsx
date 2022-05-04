import React, {useReducer} from "react";
import Breadcrumb from "../../common/SharedComponents/ui/Breadcrumb";
import Navbar from "../../common/SharedComponents/Navbar";
import UserProfileCard from "./components/UserProfileCard";
import {Field, Form, Formik} from "formik";
import userUpdateSchema from "../../../services/yup/userUpdateSchema";
import ProfileInput from "./components/ProfileInput";
import {useAppSelector} from "../../../app/hooks";
import ImageInput from "../authentication/components/ImageInput";

const Profile: React.FC = (): JSX.Element => {
    const user = useAppSelector(state => state.auth.user)
    return (
        <>
            <Breadcrumb title={"Settings"}></Breadcrumb>
            <main className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 m-12">
                <div className="flex flex-wrap justify-between gap-10">
                    <UserProfileCard name={user?.firstName + " " + user?.lastName} image={user?.profilePicture||''}></UserProfileCard>
                    <div className="flex-grow">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal Information</h5>
                        <Formik
                            initialValues={{
                                firstname: user?.firstName || '',
                                lastname: user?.lastName || '',
                                email: user?.email || '',
                                phoneNumber:user?.phoneNumber || '',
                                password: '',
                                confirmPassword: '',
                                profilePicture:''
                            }}
                            validationSchema={userUpdateSchema}
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
                                <ImageInput name="profilePicture" label="Profile Picture" type="file"></ImageInput>

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
