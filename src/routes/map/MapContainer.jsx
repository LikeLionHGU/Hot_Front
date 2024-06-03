import React, { useState, useEffect } from "react";
import { Map, useMap, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

import SideBar from "../../components/SideBar.jsx";
import firePoint from "../../imgs/firePoint.svg";
import nonFirePoint from "../../imgs/nonFirePoint.svg";

function FirePoints({ score }) {
  const totalPoints = 5;
  const firePoints = Array(score).fill(firePoint);
  const nonFirePoints = Array(totalPoints - score).fill(nonFirePoint);

  return (
    <div>
      {firePoints.map((src, index) => (
        <img key={`fire-${index}`} src={src} alt="불점" />
      ))}
      {nonFirePoints.map((src, index) => (
        <img key={`nonfire-${index}`} src={src} alt="비 불점" />
      ))}
    </div>
  );
}

const data = [
  {
    content: <div style={{ color: "#000" }}>그레이스홀</div>,
    latlng: { lat: 36.10240728030978, lng: 129.3819895660373 },
  },

  {
    content: <div style={{ color: "#000" }}>닭칼국수</div>,
    latlng: { lat: 36.09931365660396, lng: 129.39997835387143 },
  },
  {
    content: <div style={{ color: "#000" }}>더가든파티</div>,
    latlng: { lat: 36.0111163119898, lng: 129.363948229105 },
  },
  {
    content: <div style={{ color: "#000" }}>동순관</div>,
    latlng: { lat: 36.0111163119898, lng: 129.363948229105 },
  },
];

const StyleContainer = styled.div`
  overflow: hidden;
  body {
    margin: 0;
    padding: 0;
  }

  display: flex;
`;

const score = 3;

export default function MapContainer() {
  // 인포윈도우 Open 여부를 저장
  // 현 위치 찍기. 일단 카카오 본사 위치
  const [currentPosition, setCurrentPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setCurrentPosition({ lat, lng });
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

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap();
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
      setIsOpen(!isOpen);
    };
    // const [isVisible, setIsVisible] = useState(false);
    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        // onClick={(marker) => map.panTo(marker.getPosition())}
        // onMouseOver={() => setIsVisible(true)}
        // onMouseOut={() => setIsVisible(false)}

        onClick={(marker) => {
          map.panTo(marker.getPosition());
          handleIsOpen();
        }}
        image={{
          src: "https://raw.githubusercontent.com/LikeLionHGU/Hot_Front/6d359b4c9a92ef99cf7abe47149b0ffadba76aaf/src/imgs/marker.svg",
          size: { width: 22, height: 32 }, // 마커이미지의 크기입니다
          options: {
            offset: {
              x: 11,
              y: 32,
            },
          },
        }}
      >
        {isOpen && (
          <>
            {content}
            {/* <img src={firePoint} alt="불점" />
            <img src={nonFirePoint} alt="불점" /> */}
            <FirePoints score={score} />
            <div>리뷰 : 00</div>
            <div>주소...</div>
          </>
        )}
      </MapMarker>
    );
  };

  return (
    <StyleContainer>
      <SideBar />

      <Map center={currentPosition} style={{ width: "100vw", height: "100vh" }}>
        {/* <MapMarker
          position={currentPosition}
          image={{
            src: "https://raw.githubusercontent.com/LikeLionHGU/Hot_Front/6d359b4c9a92ef99cf7abe47149b0ffadba76aaf/src/imgs/marker.svg",
            size: {
              width: 22,
              height: 32,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 10,
                y: 60,
              },
            },
          }}
        ></MapMarker> */}
        {data.map((value) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
            position={value.latlng}
            content={value.content}
          />
        ))}
      </Map>
    </StyleContainer>
  );
}
