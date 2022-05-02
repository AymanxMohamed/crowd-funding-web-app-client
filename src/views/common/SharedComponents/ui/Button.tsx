import React from "react";

const Button: React.FC<any> = ({ color, icon, text, ...rest }): JSX.Element => {
  return (
    <div className="w-full px-3">
      <button
        className={ "btn px-0 text-white bg-" + color + "-700 hover:bg-" + color + "-600 w-full relative flex items-center"}
        {...rest}
      >
        {icon && (
          <i
            className={
              icon +
              " w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
            }
          ></i>
        )}
        <span className="flex-auto pl-16 -ml-16 text-center">{text}</span>
      </button>
    </div>
  );
};

export default Button;
