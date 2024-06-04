import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CharacterLogo from "../imgs/characterLogo.svg";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60px;
  height: 100%;
  box-shadow: 5px black;
`;

const Character = styled.img`
  width: 28px;
  height: 48px;
`;

export default function SideBar() {
  return (
    <div>
      <Sidebar>
        <Character src={CharacterLogo} alt="캐릭터 로고" />
      </Sidebar>
    </div>
  );
}
