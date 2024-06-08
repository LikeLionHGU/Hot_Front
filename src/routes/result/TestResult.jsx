import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import styled from "styled-components";
import Fade from "../../components/fade";
import Font from "../../assets/font.css";

import SlibiFairyBackground from "../../imgs/silbifairy_background.svg";

import DownArrow from "../../imgs/downArrow.svg";
import UpArrow from "../../imgs/upArrow.svg";

import "../../assets/font.css";
import { useEffect, useState } from "react";

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 130px;
  margin-bottom: 100px;
`;

const Above = styled.div`
  display: flex;
  align-items: flex-end;

  margin-bottom: 20px;
`;

const AboveLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserChar = styled.div`
  font-family: Dream6;
  font-size: 23px;
  color: #410a0a;

  margin-bottom: 25px;
`;

const AboveRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;

  font-size: 15px;
  color: #410a0a;
  font-family: NanumVariable;
`;

const Info = styled.div`
  weight: 505px;
  height: 245px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 25px;
  padding-right: 25px;
  white-space: pre-line;

  font-family: NanumVariable;
  line-height: 30px;

  background-image: url(${SlibiFairyBackground});
  background-size: contain;
  background-repeat: no-repeat;
`;

const MapBtn = styled.button`
  width: 300px;
  height: 55px;

  margin-bottom: 15px;
  margin-top: 40px;

  border: none;
  border-radius: 8px;
  background-color: #e55936;
  color: white;

  font-family: Dream5;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

const Blank = styled.div`
  height: 300px;
`;

const MiddleBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;

  margin-top: 100px;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 244px; /* 이미지 크기에 맞게 설정 */
  height: 356px; /* 이미지 크기에 맞게 설정 */
  perspective: 1000px;
`;

const Flipper = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
`;

const FrontImage = styled(Image)`
  transform: rotateY(0deg);
`;

const BackImage = styled(Image)`
  transform: rotateY(180deg);
`;

export default function TestResult() {
  const [data, setData] = useState([]);

  const location = useLocation();
  const { combinedAnswers, userEmail } = location.state;
  const [myCharacter, setMyCharacter] = useState({
    spicyLevel: "",
    characterName: "",
    characterFrontBigImage: "",
    characterMyPageImage: "",
    characterInfo: "",
  });
  const [otherCharacter, setotherCharacter] = useState([]);

  useEffect(() => {
    const surveyScores = combinedAnswers.join("&surveyScore=");
    fetch(
      `http://localhost:8080/get/survey/result?email=${userEmail}&surveyScore=${surveyScores}`,
      {
        redirect: "manual",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Fetch response:", res); // Log the response to check the structure
        setMyCharacter(res.myCharacter);
        setotherCharacter(res.otherCharacter);
      })
      .catch((error) => {
        console.error("Error occurred while fetching:", error);
      });
  }, [combinedAnswers, userEmail]);

  const scrollToBottom = () => {
    window.scroll({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  function toMap() {
    navigate("/map");
  }
  const TextCon = styled.div`
    color: #afa4a4;
    font-size: 14px;
    font-family: Dream5;

    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <>
      <Header />
      <StyleContainer>
        <Above>
          <AboveLeft>
            {myCharacter.spicyLevel && myCharacter.characterName ? (
              <>
                <UserChar>
                  {myCharacter.spicyLevel}단계 : {myCharacter.characterName}
                </UserChar>
                {<img src={myCharacter.characterFrontBigImage} alt="big" />}
              </>
            ) : (
              <UserChar>Loading...</UserChar>
            )}
          </AboveLeft>
          <AboveRight>
            <Info>{myCharacter.characterInfo}</Info>
            <MapBtn onClick={toMap}>지도 보러가기</MapBtn>
          </AboveRight>
        </Above>
        {/* 누르는 곳을 크게 할까 말까 */}
        <TextCon>
          <div
            onClick={scrollToBottom}
            style={{ margin: "13px", cursor: "pointer" }}
          >
            다른 캐릭터들 보러 가기
          </div>
        </TextCon>
        <img
          onClick={scrollToBottom}
          src={DownArrow}
          style={{ cursor: "pointer" }}
          alt="downarrow"
        />
        <Blank />
        <Fade>
          <MiddleBottom>
            <img
              onClick={scrollToTop}
              src={UpArrow}
              style={{ cursor: "pointer" }}
              alt="uparrow"
            />
            <TextCon>
              <div onClick={scrollToTop} style={{ margin: "13px" }}>
                내 캐릭터 보러 가기
              </div>
            </TextCon>
          </MiddleBottom>
        </Fade>
        <Fade>
          <Bottom>
            {otherCharacter.map((character, index) => (
              <ImgContainer key={index}>
                <Flipper>
                  <FrontImage
                    src={character.characterFrontSmallImage}
                    alt={`front-${index}`}
                  />
                  <BackImage
                    src={character.characterBackImage}
                    alt={`back-${index}`}
                  />
                </Flipper>
              </ImgContainer>
            ))}
          </Bottom>
        </Fade>
      </StyleContainer>
    </>
  );
}
