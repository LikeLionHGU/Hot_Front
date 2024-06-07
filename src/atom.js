import { atom } from "recoil";

export const detailState = atom({
  key: "detailState",
  default: false, // 기본값은 사이드바가 닫혀있는 상태
});

export const storeIdState = atom({
  key: "storeIdState",
  default: null, // 기본값은 사이드바가 닫혀있는 상태
});
