/*global kakao*/
import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

import CharacterLogo from "../../imgs/characterLogo.svg";
import MarkerImage from "../../imgs/marker.svg";
import InfoImage from "../../imgs/infobox.svg";

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

const MarkerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoBox = styled.img`
  margin-bottom: 5px; /* Adjust the space between InfoBox and Marker */
`;

const MarkerImageStyled = styled.img`
  width: 22px;
  height: 32px;
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
        <MapMarker
          position={position}
          image={{
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
        >
          <MarkerWrapper>
            {/* <InfoBox src={InfoImage} alt="InfoBox" /> */}
            <MarkerImageStyled
              src={MarkerImage}
              alt="Marker"
              position={position}
            />
          </MarkerWrapper>
        </MapMarker>
      </Map>
    </StyleContainer>
  );
}
