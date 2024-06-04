import styled from "styled-components";
import Header from "../../components/header/header";
import Result from "../result/TestResult";
import Loading from "../loading/Loading";
import ProgressBar from "react-scroll-progress-bar";
import "./test.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Img1 } from "../../imgs/testimg1.svg";
import { ReactComponent as Img2 } from "../../imgs/testimg2.svg";
import { ReactComponent as Img3 } from "../../imgs/testimg3.svg";

const StyleContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 144.5px;
`;

const StyleQuestion = styled.div`
  align-items: center;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 32px;
  height: 84px;
  margin-top: 58px;
  margin-bottom: 100px;

  color: #410a0a;
  font-family: Dream5;
  font-size: 20px;
`;

const QuestionBox = styled.div`
  display: flex;
  justify-content: center;
  display: block;
`;

const QText = styled.div`
  margin-top: 0px;
  margin-bottom: 40px;
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

const Agree = styled.div`
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
  z-index: -3;
`;

const Image2 = styled.div`
  position: absolute;
  top: 1080px;
  right: -5%;
  z-index: -3;
`;

const Image3 = styled.div`
  position: absolute;
  bottom: -3000px;
  left: 1%;
  z-index: -3;
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
  font-family: Dream5;
  color: white;
  background-color: ${(props) => (props.disabled ? "#CCCCCC" : "#E55936")};
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [selectedNum, setSelectedNum] = useState(Array(13).fill(null));
  const sizes = [1, 2, 3, 4, 5];

  const question = [
    "1. 나는 매운 것을 먹을 때 눈에서도 땀이 난다",
    "2. 청양고추도 고추장에 찍어 먹는다",
    "3. 집에 붉닭 소스가 있다",
    "4. 김치도 물에 헹궈서 먹는다",
    "5. 매운 음식 때문에 응급실에 실려가도 매운 음식이 땡긴다",
    "6. 하루 3끼 매운 음식을 먹을 수 있다",
    "7. 매운 음식을 먹으면 스트레스가 풀린다",
    "8. 벌칙으로 까나리와 땡초를 고른다면 땡초가 낫다",
    "9. 내 이상형은 매운 음식을 잘 먹는 사람이다",
    "10. 매운 것을 잘먹는다는 소리를 자주 듣는다",
    "11. 친구들이 매운 음식을 먹으러 가자고 하면 불안하다",
    "12. 나는 맵기로 유명한 맛집을 다니는 것을 좋아한다 ",
    "13. 매운 음식을 주 2회 이상 먹는다",
  ];

  const handleSelect = (questionIndex, size) => {
    const updatedSelectedNum = [...selectedNum];
    updatedSelectedNum[questionIndex] = size;
    setSelectedNum(updatedSelectedNum);
    console.log(updatedSelectedNum);
  };

  const calculateSize = (index) => {
    const sizeMap = [52, 36, 24, 36, 52];
    return sizeMap[index];
  };

  const isAllQuestionsAnswered = selectedNum.every((size) => size !== null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ramentest");
  };

  return (
    <StyleContainer>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <Header isHeader="test" />
          <ProgressBar
            margin={70}
            height={14}
            bgcolor="#BF2202"
            duration="0.1"
          />
          {[...Array(13)].map((_, questionIndex) => (
            <StyleQuestion key={questionIndex}>
              <QuestionBox>
                <QText>{question[questionIndex]}</QText>
              </QuestionBox>
              <AnswerBox>
                <Agree>매우 그렇지 않다</Agree>
                {sizes.map((size, index) => (
                  <Answer
                    key={size}
                    style={{
                      width: `${calculateSize(index)}px`,
                      height: `${calculateSize(index)}px`,
                      borderRadius: "50%",
                      border: `2px solid #F6B95B`,
                      backgroundColor:
                        selectedNum[questionIndex] === size
                          ? `#F6B95B`
                          : `transparent`,
                    }}
                    onClick={() => handleSelect(questionIndex, size)}
                  ></Answer>
                ))}
                <Agree>매우 그렇다</Agree>
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
          <ResultBtn disabled={!isAllQuestionsAnswered} onClick={handleClick}>
            다음으로
          </ResultBtn>
        </>
      )}
    </StyleContainer>
  );
}
