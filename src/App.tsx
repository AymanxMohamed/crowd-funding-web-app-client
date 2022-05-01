import React, { Fragment, useEffect, useCallback } from "react";
import "./App.scss";
import AOS from "aos";
import Routes from "./routes/routes";
import Navbar from "./views/common/SharedComponents/Navbar";
import { login } from "./services/actions/authActions";
import { useAppDispatch } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  const clickHandler = () => {
    dispatch<any>(login("ayman", "123456"));
    // redirect the user to the home page if their is user
  };

  return (
    <Fragment>
      {/* <Navbar /> */}
      <button onClick={clickHandler}>Send Request</button>
      <Routes />
    </Fragment>
  );
}

export default App;
