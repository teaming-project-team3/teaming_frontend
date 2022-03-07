import styled from "styled-components";
import {motion} from "framer-motion"

const Wrapper = styled.div`
  background-color: whitesmoke;
  height: 200vh;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 32px;
`

const Card = styled.div`
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 5px;
`;

const Box = styled(motion.div)`
  margin-top: 50px;
  margin-left: 20px;
  background-color: white;
  height: 200px;
`;

function FindProject() {

  return (

    <Wrapper>
      <Card>
        <Title>👊 너! 내 동료가 돼라!</Title>
        <Row>
          <Box />
          <Box />
          <Box />
        </Row>
        <Row>
          <Box />
          <Box />
          <Box />
        </Row>
        <Row>
          <Box />
          <Box />
          <Box />
        </Row>
      </Card>
    </Wrapper>

  );
}

export default FindProject;