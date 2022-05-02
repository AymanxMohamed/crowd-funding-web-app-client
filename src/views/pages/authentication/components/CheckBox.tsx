import { Field } from "formik";
import React from "react";

const Checkbox: React.FC<any> = ({ label, ...rest }): JSX.Element => {
  return (
    <div className="flex flex-wrap -mx-3 mb-4">
      <div className="w-full px-3">
        <div className="flex justify-between">
          <label className="flex items-center">
            <Field type="checkbox" className="form-checkbox" {...rest} />
            <span className="text-gray-600 ml-2">{label}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
