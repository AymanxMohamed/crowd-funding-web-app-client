import React, { Fragment, useEffect } from "react";
import Routes from "./routes/routes";
import 'flowbite';

import AOS from "aos";

import "./App.scss";
import Header from "./views/pages/homepage/components/Header";
import Breadcrumb from "./views/common/SharedComponents/ui/Breadcrumb";

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
      <Breadcrumb title={"Settings"} parents={[{title:"Account",link:'accounts'}]}></Breadcrumb>
        <Header />
        <Routes />
    </>
  );
}

export default App;
