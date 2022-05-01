import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import useAuth from "../../../services/hooks/useAuthSlice";
import { logout } from "../../../services/reducers/auth";
import BlackLink from "./ui/BlackLink";
import Logo from "./ui/Logo";
import WhiteLink from "./ui/WhiteLink";

const Navbar: React.FC = (): JSX.Element => {
  const [top, setTop] = useState(true);
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const logoutHandler = () => {
    dispatch(logout());
  };
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between h-16 md:h-20 max-w-6xl mx-auto px-5 sm:px-6 max-w-6xl mx-auto px-5 sm:px-6">
        <Logo />
        {/* Site navigation */}
        <nav className="flex flex-grow">
          <ul className="flex flex-grow justify-end flex-wrap items-center">
            {user ? (
              <BlackLink
                label={"Ayman Logout"}
                to={"/auth/register"}
                onClick={logoutHandler}
              />
            ) : (
              <>
                <WhiteLink to="/account/login" label="Sign in" />
                <WhiteLink to="/auth/login" label="Ayman Sign in" />
                <BlackLink label={"Sign Up"} to={"/account/register"} />
                <BlackLink label={"Ay Sign Up"} to={"/auth/register"} />
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
