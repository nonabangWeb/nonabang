import React, { useState } from "react";
import styled from "styled-components";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { COLOR } from "../colors/color"

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-image: url("/images/banner.png");
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Frame = styled.div`
  width: 1300px;
  height: 100%;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

const TextFrame = styled.div`
  position: relative;
  top: 200px;
  width: 80%;
  height: 20%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchFrame = styled.div`
  position: relative;
  top: 250px;
  width: 60%;
  height: 70px;
  display: flex;
  flex-direction: row;
`;

const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  border: none;
  font-size: 22px;
  background-color: #f2f2f2;
  padding: 20px;
  padding-right: 50px;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  width: 10%;
  height: 100%;
  background-color: ${COLOR.MAIN_ORANGE};
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #f08e24;
  }
`;

const ClearIcon = styled(IoIosClose)`
  position: absolute;
  right: 80px;
  top: 15px;
  color: #757575;
  cursor: pointer;
`;

const Banner = () => {
  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <Container>
      <Frame>
        <TextFrame>
          <h2>룸메이트 구할 땐 노나방</h2>
        </TextFrame>
        <SearchFrame>
          <SearchInput
            placeholder="검색지역을 입력해주세요"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && <ClearIcon onClick={handleClear} />}
          <SearchIcon>
            <IoIosSearch />
          </SearchIcon>
        </SearchFrame>
      </Frame>
    </Container>
  );
};

export default Banner;
