import React from 'react';
import {Field, useField} from "formik";
import newid from "../../../common/utils/newid";

interface profileData{
  name:string,
  type:string,
  label:string,
}
const ProfileInput: React.FC<profileData> = ({name,type, label,...rest}): JSX.Element => {
  const [, meta] = useField(name);
  const inputClasses = "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  const labelClasses = "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  const randomID = newid("profile_input")
  return (<>
    <div className="relative z-0 w-full mb-6 group">
      <Field type={type} name={name}  id={randomID} className={inputClasses + ((meta.error && meta.touched) ? " border border-red-500 text-red-900":"")} {...rest}/>
      <label htmlFor={randomID} className={labelClasses + ((meta.error && meta.touched) ? " text-red-700 dark:text-red-500":"")}>{label}</label>
      {meta.error && meta.touched ? (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oops!</span> {meta.error}</p>
      ) : null}
    </div>
  </>);
};

export default ProfileInput;
