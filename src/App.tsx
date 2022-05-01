import React, { Fragment, useEffect } from "react";
import Routes from "./routes/routes";
import { Windmill } from "@windmill/react-ui";
import AOS from "aos";

import "./App.scss";
import Header from "./views/pages/homepage/components/Header";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Header />
      <Windmill>
        <Routes />
      </Windmill>
    </>
  );
}

export default App;
