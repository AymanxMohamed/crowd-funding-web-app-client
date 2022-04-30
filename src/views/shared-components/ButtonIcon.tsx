import React from 'react';

type Props = {
    onClick?: () => void | Promise<void>,
    text: string,
    icon?: string,
    color?: | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "pink" | "rose",
}
const TextInput: React.FC<Props> = ({ text,icon,color='red',onClick }): JSX.Element => {
    return (
            <div className="w-full px-3">
                <button className={"btn px-0 text-white bg-" + color +"-700 hover:bg-" + color +"-600 w-full relative flex items-center"} onClick={onClick}>
                    <i className={icon + " w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"}></i>
                    <span className="flex-auto pl-16 pr-8 -ml-16">{text}</span>
                </button>
            </div>
  );
};

export default TextInput;
