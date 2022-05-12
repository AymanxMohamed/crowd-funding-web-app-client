import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./app/store";
import { BrowserRouter } from "react-router-dom";
import 'tw-elements';
import 'flowbite'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
);

