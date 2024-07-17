import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SampleLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: salmon;
`;

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
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const TopFrame = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MainFrame = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const RowFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  input {
    width: 30px;
    height: 30px;
    margin-right: 2%;
  }
`;

const BottomFrame = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`;

const AcceptBtn = styled.button`
  width: 100%;
  height: 45%;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? "#dfdfdf" : "#007bff")};
  color: ${(props) => (props.disabled ? "white" : "white")};
  font-size: 20px;
  font-weight: bolder;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Modal = ({ closeModal }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);
  const [serviceChecked, setServiceChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  const ChangeAll = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setAgeChecked(newAllChecked);
    setServiceChecked(newAllChecked);
    setPrivacyChecked(newAllChecked);
    setMarketingChecked(newAllChecked);
  };

  const handleChange = (setter) => () => {
    setter((prev) => !prev);
  };

  const allIndividualChecked = () => ageChecked && serviceChecked && privacyChecked;

  useEffect(() => {
    if (allIndividualChecked() && !allChecked) {
      setAllChecked(true);
    } else if (!allIndividualChecked() && allChecked) {
      setAllChecked(false);
    }
  }, [ageChecked, serviceChecked, privacyChecked]);

  return (
    <SampleLayout>
      <Container>
        <Frame>
          <TopFrame>
            <h1>약관 동의</h1>
            <hr style={{ border: "1px solid lightGray" }} />
            <h5>반가워요! 서비스의 이용을 위해 약관에 동의해주세요</h5>
          </TopFrame>
          <MainFrame>
            <RowFrame>
              <input type="checkbox" checked={allChecked} onChange={ChangeAll} />
              <h4>모두 동의합니다</h4>
            </RowFrame>
            <hr style={{ border: "1px solid lightGray" }} />
            <RowFrame>
              <input type="checkbox" checked={ageChecked} onChange={handleChange(setAgeChecked)} />
              <h4>[필수] 만 14세 이상입니다</h4>
            </RowFrame>
            <RowFrame>
              <input type="checkbox" checked={serviceChecked} onChange={handleChange(setServiceChecked)} />
              <h4>[필수] 서비스 이용약관 동의</h4>
            </RowFrame>
            <RowFrame>
              <input type="checkbox" checked={privacyChecked} onChange={handleChange(setPrivacyChecked)} />
              <h4>[필수] 개인정보 수집 및 이용 동의</h4>
            </RowFrame>
            <RowFrame>
              <input type="checkbox" checked={marketingChecked} onChange={handleChange(setMarketingChecked)} />
              <h4>[선택] 마케팅 정보 수신에 대한 동의</h4>
            </RowFrame>
            <h5>만 14세 이상 회원 가입 가능합니다.</h5>
            <h5>해당 내용은 이용약관 및 정책 에서도 확인이 가능합니다.</h5>
          </MainFrame>
          <BottomFrame>
            <AcceptBtn disabled={!allIndividualChecked()} onClick={closeModal}>동의하고 진행하기</AcceptBtn>
          </BottomFrame>
        </Frame>
      </Container>
    </SampleLayout>
  );
};

export default Modal;
