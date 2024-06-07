import styled from "styled-components";

import CharacterLogo from "../../imgs/completeReview.svg";
import Font from "../../assets/font.css";
import { reviewState } from "../../atom";
import { completeReviewState } from "../../atom";
import { useRecoilState } from "recoil";

const Sidebar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 75px;
`;

const Character = styled.img`
  margin-top: 210px;
`;

const CheckBtn = styled.button`
  border: 0px;
  border-radius: 4px;

  margin-top: 150px;
  padding: 15px 60px;

  background-color: #f6b95b;
  color: #410a0a;
  font-family: Dream5;

  &:hover {
    cursor: pointer;
  }
`;

export default function CompleteReview() {
  const [reviewUiState, setReviewUiState] = useRecoilState(reviewState);
  const [completeReview, setCompleteReview] =
    useRecoilState(completeReviewState);

  return (
    <Sidebar>
      <SidebarContainer>
        <Character src={CharacterLogo} alt="캐릭터 로고" />
        <CheckBtn
          onClick={
            (() => {
              setReviewUiState(false);
            },
            () => {
              setCompleteReview(false);
            })
          }
        >
          확인
        </CheckBtn>
      </SidebarContainer>
    </Sidebar>
  );
}
