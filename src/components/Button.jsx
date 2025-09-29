import React from "react";

const Button = (props) => {
   return (
      <button className={`${props.classes} flex items-center justify-center text-nowrap`}>
         {props.svg}
         {props.text}
      </button>
   );
};

export default Button;
