import React from "react";

const Textfield = ({type, value, placeholder, onChange, name}) => {
  return(
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Textfield