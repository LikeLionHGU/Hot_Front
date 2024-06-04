import styled from "styled-components";
import Header from "../../components/header/header";
import Result from "../TestResult";
import Loading from "../loading/Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Nextbtn } from "../../imgs/nextbtn.svg";
import { ReactComponent as Prevbtn } from "../../imgs/prevbtn.svg";
import { ReactComponent as Resultbtn } from "../../imgs/ramenresultbtn.svg";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TestContainer = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: 60px;
  height: 60px;
  margin-top: 70px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Content = styled.div`
  margin-left: 233px;
  margin-right: 233px;
`;

const Question = styled.h1`
  margin-top: 82px;
  color: #410a0a;
  font-size: 20px;
  margin-bottom: 50px;
  font-family: Dream3;
`;

const Title = styled.div`
  font-size: 30px;
  color: #410a0a;
  margin-bottom: 40px;
  font-family: Dream5;
  font-weight: bold;
`;

const AnswerContainter = styled.div`
  margin: auto;
  text-align: center;
`;

const Answer = styled.div`
  width: 397px;
  height: 63px;
  color: #410a0a;
  font-family: Dream5;
  border: 2px solid #f6b95b;
  border-radius: 12px;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const ques = ["<라면>", "<마라탕>", "<불닭>", "<엽떡>"];
const ans = [
  ["진라면 순한맛", "진라면 매운맛", "신라면", "열라면", "틈새라면"],
  [
    "0단계 (담백한 맛)",
    "1단계 (순한맛)",
    "2단계 (매운맛)",
    "3단계 (아주 매운맛)",
    "4단계 (상상초월 매운맛)",
  ],
  [
    "불닭에게 위장이 상처 받은 적 있다",
    "4가지 치즈 불닭",
    "까르보 불닭",
    "오리지널 불닭",
    "핵 불닭",
  ],
  ["착한맛", "초보맛", "덜 매운맛", "오리지널", "매운맛"],
];

export default function RamenTest() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [selectedNum, setselectedNum] = useState([null, null, null, null]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (questionIndex, size) => {
    const updatedselectedNum = [...selectedNum];
    updatedselectedNum[questionIndex] = size;
    setselectedNum(updatedselectedNum);
    console.log(updatedselectedNum);
  };

  const handleNext = () => {
    if (currentIndex < ques.length - 1) {
      setcurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setcurrentIndex(currentIndex - 1);
    }
  };

  const isAllQuestionsAnswered = selectedNum.every((size) => size !== null);

  const handleResult = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(true);
      navigate("/result");
    }, 4000); // 4초 동안 로딩 화면
  };

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <>
          <Header />
          <TestContainer>
            <Btn
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{
                display: currentIndex === 0 ? "none" : "block",
              }}
            >
              <Prevbtn />
            </Btn>
            <Content>
              <Question>내가 먹을 수 있는 맵기 정도는?</Question>
              <Title>{ques[currentIndex]}</Title>
              <AnswerContainter>
                {ans[currentIndex].map((answer, index) => (
                  <Answer
                    key={index}
                    style={{
                      backgroundColor:
                        selectedNum[currentIndex] === index
                          ? `#F6B95B`
                          : `white`,
                    }}
                    onClick={() => handleSelect(currentIndex, index)}
                  >
                    {answer}
                  </Answer>
                ))}
              </AnswerContainter>
            </Content>
            {currentIndex === ques.length - 1 ? (
              <Btn disabled={!isAllQuestionsAnswered} onClick={handleResult}>
                <Resultbtn />
              </Btn>
            ) : (
              <Btn onClick={handleNext}>
                <Nextbtn />
              </Btn>
            )}
          </TestContainer>
        </>
      )}
    </>
  );
}