import React, {useState, useEffect} from "react";
import {useAppDispatch} from "../../../../app/hooks";
import useAuthSlice from "../../../../services/hooks/useAuthSlice";
import {logout} from "../../../../services/reducers/auth";
import BlackLink from "../../../common/SharedComponents/ui/BlackLink";
import Logo from "../../../common/SharedComponents/ui/Logo";
import WhiteLink from "../../../common/SharedComponents/ui/WhiteLink";

const Header: React.FC = (): JSX.Element => {
    const [top, setTop] = useState(true);
    const dispatch = useAppDispatch();
    const {user} = useAuthSlice();
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
        <>
            <header
                className={`w-full fixed z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
                    !top && "bg-white backdrop-blur-sm shadow-lg"
                }`}
            >
                <div
                    className="flex items-center justify-between h-16 md:h-20 max-w-6xl mx-auto px-5 sm:px-6 max-w-6xl mx-auto px-5 sm:px-6">
                    <Logo/>
                    {/* Site navigation */}
                    <nav className="flex flex-grow">
                        <ul className="flex flex-grow justify-end flex-wrap items-center">
                            {user ? (
                                <>
                                    <WhiteLink
                                        label={"Profile"}
                                        to={"/account/profile"}
                                    />
                                    <BlackLink
                                        label={"Logout"}
                                        to={"/auth/login"}
                                        onClick={logoutHandler}
                                    />
                                </>
                            ) : (
                                <>
                                    <WhiteLink to="/auth/login" label="Sign in"/>
                                    <BlackLink label={"Sign Up"} to={"/auth/register"}/>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default Header;
