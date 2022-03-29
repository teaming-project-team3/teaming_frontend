import React from "react";
import styled from "styled-components";
import img from "../../logo.svg";
import './Spinner.css'
const Spinner = (props) => {
  return (
    <Outter>
      <img className="App-logo" src={img} alt={"Now Loading..."}/>
    </Outter>
  );
};

const Outter = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  & img {
    width: 150px;
  }
`;
export default Spinner;