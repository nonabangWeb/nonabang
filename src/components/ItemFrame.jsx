import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  background-color: #f5f5f5;
  padding: 0 50px;
`;

const Frame = styled.div`
  width: 60%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2x2 그리드 */
  grid-template-rows: repeat(2, 1fr);
  gap: 26px;
`;

const Item = styled.a`
  border: solid 1px rgb(230, 230, 230);
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  cursor: pointer;
  background-color: white;
  position: relative;
  text-decoration: none;
  color: black;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(210, 210, 210, 1);
    transform: translateY(-5px); /* 박스를 위로 5px 이동 */
  }

  p {
    font-size: 17px;
    padding-bottom: 8px;
    color: #979797;
  }
`;

const ItemTitleText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Icon = styled.img`
  width: 15%;
  height: 30%;
  position: absolute;
  bottom: 20px;
  right: 30px;
`;

const Image = styled.img`
  width: 40%;
  height: 70%;
  border-radius: 12px;
  margin-left: 20px;
`;

const ItemFrame = () => {
  return (
    <Container>
      <Frame>
        <Item>
          <ItemTitleText>
            <h1>방 찾기</h1>
          </ItemTitleText>
          <p>방을 찾으세요</p>
          <p>원하는 위치의 방과 룸메이트를 한번에!</p>
          <Icon src="images/icon1.png"></Icon>
        </Item>
        <Item href="/Registration">
          <ItemTitleText>
            <h1>방 등록</h1>
          </ItemTitleText>
          <p>방을 등록하세요</p>
          <p>방을 등록하여 룸메이트를 구하자!</p>
          <Icon src="images/icon2.png"></Icon>
        </Item>
        <Item>
          <ItemTitleText>
            <h1>찜한 방</h1>
          </ItemTitleText>
          <p>찜한 방을 확인하세요</p>
          <p>나의 취향에 맞는 룸메이트가 여기에?</p>
          <Icon src="images/icon3.png"></Icon>
        </Item>
        <Item>
          <ItemTitleText>
            <h1>커뮤니티</h1>
          </ItemTitleText>
          <p>커뮤니티를 확인하세요</p>
          <p>모든 방을 한 번에 찾으세요</p>
          <Icon src="images/icon4.png"></Icon>
        </Item>
      </Frame>
      <Image src="images/advertising.png" />
    </Container>
  );
};

export default ItemFrame;
