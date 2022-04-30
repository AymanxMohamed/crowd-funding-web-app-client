import React from 'react';

type Props = {
    autoFocus?: boolean,
    disabled?: boolean,
    onChange?: (value: string) => void | Promise<void>,
    pattern?: string,
    placeholder?: string,
    required?: boolean,
    name?:string,
    label:string,
    type?:
        | "date"
        | "email"
        | "hidden"
        | "number"
        | "password"
        | "search"
        | "tel"
        | "text"
        | "time"
        | "url",
    value: string
}
const TextInput: React.FC<Props> = ({ label,autoFocus,disabled,onChange,pattern,placeholder,required,type,value,name }): JSX.Element => {
    const changeHandler = !onChange ? undefined : (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };
    return (
      <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
              <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor={name}>{label}</label>
              <input id={name} type={type} value={value} pattern={pattern} placeholder={placeholder} required={required} className="form-input w-full text-gray-800"  onChange={changeHandler} />
          </div>
      </div>
  );
};

export default TextInput;
