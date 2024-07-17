import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.isHome ? "fixed" : "sticky")};
  top: 0;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) => props.scrolled && props.isHome ? "white" : "transparent"};
  background-color: ${(props) => !props.isHome && "white"};
  border-bottom: ${(props) => !props.isHome && "1px solid #e8e8e8"};
  z-index: 20;
`;

const Frame = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 370px;
  height: 70%;
  display: flex;
  justify-content: flex-start;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MenuFrame = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;

const MenuSection = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;
  transition: color 0.5s ease;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  li {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.scrolled && props.isHome ? "black" : "white")};
    color: ${(props) => !props.isHome && "black"};
    font-size: 20px;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }
`;

const LoginFrame = styled.div`
  width: 270px;
  height: 50px;
  color: ${(props) => (props.scrolled && props.isHome ? "black" : "white")};
  color: ${(props) => !props.isHome && "black"};
  border: solid 2px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.5s ease, box-shadow 0.5s ease,
    color 0.3s ease-in-out;

  span {
    background-color: ${(props) =>
      props.scrolled && props.isHome ? "black" : "white"};
    background-color: ${(props) => !props.isHome && "black"};
    height: 16px;
    width: 1px;
    margin: 5px 8px;
    transition: background-color 0.3s ease-in-out;
  }
`;

const Header = ({ isHome }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (isHome) {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 0);
    }
  };

  useEffect(() => {
    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isHome]);

  const handleLoginClick = () => {
    window.location.href = "SignIn";
  };

  return (
    <Container scrolled={scrolled} isHome={isHome}>
      <Frame>
        <Logo>
          <a href="/">
            <img src="/images/logo2.png" alt="Logo" />
          </a>
        </Logo>
        <MenuFrame>
          <MenuSection scrolled={scrolled} isHome={isHome}>
            <ul>
              <li>
                <a href="#">매물찾기</a>
              </li>
              <li>
                <a href="#">매물등록</a>
              </li>
              <li>
                <a href="#">나의매물</a>
              </li>
              <li>
                <a href="#">매물 추천받기</a>
              </li>
            </ul>
          </MenuSection>
        </MenuFrame>
        <LoginFrame
          scrolled={scrolled}
          isHome={isHome}
          onClick={handleLoginClick}
        >
          로그인 <span></span> 회원가입
        </LoginFrame>
      </Frame>
    </Container>
  );
};

export default Header;
