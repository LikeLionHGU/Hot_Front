import Header from "../components/header/header";
import styled from "styled-components";
import Fade from "../components/fade";

import MaepguSmall from "../imgs/maepgu_small.svg";
import MaepguBig from "../imgs/maepgu_big.svg";
import MaepguBack from "../imgs/maepgu_back.svg";

import MaepnoseSmall from "../imgs/maepnose_small.svg";
import MaepnoseBig from "../imgs/maepnose_big.svg";
import MaepnoseBack from "../imgs/maepnose_back.svg";

import MaepmuljuSmall from "../imgs/maepmulju_small.svg";
import MaepmuljuBig from "../imgs/maepmulju_big.svg";
import MaepmuljuBack from "../imgs/maepmulju_back.svg";

import WiamplannerSmall from "../imgs/wiamplanner_small.svg";
import WiamplannerBig from "../imgs/wiamplanner_big.svg";
import WiamplannerBack from "../imgs/wiamplanner_back.svg";

import SlibiFairySmall from "../imgs/silbifairy_small.svg";
import SlibiFairyBig from "../imgs/silbifairy_big.svg";
import SlibiFairyBack from "../imgs/silbifairy_back.svg";

import DownArrow from "../imgs/downArrow.svg";
import UpArrow from "../imgs/upArrow.svg";

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
`;

const Above = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const AboveLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserChar = styled.div``;

const AboveRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const MapBtn = styled.button`
  width: 270px;
  height: 60px;

  border: none;
  border-radius: 8px;
  background-color: #e55936;
  color: white;

  margin-left: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const Blank = styled.div`
  height: 400px;
`;

const MiddleBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;

  margin-top: 200px;
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
            <div>
              "뾰로롱~ο(=•ω＜=)ρ⌒☆ (캡사이신을 뿌리며)"
              <br />
              매운맛을 통달한 당신은 매운 음식 앞에서 두려움 따위 없습니다.
              <br />
              캡사이신을 물처럼 다루는 당신!
              <br />
              어떠한 매운 맛의 공격에도 끄떡 없는 당신!
              <br />
              어떤 음식이든 마법으로 맵게 만듭니다!
            </div>
            <MapBtn>지도 보러가기</MapBtn>
          </AboveRight>
        </Above>
        <div style={{ margin: "13px" }}>다른 캐릭터들 보러 가기</div>
        <img src={DownArrow} alt="downarrow" />
        <Blank />
        <Fade>
          <MiddleBottom>
            <img src={UpArrow} alt="uparrow" />
            <div style={{ margin: "13px" }}>내 캐릭터 보러 가기</div>
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
