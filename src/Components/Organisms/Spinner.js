import React from "react";
import styled from "styled-components";

import img from "../../logo.svg";
const Spinner = (props) => {
  return (
    <Outter>
      <img src={img} alt={"Now Loading..."}/>
    </Outter>
  );
};

const Outter = styled.div`
  background-color: #df402c88;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 150px;
  }
`;
export default Spinner;