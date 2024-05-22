/*global kakao*/
import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

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

export default function MapContainer() {
  const [position, setPosition] = useState({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setPosition({ lat, lng });
        },
        () => {
          alert("위치 정보를 가져오는데 실패했습니다.");
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        }
      );
    } else {
      alert("Geolocation을 사용할 수 없습니다.");
    }
  }, []);

  return (
    <StyleContainer>
      <Sidebar>
        <Character src={CharacterLogo} alt="캐릭터 로고" />
      </Sidebar>

      <Map center={position} style={{ width: "100vw", height: "100vh" }}>
        <MapMarker position={position}>
          <div style={{ color: "#000" }}>여기에 계신가요?!</div>
        </MapMarker>
      </Map>
    </StyleContainer>
  );
}
