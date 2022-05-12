import React from "react";
import useAuthSlice from "../../../../services/hooks/useAuthSlice";
import Logo from "../../../common/SharedComponents/ui/Logo";
import {APP_NAME, MEDIA_URL} from "../../../../app/config";
import {Link} from "react-router-dom";
import NavButton from "./partials/NavButton";
import NavbarSearch from "./partials/NavbarSearch";
import UserDropdown from "./partials/UserDropdown";

const Header: React.FC = (): JSX.Element => {
    const {user} = useAuthSlice();

    return (
        <>
          <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800  navbar-expand-lg">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <button data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation"  type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <i className="fa-solid fa-bars fa-xl"></i>
              </button>

              <Link to="/" className="flex items-center">
                <Logo/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{APP_NAME}</span>
              </Link>
                <div className="flex items-center lg:order-2">
                {user && <UserDropdown/>}
                </div>
              <div className="collapse navbar-collapse justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                   id="navbarSupportedContent">
                <ul className="flex flex-col justify-evenly items-center mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium">
                  <li><NavButton text={"Home"} link="/"/></li>
                  <li><NavButton text={"Projects"} link="/projects"/></li>
                  <li><NavButton text={"Latest"} link="/latest"/></li>
                    <li className="lg:inline-flex md:hidden"><NavbarSearch/></li>
                {!user && <li><NavButton link="/auth/login" text="Sign in"/></li>}
                {!user && <li><NavButton link="/auth/register" text="Sign Up"/></li>}

                </ul>
              </div>

            </div>
          </nav>
        </>
    );
};

export default Header;
