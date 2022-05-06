import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CreateProject: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();


  return (
    <section>
      <ul className="stepper" data-mdb-stepper="stepper">
        <li className="stepper-step stepper-active">
          <div className="stepper-head">
            <span className="stepper-head-icon"> 1 </span>
            <span className="stepper-head-text"> step1 </span>
          </div>
          <div className="stepper-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua.
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head">
            <span className="stepper-head-icon"> 2 </span>
            <span className="stepper-head-text"> step2 </span>
          </div>
          <div className="stepper-content">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </li>
        <li className="stepper-step">
          <div className="stepper-head">
            <span className="stepper-head-icon"> 3 </span>
            <span className="stepper-head-text"> step3 </span>
          </div>
          <div className="stepper-content">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </li>
      </ul>

    </section>
  );
};

export default CreateProject;
