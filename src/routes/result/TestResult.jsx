import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import styled from "styled-components";
import Fade from "../../components/fade";
import "../../assets/font.css";

import DownArrow from "../../imgs/downArrow.svg";
import UpArrow from "../../imgs/upArrow.svg";
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
  margin-bottom: 25px;
`;

const AboveRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
  font-family: NanumVariable;
`;

const Info = styled.div`
  height: 245px;
  padding: 25px;
  font-family: NanumVariable;
  line-height: 50px;
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
  width: 244px;
  height: 356px;
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
  const location = useLocation();
  const { combinedAnswers, userEmail } = location.state;
  const [resultData, setResultData] = useState();
  const [myCharacter1, setMyCharacter] = useState({
    spicyLevel: "",
    characterName: "",
    characterFrontBigImage: "",
    characterMyPageImage: "",
    characterInfo: "",
  });
  const [otherCharacters1, setOtherCharacters] = useState([]);

  const [error, setError] = useState();
  //
  useEffect(() => {
    const surveyScores = combinedAnswers.join("&surveyScore=");
    fetch(
      `http://localhost:8080/get/survey/result?email=${userEmail}&surveyScore=${surveyScores}`,
      {
        redirect: "manual",
        credentials: "include",
      }
    )
      .then((res) => {
        console.log(res);
        setError(null);
        if (res.status === 500) setError("서버 에러");
        return res.json();
      })
      .then((res) => {
        setResultData(res);
        setMyCharacter(res.myCharacter);
        setOtherCharacters(res.otherCharacter);
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

  if (!!error) return <div>{error}</div>;

  if (!resultData) return <div>로딩중...</div>;
  // const myCharacter = resultData.myCharacter;
  const otherCharacters = resultData.otherCharacter;
  const { myCharacter } = resultData;
  console.log({ resultData, myCharacter, otherCharacters });
  //
  return (
    <>
      <Header />
      <StyleContainer>
        <Above>
          <AboveLeft>
            <UserChar>
              {myCharacter.spicyLevel &&
                `${myCharacter.spicyLevel}단계 : ${myCharacter.characterName}`}
            </UserChar>
            {myCharacter.characterFrontBigImage && (
              <img src={myCharacter.characterFrontBigImage} alt="big" />
            )}
          </AboveLeft>
          <AboveRight>
            <Info
              style={{
                backgroundImage: `url(${myCharacter.characterMyPageImage})`,
              }}
            >
              {myCharacter.characterInfo}
            </Info>
            <MapBtn onClick={toMap}>지도 보러가기</MapBtn>
          </AboveRight>
        </Above>
        <div onClick={scrollToBottom} style={{ margin: "13px" }}>
          다른 캐릭터들 보러 가기
        </div>
        <img onClick={scrollToBottom} src={DownArrow} alt="downarrow" />
        <Blank />
        <Fade>
          <MiddleBottom>
            <img onClick={scrollToTop} src={UpArrow} alt="uparrow" />
            <div onClick={scrollToTop} style={{ margin: "13px" }}>
              내 캐릭터 보러 가기
            </div>
          </MiddleBottom>
        </Fade>
        <Fade>
          <Bottom>
            {otherCharacters.map((character, index) => (
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
