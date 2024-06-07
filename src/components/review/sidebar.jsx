// https://ji-u.tistory.com/22
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "./mapLogo";
import NonLogin from "../review/nonLogin";
import OnLogin from "../review/onLogin";
import CompleteReview from "../review/completeReview";

import LeftArrow from "../../imgs/goLeftArrow.svg";
import RightArrow from "../../imgs/goRightArrow.svg";

const Container = styled.div`
  background-color: white;
`;

const Side = styled.div`
  background-color: white;
  /* border-right: 4px solid #202020; */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0px;
  transition: 0.4s ease;
  height: 100%;
  box-shadow: 1px 0px 5px 0px #c0c0c0;
  z-index: 99;
`;

const OpenBtn = styled.button`
  position: relative;
  left: 300px;
  top: 45%;
  width: 20px;
  height: 40px;
  z-index: 99;
  transition: 0.8s ease;
  border: 0px;
  background-color: white;
  box-shadow: inset 5px 0 5px -5px #c0c0c0, 0 -5px 5px -5px #c0c0c0,
    0 5px 5px -5px #c0c0c0, 5px 0 5px -5px #c0c0c0;
  border-radius: 0px 4px 4px 0px;

  /* border-radius: 40px; */
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const Contents = styled.div`
  padding: 40px 40px 0 20px;
  position: relative;
  width: 100%;
`;

const Sidebar = ({ width = 300, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 60) {
      setX(60);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    // container
    <Container>
      <Side
        ref={side}
        // sidebar
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition + 60}px)`,
        }}
      >
        {/* <NonLogin/> 로그인이 안됐을 때 */}
        {/* <OnLogin /> 로그인 했을 때 */}
        {/* <CompleteReview/> 리뷰 작성 완료 */}

        {isOpen ? <CompleteReview /> : <SideBar />}
        <OpenBtn onClick={() => toggleMenu()}>
          {isOpen ? (
            <img src={LeftArrow} alt="" />
          ) : (
            <img src={RightArrow} alt="" />
          )}
        </OpenBtn>
        {/* content */}
        <Contents>{children}</Contents>
      </Side>
    </Container>
  );
};

export default Sidebar;
