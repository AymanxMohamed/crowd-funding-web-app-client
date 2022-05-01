import React, { Fragment, useEffect, useCallback } from "react";
import Routes from "./routes/routes";
import {Windmill} from "@windmill/react-ui";
import AOS from "aos";

import { useAppDispatch } from "./app/hooks";
import { login } from "./services/actions/authActions";
import Navbar from "./views/common/SharedComponents/Navbar";

import './App.scss';

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
      <Windmill>
        <Routes/>
      </Windmill>
    </Fragment>
  );
}

export default App;
