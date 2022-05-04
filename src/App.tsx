import React, { useEffect } from "react";
import Routes from "./routes/routes";
import 'flowbite';

import AOS from "aos";

import "./App.scss";

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
      <Routes />
    </>
  );
}

export default App;
