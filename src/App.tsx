import React, { Fragment, useEffect } from "react";
import Routes from "./routes/routes";
import { Windmill } from "@windmill/react-ui";
import AOS from "aos";

import { useAppDispatch } from "./app/hooks";
// import { login } from "./services/actions/authActions";
import Navbar from "./views/common/SharedComponents/Navbar";

import "./App.scss";
import useProjectsApi from "./services/hooks/useProjectsApi";
import useAuthApi from "./services/hooks/useAuthApi";

function App() {
  const { getProjects } = useProjectsApi();
  const {login } = useAuthApi();
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
    // dispatch<any>(login("ayman", "123456"));
    login("ayman", "123456");
  };

  const clickHandler2 = () => {
    getProjects()
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Navbar />
      <button onClick={clickHandler}>Login Token</button>
      <button onClick={clickHandler2}>Projects</button>
      <Windmill>
        <Routes />
      </Windmill>
    </>
  );
}

export default App;
