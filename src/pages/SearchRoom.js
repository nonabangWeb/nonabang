import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import DaumPostcode from 'react-daum-postcode';
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const TopFrame = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid lightgray;
  padding-right: 60%;
  padding-left: 2%;
`;

const BottomFrame = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TypeBtn = styled.div`
  width: 150px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ selected }) => (selected ? "#fe8c12" : "gray")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    display: ${({ selected }) => (selected ? "block" : "none")};
    position: absolute;
    bottom: -80%;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #fe8c12;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 150px;
`;

const DropdownButton = styled.div`
  background-color: white;
  border-radius: 5px;
  border: 2px solid #fe8c12;
  padding: 10px;
  color: #fe8c12;
  cursor: pointer;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #fe8c12;
  border-radius: 5px;
  z-index: 10;
`;

const DropdownOption = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const MapFrame = styled.div`
  width: 60%;
  height: 80%;
  border: 2px solid #fe8c12;
  border-radius: 20px;
  background-color: white;
`;

const SelectBoxArea = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  border: 2px solid #fe8c12;
  border-radius: 15px;
  padding: 20px;
  overflow-y: auto;
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledBtn = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fe8c12;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
`;

const RoomBoxContainer = styled.div`
  width: 100%;
  height: 40%;
  border-bottom: 1px solid #fe8c12;
  margin-bottom: 10px;
  flex-shrink: 0;
  display: flex;
  cursor: pointer;
`;

const RoomBoxImageFrame = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoomImage = styled.img`
  width: 80%;
  height: 80%;
`;

const HeartIcon = styled(IoMdHeart)`
  font-size: 25px;
  color: red;
`;

const RoomBoxExplainFrame = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;
  h4 {
   color: gray;
   font-weight: normal
  }
`;

const SubBox = styled.div`
  width: 15%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid lightsalmon;
  border-radius: 10px;
  color: lightsalmon;
  font-weight: bold;
`;

const RoomBox = ({ onClick }) => {
  return (
    <RoomBoxContainer onClick={onClick}>
      <RoomBoxImageFrame>
        <RoomImage src="../images/banner.png" />
      </RoomBoxImageFrame>
      <RoomBoxExplainFrame>
        <div style={{width:"100%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
          <h3>전세 6300</h3> 
        <HeartIcon /></div>
        <h4>투룸</h4>
        <h4>2층, 35.39㎡</h4>
        <h4>함께지낼 동성 룸메이트 구합니다~</h4>
        <SubBox>급구</SubBox>
      </RoomBoxExplainFrame>
    </RoomBoxContainer>
  );
};

const SearchRoomContent = () => {
  const [postCode, setPostCode] = useState("");
  const [cordX, setCordX] = useState(null);
  const [cordY, setCordY] = useState(null);
  const [modalState, setModalState] = useState(true);
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const navigate = useNavigate();
  const array = [1,2,3,4,5];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=558d681fe7c83dd239a96533b3e7313f&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        // 최초 지도 초기화
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    };

    return () => {
      // 스크립트 제거
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const selectPostcode = (data) => {
    const address = data.address;
    setPostCode(address);
    setModalState(false);

    if (window.kakao && window.kakao.maps) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const x = result[0].x; // 경도
          const y = result[0].y; // 위도
          setCordX(x);
          setCordY(y);

          // 지도 업데이트
          const map = new window.kakao.maps.Map(document.getElementById('map'), {
            center: new window.kakao.maps.LatLng(y, x),
            level: 3,
          });

          new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(y, x),
            map: map,
          });
        } else {
          console.error("Geocode failed:", status);
        }
      });
    }
  };

  const handleRoomClick = () => {
    navigate("/DetailRoom");  // Absolute path to avoid appending
  };

  return (
    <Container>
      <TopFrame style={{border: "none"}}>
        {["원/투룸", "아파트", "주택/빌라", "오피스텔"].map((type, index) => (
          <TypeBtn
            key={index}
            selected={index === selectedTypeIndex}
            onClick={() => setSelectedTypeIndex(index)}
          >
            {type}
          </TypeBtn>
        ))}
      </TopFrame>
      <TopFrame>
          <DropdownContainer>
            <Dropdown title="월세 / 전세 ▼" options={["월세", "전세"]} />
          </DropdownContainer>
          <DropdownContainer>
            <Dropdown title="방 크기 ▼" options={["옵션 2-1", "옵션 2-2", "옵션 2-3"]} />
          </DropdownContainer>
          <DropdownContainer>
            <Dropdown title="층 수 ▼" options={["옵션 3-1", "옵션 3-2", "옵션 3-3"]} />
          </DropdownContainer>
          <DropdownContainer>
            <Dropdown title="추가 필터 ▼" options={["옵션 4-1", "옵션 4-2", "옵션 4-3"]} />
          </DropdownContainer>
      </TopFrame>
      <BottomFrame>
        <MapFrame id="map" />
        <SelectBoxArea>
          {modalState && (
            <Modal>
              <h3>중심이 될만한 지점을 검색 해주세요</h3>
              <DaumPostcode
                style={{ width: "95%", height: "80%" }}
                onComplete={selectPostcode}
              />
            </Modal>
          )}
          {!modalState && (
            <>
              <StyledBtn>등록된 룸메이트</StyledBtn>
              {array.map((item, index) => (
                <RoomBox
                  key={index}
                  onClick={handleRoomClick}
                />
              ))}
            </>
          )}
        </SelectBoxArea>
      </BottomFrame>
    </Container>
  );
};

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption || title}
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownOption key={index} onClick={() => selectOption(option)}>
            {option}
          </DropdownOption>
        ))}
      </DropdownContent>
    </>
  );
};

const SearchRoom = () => {
  return <Main children={<SearchRoomContent />} />;
};

export default SearchRoom;