import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import CharacterLogo from "../../imgs/characterLogo.svg";

const StyleContainer = styled.div`
  overflow: hidden;
  body {
    margin: 0;
    padding: 0;
  }

  display: flex;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60px;
`;

const Character = styled.img`
  width: 28px;
  height: 48px;
`;

export default function Slider() {
  return (
    <StyleContainer>
      <Sidebar>
        <Character src={CharacterLogo} alt="캐릭터 로고" />
      </Sidebar>

      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
    </StyleContainer>
  );
}
