import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import styled from "styled-components";
import Fade from "../../components/fade";
import Font from "../../assets/font.css";

import MaepguSmall from "../../imgs/maepgu_small.svg";
import MaepguBig from "../../imgs/maepgu_big.svg";
import MaepguBack from "../../imgs/maepgu_back.svg";

import MaepnoseSmall from "../../imgs/maepnose_small.svg";
import MaepnoseBig from "../../imgs/maepnose_big.svg";
import MaepnoseBack from "../../imgs/maepnose_back.svg";

import MaepmuljuSmall from "../../imgs/maepmulju_small.svg";
import MaepmuljuBig from "../../imgs/maepmulju_big.svg";
import MaepmuljuBack from "../../imgs/maepmulju_back.svg";

import WiamplannerSmall from "../../imgs/wiamplanner_small.svg";
import WiamplannerBig from "../../imgs/wiamplanner_big.svg";
import WiamplannerBack from "../../imgs/wiamplanner_back.svg";

import SlibiFairySmall from "../../imgs/silbifairy_small.svg";
import SlibiFairyBig from "../../imgs/silbifairy_big.svg";
import SlibiFairyBack from "../../imgs/silbifairy_back.svg";
import SlibiFairyBackground from "../../imgs/silbifairy_background.svg";

import DownArrow from "../../imgs/downArrow.svg";
import UpArrow from "../../imgs/upArrow.svg";

import "../../assets/font.css";
import { useEffect, useState } from "react";

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
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
  // const url = `http://223.p-e.kr:8080/get/survey/result`;
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

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
  return (
    <>
      <Header />
      <StyleContainer>
        <Above>
          <AboveLeft>
            <UserChar>5단계 : 실비요정</UserChar>
            <img src={SlibiFairyBig} alt="big" />
          </AboveLeft>
          <AboveRight>
            <Info>
              "뾰로롱~ο(=•ω＜=)ρ⌒☆ (캡사이신을 뿌리며)"
              <br />
              매운맛을 통달한 당신은 매운 음식 앞에서 두려움 따위 없습니다.
              <br />
              캡사이신을 물처럼 다루는 당신!
              <br />
              어떠한 매운 맛의 공격에도 끄떡 없는 당신!
              <br />
              어떤 음식이든 마법으로 맵게 만듭니다!
            </Info>
            <MapBtn onClick={toMap}>지도 보러가기</MapBtn>
          </AboveRight>
        </Above>
        {/* 누르는 곳을 크게 할까 말까 */}
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
            <ImgContainer>
              <Flipper>
                <FrontImage src={MaepguSmall} alt="1" />
                <BackImage src={MaepguBack} alt="1" />
              </Flipper>
            </ImgContainer>
            <ImgContainer>
              <Flipper>
                <FrontImage src={MaepnoseSmall} alt="2" />
                <BackImage src={MaepnoseBack} alt="2" />
              </Flipper>
            </ImgContainer>
            <ImgContainer>
              <Flipper>
                <FrontImage src={MaepmuljuSmall} alt="3" />
                <BackImage src={MaepmuljuBack} alt="3" />
              </Flipper>
            </ImgContainer>
            <ImgContainer>
              <Flipper>
                <FrontImage src={WiamplannerSmall} alt="4" />
                <BackImage src={WiamplannerBack} alt="4" />
              </Flipper>
            </ImgContainer>
          </Bottom>
        </Fade>
      </StyleContainer>
    </>
  );
}
