import { atom } from 'recoil';

// playlist section
export const playlistState = atom({
  key: "playlistState",
  default: null,
})
export const playlistIdState = atom({
  key: "playlistIdState",
  default: "0aBwJy58RJB94jhyq3dHho"
})
// songs section
export const songState = atom({
  key: "songState",
  default: null,
})
export const songIdSate = atom({
  key: "songId",
  default: null,
})