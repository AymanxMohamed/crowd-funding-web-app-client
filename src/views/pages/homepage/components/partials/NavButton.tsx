import React from 'react';
import { NavLink} from "react-router-dom";

type Props = {
    link: string,
    text:string,
}
const NavButton: React.FC<Props> = ({ text,link }): JSX.Element => {
    const not_active = "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 border-0 hover:text-blue-700  dark:text-gray-400  dark:hover:text-white  dark:hover:text-white dark:border-gray-700";
    const is_active = "block py-2 pr-4 pl-3 text-white rounded bg-transparent text-blue-700 dark:text-white";
    return (
        <NavLink to={link}  className={({ isActive }) => (isActive ? is_active : not_active)}>
            {text}
        </NavLink>
  );
};

export default NavButton;
