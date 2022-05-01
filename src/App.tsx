import React, {useEffect} from 'react';
import './App.scss';
import Routes from "./routes/routes";
import AOS from "aos";
import {Windmill} from "@windmill/react-ui";

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
      <Windmill>
        <Routes/>
      </Windmill>
  );
}

export default App;
