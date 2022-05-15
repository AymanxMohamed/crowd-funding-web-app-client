import React, {useState} from "react";
import Breadcrumb from "../../common/SharedComponents/ui/Breadcrumb";
import UserProfileCard from "./components/UserProfileCard";
import {Form, Formik} from "formik";
import userUpdateSchema from "../../../services/yup/userUpdateSchema";
import ProfileInput from "./components/ProfileInput";
import {useAppSelector} from "../../../app/hooks";
import ImageInput from "../authentication/components/ImageInput";
import useAuthApi from "../../../services/hooks/useAuthApi";
import {useNavigate} from "react-router-dom";
import {MEDIA_URL} from "../../../app/config";
import {toast} from "react-toastify";
import RemoveAccountModal from "./components/RemoveAccountModal";

const Profile: React.FC = (): JSX.Element => {
    const [showModal,setShowModal] = useState(false)
    const user = useAppSelector(state => state.auth.user)
    const {update} = useAuthApi();
    const navigate = useNavigate();
    const submitHandler = (values:any) => {
        update(values).then(()=>{
            toast("Your Profile Has been updated successfully",{type:"success"})
        }).catch(()=>{
            toast("Failed to updated your profile",{type:"error"})
        })
    };
    return (
        <>
            <RemoveAccountModal isOpen={showModal} onClose={()=>setShowModal(false)}/>
            <Breadcrumb title={"Settings"}></Breadcrumb>
            <main className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 m-12">
                <div className="flex flex-wrap justify-between gap-10">
                    <UserProfileCard name={user?.first_name + " " + user?.last_name}
                                     image={MEDIA_URL + user?.profile_picture}></UserProfileCard>
                    <div className="flex-grow">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal
                            Information</h5>
                        <Formik
                            initialValues={{
                                first_name: user?.first_name || '',
                                last_name: user?.last_name || '',
                                email: user?.email || '',
                                phone_number: user?.phone_number || '',
                                birth_date: user?.birth_date || '',
                                facebook_link: user?.facebook_link || '',
                                country: user?.country || '',
                                password: '',
                                confirmPassword: '',
                                profile_picture: '',
                            }}
                            validationSchema={userUpdateSchema}
                            onSubmit={submitHandler}
                        >
                            {(formik) => (
                                <Form>
                                    <div className="grid xl:grid-cols-2 xl:gap-6">
                                        <ProfileInput name="first_name" label="First Name" type="text"/>
                                        <ProfileInput name="last_name" label="Last Name" type="text"/>
                                    </div>
                                    <ProfileInput name="phone_number" label="Phone Number" type="tel"/>
                                    <ProfileInput name="password" label="Password" type="password"/>
                                    <ProfileInput name="confirmPassword" label="Password Confirmation" type="password"/>
                                    <div className="grid xl:grid-cols-2 xl:gap-6">
                                        <ProfileInput name="country" label="Country" type="text"/>
                                        <ProfileInput name="birth_date" label="Birth Date" type="date"/>
                                    </div>
                                    <ProfileInput name="facebook_link" label="Facebook Profile Link" type="text"/>
                                    <ImageInput name="picture" label="Profile Picture" type="file"
                                                onChange={(event: any) =>
                                                    formik.setFieldValue(
                                                        "profile_picture",
                                                        event.target.files[0]
                                                    )
                                                }
                                    ></ImageInput>
                                    <div className="flex justify-between">
                                        <button type="submit"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                                        </button>
                                        <button onClick={(e)=>{
                                            e.preventDefault()
                                            setShowModal(true)
                                        }} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                            Remove My Account
                                        </button>
                                    </div>
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
