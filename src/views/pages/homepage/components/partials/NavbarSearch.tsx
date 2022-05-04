import React from 'react';


const NavbarSearch: React.FC = (): JSX.Element => {
    return (
        <div className="hidden relative md:block">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text"
                   className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Search..."/>
        </div>
  );
};

export default NavbarSearch;
