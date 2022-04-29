import React, { Fragment } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./features/reducers/auth";
import Routes from "./routes/routes";

function App() {
  // const authState = useSelector((state: any) => state.auth);
  //
  // const dispatch = useDispatch();
  //
  // const clickHandler = () => {
  //     dispatch(authActions.toggle());
  // }

  return (
    <Fragment>
      <Routes/>
      {/*<p>Testing Auth State Value {authState.isLoggedIn ? 'True' : 'False'}</p>*/}
      {/*<button onClick={clickHandler}>Change Auth State</button>*/}
      {/*<p>This is for test only and to understand how the redux works</p>*/}
    </Fragment>
  );
}

export default App;
