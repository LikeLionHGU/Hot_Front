import Header from "../components/header/header";
import styled from "styled-components";

import SlibFairyBig from "../imgs/silbifairy_big.svg";
import MaepguSmall from "../imgs/maepgu_small.svg";
import MaepnoseSmall from "../imgs/maepnose_small.svg";
import DownArrow from "../imgs/downArrow.svg";
import UpArrow from "../imgs/upArrow.svg";

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Above = styled.div`
  display: flex;
`;

const AboveLeft = styled.div``;

const AboveRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Bottom = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  /* position: relative; */
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
            <div>5단계 : 실비요정</div>
            <img src={SlibFairyBig} alt="big" />
          </AboveLeft>
          <AboveRight>
            <div>캐릭터 설명</div>
            <button>지도 보러가기</button>
          </AboveRight>
        </Above>
        <div>다른 캐릭터들 보러 가기</div>
        <img src={DownArrow} alt="downarrow" />
        <img src={UpArrow} alt="uparrow" />
        <div>내 캐릭터 보러 가기</div>
        <Bottom>
          <ImgContainer>
            <Flipper>
              <FrontImage src={MaepguSmall} alt="1" />
              <BackImage src={MaepnoseSmall} alt="1" />
            </Flipper>
          </ImgContainer>
          <ImgContainer>
            <Flipper>
              <FrontImage src={MaepguSmall} alt="2" />
              <BackImage src={MaepnoseSmall} alt="2" />
            </Flipper>
          </ImgContainer>
          <ImgContainer>
            <Flipper>
              <FrontImage src={MaepguSmall} alt="3" />
              <BackImage src={MaepnoseSmall} alt="3" />
            </Flipper>
          </ImgContainer>
          <ImgContainer>
            <Flipper>
              <FrontImage src={MaepguSmall} alt="4" />
              <BackImage src={MaepnoseSmall} alt="4" />
            </Flipper>
          </ImgContainer>
        </Bottom>
      </StyleContainer>
    </>
  );
}
