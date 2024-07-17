import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import Main from "../components/Main";

const Container = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid lightgray;
`;

const Frame = styled.div`
  width: 80%;
  height: 90%;
`;

const Header = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Middle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  h2 {
    text-align: center;
  }
`;

  const InputArea = styled.input`
    width: 100%;
    height: 20%;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 20px;
  `;

const Footer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const UnderBar = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid lightgray;
`;

const EnterBtn = styled.button`
  width: 100%;
  height: 50%;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: rgb(223, 223, 223);
  color: white;
  font-weight: bolder;
  font-size: 20px;
`;

const SignUpContent = () => {
  const [modalState, setModalState] = useState(true);

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <Container>
        {modalState && <Modal closeModal={closeModal} />}
      <Frame>
        <Header>
          <h1>회원정보 입력</h1>
          <UnderBar/>
          <h4>노나방 서비스 이용을 위해 아래 정보를 입력해주세요</h4>
        </Header>
        <Middle>
          <h4>아이디</h4>
          <InputArea
            placeholder="이메일 주소 입력"
          />
          <h4>비밀번호</h4>
          <InputArea
            placeholder="8자리 이상 영문,숫자,특수문자 포함"
          />
          <InputArea
            placeholder="비밀번호 확인"
          />
        </Middle>
        <Footer>
          <EnterBtn>회원가입 완료</EnterBtn>
        </Footer>
      </Frame>
    </Container>
  );
};

const SignUp = () => {
  return <Main children={<SignUpContent />} />;
};

export default SignUp;
