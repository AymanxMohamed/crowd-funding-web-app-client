import React, {Fragment, useEffect} from 'react';
import './App.scss';
import Routes from "./routes/routes";
import AOS from "aos";

function App() {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    });


  return (
    <Fragment>
      <Routes/>
    </Fragment>
  );
}

export default App;
