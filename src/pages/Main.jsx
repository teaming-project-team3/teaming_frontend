import styled from "styled-components";

const Wrapper = styled.div`
  background-color: whitesmoke;
  height: 200vh;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-left: 100px;
`;

function FindProject() {

  return (
    <Wrapper>
      <Title>너! 내 동료가 되라👊</Title>
    </Wrapper>

  );
}

export default FindProject;