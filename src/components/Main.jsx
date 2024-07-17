import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = ({ children, isHome }) => {
  return (
    <Container>
      <Header isHome={isHome}/>
      <Layout>{children}</Layout>
      <Footer />
    </Container>
  );
};

export default Main;
