import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "../components/Main";
import { GoPlus } from "react-icons/go";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import DaumPostcodeEmbed from "react-daum-postcode";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Frame = styled.div`
  width: 95%;
  height: 100%;
`;

const TitleText = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 46px;
  margin-top: 50px;
`;
const InfoFrame = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

const InfoTitle = styled.h2`
  font-size: 26px;
`;

const TopLine = styled.hr`
  border: solid 1.5px;
  margin-top: 20px;
`;

const BoxFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  border: none;
  position: relative;
  border-bottom: solid 1px #e0e0e0;
`;

const BoxName = styled.div`
  width: 12%;
  height: auto;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: #fcfcfc;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-right: solid 1px #e0e0e0;
`;

const BoxInfo = styled.div`
  width: 88%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
`;

const SearchFrame = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const TextBoxSpace = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextBoxSpace2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBoxFrame = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const TextBoxContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TextBox = styled.input`
  padding-left: 20px;
  padding-right: 40px;
  font-size: 18px;
  width: 400px;
  height: 60px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;

  &:hover {
    border: solid 0.5px #dbdbdb;
  }

  &:focus {
    border: solid 1.5px #222222;
    outline: none;
  }
`;

const Unit = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #000;
`;

const SearchBtn = styled.button`
  width: 100px;
  height: 60px;
  margin-left: 10px;
  border: none;
  color: white;
  background-color: black;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: #434343;
  }
`;

const AddressFrame = styled.div`
  width: 100%;
  height: 120px;
  border: solid 1px #eeeeee;
  border-radius: 4px;
  background-color: #fcfcfc;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdressRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 0 4px 0;
`;

const AdressBox2 = styled.div`
  width: 60px;
  height: 32px;
  background-color: salmon;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: rgb(101, 101, 101);
  background-color: rgb(245, 245, 245);
  font-size: 15px;
`;

const BoxInfoMap = styled.div`
  width: 470px;
  height: 350px;
  border: solid 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #fcfcfc;
  border: solid 2px #ededed;
  border-radius: 3px;
  position: absolute;
  right: 20px;
  color: #656573;
  font-weight: bold;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Modal = styled.div`
  width: 500px;
  height: 550px;
  background-color: white;
  position: relative;
  display: flex;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropdown = styled.select`
  padding-left: 20px;
  font-size: 18px;
  width: 150px;
  height: 60px;
  border: solid 1px #dbdbdb;
  transition: border 0.5s ease;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "white")};
  color: ${(props) => (props.disabled ? "#a0a0a0" : "black")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Option = styled.option`
  font-size: 18px;
`;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 19px;
  cursor: pointer;
  color: #222222;
  svg {
    margin-right: 5px;
  }
`;

const ImageBtn = styled.button`
  position: relative;
  padding-left: 20px;
  font-size: 18px;
  width: 170px;
  height: 50px;
  border: solid 1px #cecece;
  transition: border 0.5s ease;
  cursor: pointer;
  background-color: transparent;
  font-weight: bold;

  &:hover {
    border: solid 0.5px #dbdbdb;
    background-color: #f8f8f8;
    transition: background-color 0.3s ease;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  padding: 20px;
  font-size: 18px;
  border: solid 1px #dbdbdb;
  border-radius: 4px;
  line-height: 1.6;
  resize: none;

  &:hover {
    border: solid 0.5px #dbdbdb;
    transition: background-color 0.3s ease;
  }

  &::placeholder {
    white-space: pre-wrap;
    text-indent: 0;
  }

  &:focus {
    border: solid 1.5px #222222;
    outline: none;
  }
`;

const CharCount = styled.div`
  font-size: 15px;
  color: #888;
  margin: 5px 0 0 5px;
  text-align: left;
`;

const RegistrationBtnSpace = styled.div`
  display: flex;
  algin-items: center;
  justify-content: center;
  padding: 100px 0 100px 0;
`;

const RegistrationBtn = styled.button`
  width: 220px;
  height: 80px;
  color: white;
  font-size: 19px;
  font-weight: bold;
  cursor: pointer;
  background-color: #fe8c12;
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f08e24;
  }
`;

const PlusIcon = styled(GoPlus)`
  font-size: 24px;
  position: absolute;
  left: 30px;
  top: 12px;
`;

const BoxInfo2 = styled.div`
  width: 88%;
  height: 100%;
  padding: 25px;
  display: flex;
`;

const SearchFrame2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const TextBoxFrame2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const TextBoxContainer2 = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const TextBox2 = styled.input`
  padding-left: 20px;
  padding-right: 40px;
  font-size: 18px;
  width: 100%;
  height: 60px;
  border: solid 1px #dbdbdb;
  border-radius: 4px;

  &:hover {
    border: solid 0.5px #dbdbdb;
  }

  &:focus {
    border: solid 1.5px #222222;
    outline: none;
  }
`;

const RegistrationContent = () => {
  const [postCode, setPostCode] = useState("");
  const [jibunAddress, setJibunAddress] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedSecondFloor, setSelectedSecondFloor] = useState("");
  const [elevator, setElevator] = useState("없음");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [areaPyeong, setAreaPyeong] = useState("");
  const [areaSquareMeter, setAreaSquareMeter] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const [dong, setDong] = useState("");
  const [ho, setHo] = useState("");
  const [addressSelected, setAddressSelected] = useState(false);
  const [maintenanceFee, setMaintenanceFee] = useState("");
  const [deposit, setDeposit] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [hasMaintenanceFee, setHasMaintenanceFee] = useState("없음");
  const [heating, setHeating] = useState("선택 안함");
  const [cooling, setCooling] = useState([]);
  const [living, setLiving] = useState([]);
  const [security, setSecurity] = useState([]);
  const [others, setOthers] = useState([]);
  const [images, setImages] = useState([]);

  const processedPlaceholder = `매물 상세 페이지에 노출되는 문구입니다. 
  1000자 이내로 작성해주세요.`.replace(/\n\s+/g, "\n");

  useEffect(() => {
    if (postCode) {
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(postCode, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(result[0].y, result[0].x),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(result[0].y, result[0].x),
          });
          marker.setMap(map);
        }
      });
    }
  }, [postCode]);

  const handleSelectComplete = (data) => {
    setPostCode(data.address); // 도로명 주소
    setJibunAddress(data.jibunAddress); // 지번 주소
    setModal(false);
    setAddressSelected(true);
  };

  useEffect(() => {
    //모달창 열린 후 스크롤이 보이지 않도록
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  const handleAreaPyeongChange = (e) => {
    // 평을 m²으로
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setAreaPyeong(value);
      if (value) {
        setAreaSquareMeter((value * 3.3058).toFixed(2));
      } else {
        setAreaSquareMeter("");
      }
    }
  };

  const handleAreaSquareMeterChange = (e) => {
    // m²을 평으로
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setAreaSquareMeter(value);
      if (value) {
        setAreaPyeong((value / 3.3058).toFixed(2));
      } else {
        setAreaPyeong("");
      }
    }
  };

  const handleRoomCountChange = (e) => {
    // 숫자만 입력이 가능하도록
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setRoomCount(value);
    }
  };

  const handleDongChange = (e) => {
    // 동 입력 숫자만
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setDong(value);
    }
  };

  const handleDepositChange = (e) => {
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setDeposit(value);
    }
  };

  const handleMonthlyRentChange = (e) => {
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setMonthlyRent(value);
    }
  };

  const handleMaintenanceFeeChange = (e) => {
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setMaintenanceFee(value);
    }
  };

  const handleHoChange = (e) => {
    // 호 입력 숫자만
    const { value } = e.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setHo(value);
    }
  };

  const handleFirstDropdownChange = (e) => {
    setSelectedFloor(e.target.value);
    setSelectedSecondFloor("");
  };

  const renderOptions = (count) => {
    // 층에 대한 반복문
    return Array.from({ length: count }, (_, index) => (
      <Option key={index + 1} value={index + 1}>
        {index + 1}층
      </Option>
    ));
  };

  const handleCheckboxChange = (list, setList, value) => {
    setList(
      list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value]
    );
  };

  const handleTitleChange = (e) => {
    // 40글자 수 제한
    const { value } = e.target;
    if (value.length <= 40) {
      setTitle(value);
    }
  };

  const handleDescriptionChange = (e) => {
    // 1000글자 수 제한
    const { value } = e.target;
    if (value.length <= 1000) {
      setDescription(value);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length <= 4) {
      const newImages = files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });
      Promise.all(newImages)
        .then((results) =>
          setImages((prevImages) => [...prevImages, ...results])
        )
        .catch((error) => console.error("Error reading files:", error));
    } else {
      alert("최대 4개의 이미지만 업로드할 수 있습니다.");
    }
  };

  // 시설 정보 체크 박스에 대한 컴포넌트
  const Checkbox = ({ label, checked, onChange }) => (
    <CheckboxLabel>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <CustomCheckbox checked={checked}>
        {checked && <CheckIcon color="white" />}
      </CustomCheckbox>
      <LabelText>{label}</LabelText>
    </CheckboxLabel>
  );

  const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 19px;
    margin-right: 27px;
  `;

  const CheckboxInput = styled.input`
    display: none;
  `;

  const CustomCheckbox = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    margin: 8px 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    background-color: ${(props) => (props.checked ? "#FE8C12" : "transparent")};
  `;

  const CheckIcon = styled(FaCheck)`
    font-size: 14px;
  `;

  const LabelText = styled.div`
    display: flex;
    margin-left: 5px;
  `;

  return (
    <Container>
      {modal && (
        <ModalOverlay>
          <Modal>
            <ModalCloseBtn onClick={() => setModal(false)}>X</ModalCloseBtn>
            <ContentContainer>
              <DaumPostcodeEmbed
                style={{ width: "100%", height: "93%" }}
                onComplete={handleSelectComplete}
              />
            </ContentContainer>
          </Modal>
        </ModalOverlay>
      )}

      <Frame>
        <TitleText>방 등록</TitleText>
        <InfoFrame>
          <InfoTitle>매물 정보</InfoTitle>
          <h3>
            <span style={{ color: "#FE8C12", marginRight: "4px" }}>*</span>
            필수입력 항목
          </h3>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
          <BoxName>
            <h4>매물 주소</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <h4>주소 검색</h4>
              <TextBoxFrame>
                <TextBoxContainer>
                  <TextBox placeholder="예) 번동 10-1, 강북구 번동" disabled />
                </TextBoxContainer>
                <SearchBtn onClick={() => setModal(true)}>검색</SearchBtn>
              </TextBoxFrame>

              <AddressFrame>
                <AddressBox>
                  {postCode && (
                    <AdressRow>
                      <AdressBox2>도로명</AdressBox2>
                      <p style={{ color: "#222222", paddingLeft: "10px" }}>
                        {postCode}
                      </p>
                    </AdressRow>
                  )}
                  {jibunAddress && (
                    <AdressRow>
                      <AdressBox2>지번</AdressBox2>
                      <p style={{ color: "#222222", paddingLeft: "10px" }}>
                        {jibunAddress}
                      </p>
                    </AdressRow>
                  )}
                </AddressBox>
              </AddressFrame>

              <TextBoxSpace>
                <TextBoxSpace2>
                  <h4 style={{ paddingTop: "20px" }}>동 입력</h4>
                  <TextBoxFrame>
                    <TextBoxContainer style={{ marginRight: "20px" }}>
                      <TextBox
                        style={{ width: "180px" }}
                        placeholder="예) 101"
                        value={dong}
                        onChange={handleDongChange}
                        disabled={!addressSelected}
                      />
                      <Unit>동</Unit>
                    </TextBoxContainer>
                  </TextBoxFrame>
                </TextBoxSpace2>

                <TextBoxSpace2>
                  <h4 style={{ paddingTop: "20px" }}>호 입력</h4>
                  <TextBoxFrame>
                    <TextBoxContainer>
                      <TextBox
                        style={{ width: "180px" }}
                        placeholder="예) 101"
                        value={ho}
                        onChange={handleHoChange}
                        disabled={!addressSelected}
                      />
                      <Unit>호</Unit>
                    </TextBoxContainer>
                  </TextBoxFrame>
                </TextBoxSpace2>
              </TextBoxSpace>
            </SearchFrame>

            <BoxInfoMap id="map">
              <p style={{ marginBottom: "10px" }}>주소를 검색하시면</p>
              <p>해당 위치가 지도에 표시됩니다.</p>
            </BoxInfoMap>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>매물 크기</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>

          <BoxInfo>
            <SearchFrame>
              <h4>전용 면적</h4>
              <TextBoxFrame>
                <TextBoxContainer>
                  <TextBox
                    style={{ width: "150px" }}
                    placeholder="평수 입력"
                    value={areaPyeong}
                    onChange={handleAreaPyeongChange}
                  />
                  <Unit>평</Unit>
                </TextBoxContainer>

                <span style={{ fontWeight: "bold", padding: "10px 10px" }}>
                  =
                </span>

                <TextBoxContainer>
                  <TextBox
                    style={{ width: "150px" }}
                    placeholder="m² 입력"
                    value={areaSquareMeter}
                    onChange={handleAreaSquareMeterChange}
                  />
                  <Unit>m²</Unit>
                </TextBoxContainer>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>방 정보</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>

          <BoxInfo>
            <SearchFrame>
              <h4>방 수</h4>
              <TextBoxFrame>
                <TextBoxContainer>
                  <TextBox
                    style={{ width: "160px" }}
                    value={roomCount}
                    onChange={handleRoomCountChange}
                  />
                  <Unit>개</Unit>
                </TextBoxContainer>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <InfoFrame>
          <InfoTitle>거래 정보</InfoTitle>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
          <BoxName>
            <h4>가격 정보</h4>
          </BoxName>

          <BoxInfo>
            <TextBoxSpace>
              <TextBoxSpace2>
                <h4>보증금</h4>
                <TextBoxFrame>
                  <TextBoxContainer style={{ marginRight: "30px" }}>
                    <TextBox
                      style={{ width: "200px" }}
                      value={deposit}
                      onChange={handleDepositChange}
                    />
                    <Unit>만원</Unit>
                  </TextBoxContainer>
                </TextBoxFrame>
              </TextBoxSpace2>

              <TextBoxSpace2>
                <h4>월세</h4>
                <TextBoxFrame>
                  <TextBoxContainer>
                    <TextBox
                      style={{ width: "200px" }}
                      value={monthlyRent}
                      onChange={handleMonthlyRentChange}
                    />
                    <Unit>만원</Unit>
                  </TextBoxContainer>
                </TextBoxFrame>
              </TextBoxSpace2>
            </TextBoxSpace>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>공용관리비</h4>
          </BoxName>

          <BoxInfo>
            <TextBoxSpace>
              <TextBoxSpace2>
                <h4>관리비 여부</h4>
                <TextBoxFrame>
                  <RadioGroup
                    style={{ marginRight: "20px", marginTop: "13px" }}
                  >
                    <RadioLabel onClick={() => setHasMaintenanceFee("없음")}>
                      <RiRadioButtonFill
                        color={
                          hasMaintenanceFee === "없음" ? "#FE8C12" : "#ccc"
                        }
                        size={30}
                      />
                      없음
                    </RadioLabel>
                    <RadioLabel onClick={() => setHasMaintenanceFee("있음")}>
                      <RiRadioButtonFill
                        color={
                          hasMaintenanceFee === "있음" ? "#FE8C12" : "#ccc"
                        }
                        size={30}
                      />
                      있음
                    </RadioLabel>
                  </RadioGroup>
                </TextBoxFrame>
              </TextBoxSpace2>

              <TextBoxSpace2>
                <h4>관리비</h4>
                <TextBoxFrame>
                  <TextBoxContainer>
                    <TextBox
                      style={{ width: "250px" }}
                      value={maintenanceFee}
                      onChange={handleMaintenanceFeeChange}
                      disabled={hasMaintenanceFee === "없음"}
                    />
                    <Unit>원</Unit>
                  </TextBoxContainer>
                </TextBoxFrame>
              </TextBoxSpace2>
            </TextBoxSpace>
          </BoxInfo>
        </BoxFrame>

        <InfoFrame>
          <InfoTitle>추가 정보</InfoTitle>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
          <BoxName>
            <h4>층 수</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>

          <BoxInfo>
            <SearchFrame>
              <TextBoxSpace>
                <TextBoxSpace2>
                  <h4>전체층 수</h4>
                  <TextBoxFrame>
                    <DropdownContainer>
                      <Dropdown
                        value={selectedFloor}
                        onChange={handleFirstDropdownChange}
                      >
                        <Option value="">선택</Option>
                        {renderOptions(25)}
                      </Dropdown>
                    </DropdownContainer>
                  </TextBoxFrame>
                </TextBoxSpace2>

                <TextBoxSpace2>
                  <h4 style={{ marginLeft: "40px" }}>해당층 수</h4>
                  <TextBoxFrame>
                    <DropdownContainer style={{ marginLeft: "40px" }}>
                      <Dropdown
                        value={selectedSecondFloor}
                        onChange={(e) => setSelectedSecondFloor(e.target.value)}
                        disabled={!selectedFloor}
                      >
                        <Option value="">선택</Option>
                        {selectedFloor &&
                          renderOptions(parseInt(selectedFloor, 10))}
                      </Dropdown>
                    </DropdownContainer>
                  </TextBoxFrame>
                </TextBoxSpace2>
              </TextBoxSpace>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>엘리베이터</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <TextBoxFrame>
                <RadioGroup>
                  <RadioLabel onClick={() => setElevator("없음")}>
                    <RiRadioButtonFill
                      color={elevator === "없음" ? "#FE8C12" : "#ccc"}
                      size={30}
                    />
                    없음
                  </RadioLabel>
                  <RadioLabel onClick={() => setElevator("있음")}>
                    <RiRadioButtonFill
                      color={elevator === "있음" ? "#FE8C12" : "#ccc"}
                      size={30}
                    />
                    있음
                  </RadioLabel>
                </RadioGroup>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <InfoFrame>
          <InfoTitle>시설 정보</InfoTitle>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
          <BoxName>
            <h4>난방 시설</h4>
          </BoxName>
          <BoxInfo>
            <SearchFrame>
              <TextBoxFrame>
                <RadioGroup>
                  <RadioLabel
                    style={{ width: "120px" }}
                    onClick={() => setHeating("선택 안함")}
                  >
                    <RiRadioButtonFill
                      color={heating === "선택 안함" ? "#FE8C12" : "#ccc"}
                      size={30}
                    />
                    선택 안함
                  </RadioLabel>
                  <RadioLabel
                    style={{ width: "120px" }}
                    onClick={() => setHeating("개별난방")}
                  >
                    <RiRadioButtonFill
                      color={heating === "개별난방" ? "#FE8C12" : "#ccc"}
                      size={30}
                    />
                    개별난방
                  </RadioLabel>
                  <RadioLabel
                    style={{ width: "120px" }}
                    onClick={() => setHeating("중앙난방")}
                  >
                    <RiRadioButtonFill
                      color={heating === "중앙난방" ? "#FE8C12" : "#ccc"}
                      size={30}
                    />
                    중앙난방
                  </RadioLabel>
                  <RadioLabel
                    style={{ width: "120px" }}
                    onClick={() => setHeating("지역난방")}
                  >
                    <RiRadioButtonFill
                      color={heating === "지역난방" ? "#FE8C12" : "#ccc"}
                      size={30}
                    />
                    지역난방
                  </RadioLabel>
                </RadioGroup>
              </TextBoxFrame>
            </SearchFrame>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>냉방 시설</h4>
          </BoxName>
          <BoxInfo>
            <Checkbox
              label="벽걸이형"
              checked={cooling.includes("벽걸이형")}
              onChange={() =>
                handleCheckboxChange(cooling, setCooling, "벽걸이형")
              }
            />
            <Checkbox
              label="스탠드형"
              checked={cooling.includes("스탠드형")}
              onChange={() =>
                handleCheckboxChange(cooling, setCooling, "스탠드형")
              }
            />
            <Checkbox
              label="천장형"
              checked={cooling.includes("천장형")}
              onChange={() =>
                handleCheckboxChange(cooling, setCooling, "천장형")
              }
            />
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>생활 시설</h4>
          </BoxName>
          <BoxInfo style={{ flexWrap: "wrap" }}>
            {[
              "침대",
              "옷장",
              "식탁",
              "쇼파",
              "신발장",
              "냉장고",
              "세탁기",
              "건조기",
              "샤워부스",
              "욕조",
              "비데",
              "싱크대",
              "식기세척기",
              "가스레인지",
              "인덕션",
              "전자레인지",
              "가스오븐",
              "TV",
              "붙박이장",
            ].map((item) => (
              <Checkbox
                key={item}
                label={item}
                checked={living.includes(item)}
                onChange={() => handleCheckboxChange(living, setLiving, item)}
              />
            ))}
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>보안 시설</h4>
          </BoxName>
          <BoxInfo>
            {[
              "경비원",
              "비디오폰",
              "인터폰",
              "카드키",
              "CCTV",
              "사설경비",
              "현관보안",
              "방범창",
            ].map((item) => (
              <Checkbox
                key={item}
                label={item}
                checked={security.includes(item)}
                onChange={() =>
                  handleCheckboxChange(security, setSecurity, item)
                }
              />
            ))}
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>기타 시설</h4>
          </BoxName>
          <BoxInfo>
            {["화재경보기", "베란다", "테라스", "마당", "무인택배함"].map(
              (item) => (
                <Checkbox
                  key={item}
                  label={item}
                  checked={others.includes(item)}
                  onChange={() => handleCheckboxChange(others, setOthers, item)}
                />
              )
            )}
          </BoxInfo>
        </BoxFrame>

        <InfoFrame>
          <InfoTitle>사진 등록</InfoTitle>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
      <BoxName>
        <h4>일반 사진</h4>
        <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
      </BoxName>
      <BoxInfo>
        <SearchFrame>
          <ImageBtn onClick={() => document.getElementById("image-upload").click()}>
            <PlusIcon />
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-upload"
            />
            <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
              사진추가
            </label>
          </ImageBtn>
        </SearchFrame>
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Uploaded ${index}`}
              style={{ width: "320px", height: "200px", border: "solid 1px" }}
            />
          ))}
        </div>
      </BoxInfo>
    </BoxFrame>
    
        <InfoFrame>
          <InfoTitle>상세 설명</InfoTitle>
        </InfoFrame>
        <TopLine />

        <BoxFrame>
          <BoxName>
            <h4>작성자</h4>
          </BoxName>

          <BoxInfo
            style={{ fontSize: "18px", fontWeight: "bold", color: "#222222" }}
          >
            <p>현지훈</p>
          </BoxInfo>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>제목</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>

          <BoxInfo2>
            <SearchFrame2>
              <TextBoxFrame2>
                <TextBoxContainer2>
                  <TextBox2
                    placeholder="리스트에 노출되는 문구입니다. 40자 이내로 작성해주세요."
                    value={title}
                    onChange={handleTitleChange}
                  />
                  <CharCount>{title.length}/40</CharCount>
                </TextBoxContainer2>
              </TextBoxFrame2>
            </SearchFrame2>
          </BoxInfo2>
        </BoxFrame>

        <BoxFrame>
          <BoxName>
            <h4>상세설명</h4>
            <span style={{ color: "#FE8C12", marginLeft: "4px" }}>*</span>
          </BoxName>

          <BoxInfo2>
            <SearchFrame2>
              <TextBoxFrame2>
                <TextBoxContainer2>
                  <TextArea
                    placeholder={processedPlaceholder}
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                  <CharCount>{description.length}/1000</CharCount>
                </TextBoxContainer2>
              </TextBoxFrame2>
            </SearchFrame2>
          </BoxInfo2>
        </BoxFrame>

        <RegistrationBtnSpace>
          <RegistrationBtn>방 등록</RegistrationBtn>
        </RegistrationBtnSpace>
      </Frame>
    </Container>
  );
};

const Registration = () => {
  return <Main children={<RegistrationContent />} />;
};

export default Registration;