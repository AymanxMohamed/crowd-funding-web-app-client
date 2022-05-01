import React from "react";
import { ErrorMessage, Field, useField } from "formik";

const Input: React.FC<{ type: string, name: string, label: string }> = (props) => {
  const { type, name, label } = props;
  const [, meta] = useField(name);
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
        <ErrorMessage component={"div"} name={name} className="error"/>
      </div>

    </div>
  );
};

export default Input;
