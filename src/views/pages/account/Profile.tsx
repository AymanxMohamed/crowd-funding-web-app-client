import React from "react";
import Breadcrumb from "../../common/SharedComponents/ui/Breadcrumb";
import UserProfileCard from "./components/UserProfileCard";
import { Form, Formik} from "formik";
import userUpdateSchema from "../../../services/yup/userUpdateSchema";
import ProfileInput from "./components/ProfileInput";
import {useAppSelector} from "../../../app/hooks";
import ImageInput from "../authentication/components/ImageInput";
import useAuthApi from "../../../services/hooks/useAuthApi";
import {useNavigate} from "react-router-dom";

const Profile: React.FC = (): JSX.Element => {
    const user = useAppSelector(state => state.auth.user)
    const { update } = useAuthApi();
    const navigate = useNavigate();
    const submitHandler = async (values: any, { setSubmitting }: any) => {
        console.log("Dd")
        try {
            let response = await update(values);
            console.log(response);
            navigate("/home");
        } catch (err: any) {
            console.log(err)
        }
        setSubmitting(false);
    };
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
                                first_name: user?.firstName || '',
                                last_name: user?.lastName || '',
                                email: user?.email || '',
                                phone_number:user?.phoneNumber || '',
                                password: 'edwfv22gEEG@@',
                                confirmPassword: 'edwfv22gEEG@@',
                                profile_picture:'',
                            }}
                            validationSchema={userUpdateSchema}
                            onSubmit={submitHandler}
                        >
                            {({ errors, touched }) => (
                            <Form>
                                <div className="grid xl:grid-cols-2 xl:gap-6">
                                    <ProfileInput name="first_name" label="First Name" type="text"></ProfileInput>
                                    <ProfileInput name="last_name" label="Last Name" type="text"></ProfileInput>
                                </div>
                                <ProfileInput name="email" label="Email Address" type="email"></ProfileInput>
                                <ProfileInput name="phone_number" label="Phone Number" type="tel"></ProfileInput>
                                <ProfileInput name="password" label="Password" type="password"></ProfileInput>
                                <ProfileInput name="confirmPassword" label="Password Confirmation" type="password"></ProfileInput>
                                <ImageInput name="profile_picture" label="Profile Picture" type="file"></ImageInput>

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
