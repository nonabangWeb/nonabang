import React from "react";
import styled from "styled-components";
import Main from "../components/Main";

const Container = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RegistrationContent = () => {
    return(
        <Container>
            방 등록 페이지입니다.
        </Container>
    )
}

const Registration = () => {
    return <Main children={<RegistrationContent />} />;
  };

export default Registration;