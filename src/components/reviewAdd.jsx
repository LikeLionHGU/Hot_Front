import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "./SideBar";

import LeftArrow from "../imgs/goLeftArrow.svg";
import RightArrow from "../imgs/goRightArrow.svg";

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
  left: 360px;
  top: 45%;
  width: 20px;
  height: 40px;
  z-index: 99;
  transition: 0.8s ease;
  border: 0px;
  background-color: white;
  box-shadow: inset 5px 0 5px -5px #c0c0c0, 0 -5px 5px -5px #c0c0c0,
    0 5px 5px -5px #c0c0c0, 5px 0 5px -5px #c0c0c0;

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

const Sidebar = ({ width = 360, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(300);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(300);
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
      {/* {isOpen ? <></> : <SideBar />} */}
      <Side
        ref={side}
        // sidebar
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
        }}
      >
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
