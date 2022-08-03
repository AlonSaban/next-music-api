import { atom } from 'recoil';

// songs section
export const songState = atom({
  key: "songState",
  default: [{
    playingState: false,
    mutedState: false
  }],
})

export const songSearchState = atom({
  key: "songSearchState",
  default: null,
})

export const songIdState = atom({
  key: "songIdState",
  default: null,
})