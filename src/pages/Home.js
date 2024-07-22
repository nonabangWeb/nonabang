import React from "react";
import styled from "styled-components";
import Main from "../components/Main";
import Banner from "../components/Banner";
import ItemFrame from "../components/ItemFrame";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const HomeContent = () => {
  return (
    <Container>
      <Banner />
      <ItemFrame/>
    </Container>
  );
};

const Home = () => {
  return <Main isHome={true}><HomeContent /></Main>;
};

export default Home;
