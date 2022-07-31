import { atom } from 'recoil';

// playlist section
export const playlistState = atom({
  key: "playlistState",
  default: "Chill",
})
export const playlistSongsState = atom({
  key: "playlistSongsState",
  default: undefined
})