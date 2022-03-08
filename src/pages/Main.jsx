import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion"

const Wrapper = styled.div`
  background-color: whitesmoke;
  height: 200vh;
  margin-top: 100px;
`;

const Card = styled.div`
  margin-left: 640px;
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

const Info = styled(motion.div)`
  padding: 50px;
  background-color: #c3c3c3;
`;

const Title = styled.div`
  padding: 10px;
  font-size: 12px;
`;

function Main() {
  const onBoxClicked = () => {
    console.log("box1 클릭")
  }

  return (

    <Wrapper>
      <Card>
        <Row>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <Title>자유로운 개발자 인원을 모집합니다.</Title>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <Title>자유로운 개발자 인원을 모집합니다.</Title>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <Title>자유로운 개발자 인원을 모집합니다.</Title>
          </Box>
        </Row>
        <Row>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <Title>자유로운 개발자 인원을 모집합니다.</Title>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <Title>자유로운 개발자 인원을 모집합니다.</Title>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <Title>자유로운 개발자 인원을 모집합니다.</Title>
          </Box>
        </Row>
        <Row>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <Title>자유로운 개발자 인원을 모집합니다.</Title>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <Title>자유로운 개발자 인원을 모집합니다.</Title>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <Title>자유로운 개발자 인원을 모집합니다.</Title>
          </Box>
        </Row>
      </Card>
    </Wrapper>

  );
}

export default Main;