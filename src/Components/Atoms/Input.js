import React from "react";
import tw from "tailwind-styled-components";

const CustomInput = tw.input`
ml-5
mr-5
border-2 rounded
pl-2 
`

const Input = (props) => {
    const {
        text,
        placeholder,
        _onChange,
        custom,
      } = props;

  return (
    <CustomInput
    className={custom}
    value={text}
    placeholder={placeholder}
    onChange={_onChange}
  />
  );
};



export default Input;
