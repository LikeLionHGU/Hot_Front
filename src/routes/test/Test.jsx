import styled from "styled-components";
import Header from "../../components/header/header";
import { useState } from "react";
import { ReactComponent as Img1 } from "../../imgs/testimg1.svg";
import { ReactComponent as Img2 } from "../../imgs/testimg2.svg";
import { ReactComponent as Img3 } from "../../imgs/testimg3.svg";

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyleQuestion = styled.div`
  align-items: center;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 32px;
  height: 84px;
  margin-top: 58px;
  margin-bottom: 100px;
`;

const QuestionBox = styled.div`
  display: flex;
  justify-content: center;
  display: block;
`;

const QText = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
`;

const AnswerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const Agree = styled.h5`
  font-size: 16px;
`;

const Answer = styled.button`
  margin-left: 20px;
  margin-right: 20px;
`;

const Img = styled.div`
  position: absolute;
`;

const Image1 = styled.div`
  position: absolute;
  top: 177px;
  left: -15%;
`;

const Image2 = styled.div`
  position: absolute;
  top: 1080px;
  right: -5%;
`;

const Image3 = styled.div`
  position: absolute;
  bottom: -3000px;
  left: 1%;
`;

const ResultBtn = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;
  margin-top: 167px;
  width: 312px;
  height: 68px;
  border-radius: 8px;
  border: 0px;
  font-size: 20px;
  color: white;
  background-color: ${(props) => (props.disabled ? "#CCCCCC" : "#E55936")};
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

export default function Main() {
  const [selectedNum, setselectedNum] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const sizes = [1, 2, 3, 4, 5];

  const question = [
    "매운 것을 먹을 때 눈에서도 땀이 난다.",
    "청양고추도 고추장에 찍어 먹는다",
    "집에 붉닭 소스가 있다",
    "김치도 물에 헹궈서 먹는다",
    "매운 음식 때문에 응급실에 실려가도 매운 음식이 땡긴다",
    "하루 3끼 매운 음식을 먹을 수 있다",
    "매운 음식을 먹으면 스트레스가 풀린다",
    "벌칙으로 까나리와 땡초를 고른다면 땡초가 낫다",
    "내 이상형은 매운 음식을 잘 먹는 사람이다",
    "매운 것을 잘먹는다는 소리를 자주 듣는다",
    "친구들이 매운 음식을 먹으러 가자고 하면 불안하다",
    "나는 맵기로 유명한 맛집을 다니는 것을 좋아한다 ",
    "매운 음식을 주 2회 이상 먹는다",
  ];

  const handleSelect = (questionIndex, size) => {
    const updatedselectedNum = [...selectedNum];
    updatedselectedNum[questionIndex] = size;
    setselectedNum(updatedselectedNum);
    console.log(updatedselectedNum);
  };

  const calculateSize = (index) => {
    const sizeMap = [52, 36, 24, 36, 52];
    return sizeMap[index];
  };

  const isAllQuestionsAnswered = selectedNum.every((size) => size !== null);

  return (
    <StyleContainer>
      <Header></Header>
      {[...Array(13)].map((_, questionIndex) => (
        <StyleQuestion key={questionIndex}>
          <QuestionBox>
            <QText>{question[questionIndex]}</QText>
          </QuestionBox>
          <AnswerBox>
            <Agree>미동의</Agree>
            {sizes.map((size, index) => (
              <Answer
                key={size}
                style={{
                  width: `${calculateSize(index)}px`,
                  height: `${calculateSize(index)}px`,
                  borderRadius: "50%",
                  border: `2px solid #F6B95B`,
                  backgroundColor:
                    selectedNum[questionIndex] === size ? `#F6B95B` : `white`,
                }}
                onClick={() => handleSelect(questionIndex, size)}
              ></Answer>
            ))}
            <Agree>동의</Agree>
          </AnswerBox>
        </StyleQuestion>
      ))}
      <Image1>
        <Img1 />
      </Image1>
      <Image2>
        <Img2 />
      </Image2>
      <Image3>
        <Img3 />
      </Image3>
      <ResultBtn disabled={!isAllQuestionsAnswered}>결과 보러가기</ResultBtn>
    </StyleContainer>
  );
}
