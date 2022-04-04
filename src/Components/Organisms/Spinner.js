import React from "react";
import styled from "styled-components";
import img from "../../static/images/spinner/loading.gif";
import './Spinner.css'

const Spinner = (props) => {
  return (
    <Outter>
      <img src={img} alt={"Now Loading..."}/>
    </Outter>
  );
};

const Outter = styled.div`
  background-color: #FFFFFF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  & img {
    width: 20vw;
  }
`;
export default Spinner;