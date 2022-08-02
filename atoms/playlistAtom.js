import { atom } from 'recoil';

// playlist section
export const playlistState = atom({
  key: "playlistState",
  default: "Chill",
})
export const playlistCoverState = atom({
  key: "playlistCoverState",
  default: undefined
})