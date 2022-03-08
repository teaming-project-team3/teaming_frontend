import styled from "styled-components";
import {motion} from "framer-motion"
import Modal from "../Components/Modals/Modal";
import {useState} from "react";

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

const ProFile = styled.div`
  padding: 5px;
`;

const Title = styled.div`
  font-size: 12px;
`;

const SubTitle = styled.div`
  font-size: 8px;
`;

const User = styled.div`
  font-size: 6px;
`;

const Like = styled.div`
  font-size: 6px;
`

function Main() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true)
  }
  const closeModal = () => {
    setModalVisible(false)
  }

  const onBoxClicked = () => {
    console.log("box1 클릭")

  }

  return (

    <Wrapper>
      <Card>
        <Row>
          <Box
            onClick={openModal}
          >
            <>
              {
                modalVisible &&
                <Modal
                  visible={modalVisible}
                  closable={true}
                  maskClosable={true}
                  onClose={closeModal}
                >
                  Hello
                </Modal>
              }
            </>
            <Info />
            <ProFile>
              <Title>개발자 인원을 모집합니다.</Title>
              <SubTitle>개발 / 초기 개발 단계 / 현재 구성원 4명 / 전체 모집시까지</SubTitle>
              <User>우아한 형제들</User>
              <Like>좋아요 10개</Like>
            </ProFile>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <ProFile>
              <Title>개발자 인원을 모집합니다.</Title>
              <SubTitle>개발 / 초기 개발 단계 / 현재 구성원 4명 / 전체 모집시까지</SubTitle>
              <User>우아한 형제들</User>
              <Like>좋아요 10개</Like>
            </ProFile>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <ProFile>
              <Title>개발자 인원을 모집합니다.</Title>
              <SubTitle>개발 / 초기 개발 단계 / 현재 구성원 4명 / 전체 모집시까지</SubTitle>
              <User>우아한 형제들</User>
              <Like>좋아요 10개</Like>
            </ProFile>
          </Box>
        </Row>
        <Row>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <ProFile>
              <Title>개발자 인원을 모집합니다.</Title>
              <SubTitle>개발 / 초기 개발 단계 / 현재 구성원 4명 / 전체 모집시까지</SubTitle>
              <User>우아한 형제들</User>
              <Like>좋아요 10개</Like>
            </ProFile>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <ProFile>
              <Title>개발자 인원을 모집합니다.</Title>
              <SubTitle>개발 / 초기 개발 단계 / 현재 구성원 4명 / 전체 모집시까지</SubTitle>
              <User>우아한 형제들</User>
              <Like>좋아요 10개</Like>
            </ProFile>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <ProFile>
              <Title>개발자 인원을 모집합니다.</Title>
              <SubTitle>개발 / 초기 개발 단계 / 현재 구성원 4명 / 전체 모집시까지</SubTitle>
              <User>우아한 형제들</User>
              <Like>좋아요 10개</Like>
            </ProFile>
          </Box>
        </Row>
        <Row>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <ProFile>
              <Title>개발자 인원을 모집합니다.</Title>
              <SubTitle>개발 / 초기 개발 단계 / 현재 구성원 4명 / 전체 모집시까지</SubTitle>
              <User>우아한 형제들</User>
              <Like>좋아요 10개</Like>
            </ProFile>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <ProFile>
              <Title>개발자 인원을 모집합니다.</Title>
              <SubTitle>개발 / 초기 개발 단계 / 현재 구성원 4명 / 전체 모집시까지</SubTitle>
              <User>우아한 형제들</User>
              <Like>좋아요 10개</Like>
            </ProFile>
          </Box>
          <Box
            onClick={() => onBoxClicked()}
          >
            <Info />
            <ProFile>
              <Title>개발자 인원을 모집합니다.</Title>
              <SubTitle>개발 / 초기 개발 단계 / 현재 구성원 4명 / 전체 모집시까지</SubTitle>
              <User>우아한 형제들</User>
              <Like>좋아요 10개</Like>
            </ProFile>
          </Box>
        </Row>
      </Card>
    </Wrapper>

  );
}

export default Main;