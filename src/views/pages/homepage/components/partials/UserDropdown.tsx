import React from 'react';
import {MEDIA_URL} from "../../../../../app/config";
import useAuthSlice from "../../../../../services/hooks/useAuthSlice";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../../../../app/hooks";
import {logout} from "../../../../../services/reducers/auth";
import imageLink from "../../../../common/utils/imageLink";

const UserDropdown: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const {user} = useAuthSlice();
    const logoutHandler = () => {
        dispatch(logout());
    };
    const linkClasses = "block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white";
    return (

            <div className="flex justify-center">
                <div>
                    <div className="dropdown">
                        <button
                            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img className="w-8 h-8 rounded-full" src={imageLink(user?.profile_picture)}
                                 alt="user"/>
                        </button>
                        <div className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                             aria-labelledby="dropdownMenuButton2">
                            <div className="py-3 px-4">
                                <span className="block text-sm text-gray-900 dark:text-white">{user?.first_name + " " + user?.last_name}</span>
                                <span
                                    className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user?.email||"" }</span>
                            </div>
                            <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <Link to="/my-projects" className={linkClasses}>Projects</Link>
                                    <Link to="/donations" className={linkClasses}>Donations</Link>
                                    <Link to="/profile/settings" className={linkClasses}>Settings</Link>
                                    <Link to="/auth/login" className={linkClasses} onClick={logoutHandler}>Sign Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


  );
};

export default UserDropdown;
