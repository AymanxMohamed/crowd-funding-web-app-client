import React, { Fragment, useEffect } from "react";
import "./App.scss";
import AOS from "aos";
import { getUserTokens } from "./services/api/authentication";
import Routes from "./routes/routes";
import Navbar from "./views/common/SharedComponents/Navbar";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  const clickHandler = () => {
    getUserTokens("ayman", "1234561")
      .then(({ access, refresh }) => {
        console.log(access, refresh);
      })
      .catch((e) => console.log(e));
  };
  return (
    <Fragment>
      <Navbar />
      <Routes />
      <button onClick={clickHandler}>Send Request</button>
    </Fragment>
  );
}

export default App;
