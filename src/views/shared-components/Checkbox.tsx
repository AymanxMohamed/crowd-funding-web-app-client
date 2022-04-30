import React from 'react';

type Props = {
    onChange?: (value: boolean) => void | Promise<void>,
    disabled?: boolean,
    checked?: boolean,
    label:string,
}
const Checkbox: React.FC<Props> = ({ label,onChange,checked,disabled }): JSX.Element => {
    const changeHandler = !onChange ? undefined : (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
                <div className="flex justify-between">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" checked={checked} disabled={disabled} onChange={changeHandler} />
                        <span className="text-gray-600 ml-2">{label}</span>
                    </label>
                </div>
            </div>
        </div>
  );
};

export default Checkbox;
