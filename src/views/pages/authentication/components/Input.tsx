import React from "react";
import { ErrorMessage, Field, useField } from "formik";

const Input: React.FC<any> = (
  props
) => {
  const { type, name, label, id, ...rest } = props;
  const [, meta] = useField(name);
  return (
    <div className="flex flex-wrap -mx-3 mb-4">
      <div className="w-full px-3">
        <label
          htmlFor={id}
          className="block text-gray-800 text-sm font-medium mb-1"
        >
          {label}
        </label>
        <div className="col-12 col-md-10">
          <Field
            type={type}
            id={id}
            {...rest}
            name={name}
            className={`form-input w-full text-gray-800 ${
              meta.touched && meta.error && "is-invalid"
            }`}
          />
          <ErrorMessage component={"div"} name={name} className="error" />
        </div>
      </div>
    </div>
  );
};

export default Input;
