import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, padding, disabled } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    disabled : disabled
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "50%",
  padding: "12px 0px",
};

const ElButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 172px;
  position: absolute;
  width: 384px;
  height: 45px;
  left: 528px;
  top: 692px;
  background: #593CE5;
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #483D8B;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;
