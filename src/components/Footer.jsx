import React from "react";
import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px;
`;

const Frame = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 14px;
    padding: 4px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin-top: 15px;
`;

const Icon = styled.div`
  font-size: 28px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Frame>
        <h4 style={{ paddingBottom: "10px" }}>NONABANG</h4>
        <span>
        상호 : (주) 인제대 | 대표: 김재민 | 사업자등록번호: 123-456-78910
        </span>
        <span>본사: 경상남도 김해시 어방동 인제대학교 장영실관 122-B</span>
        <span>고객센터: 055-334-7111 | E-MAIL : kjm9547@oasis.inje.ac.kr</span>
        <IconWrapper>
          <Icon>
            <FaYoutube />
          </Icon>
          <Icon>
            <FaInstagram />
          </Icon>
          <Icon>
            <FaFacebookSquare />
          </Icon>
          <Icon>
            <IoLogoDiscord />
          </Icon>
        </IconWrapper>
        <span style={{ paddingTop: "10px", fontWeight: "500" }}>
          Copyright ⓒ 2024 노나방 All rights reserved.
        </span>
      </Frame>
    </Container>
  );
};

export default Footer;
