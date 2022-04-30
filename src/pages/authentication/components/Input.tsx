import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import classes from './Input.module.css';

const Input: React.FC<{ type: string, name: string, label: string }> = (props) => {
  const { type, name, label } = props;
  const [field, meta] = useField(name);
  return (
    <div className="form-group row m-5">
      <label htmlFor={name} className="col-12 col-md-2 col-form-label">{label}</label>
      <div className="col-12 col-md-10">
        <Field
          type={type}
          id={name}
          name={name}
          className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        />
        <ErrorMessage component={"div"} name={name} className={classes.error}/>
      </div>

    </div>
  );
};

export default Input;
