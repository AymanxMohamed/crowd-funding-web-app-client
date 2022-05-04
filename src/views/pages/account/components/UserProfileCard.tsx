import React from 'react';

interface profileData{
  name:string,
  image:string,
}
const UserProfileCard: React.FC<profileData> = ({name,image}): JSX.Element => {
  return (<>
    <div
        className="max-w-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-16">

      <div className="flex flex-col items-center pb-10">
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={image}
             alt={name +  " image"}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>

      </div>
    </div>
  </>);
};

export default UserProfileCard;
