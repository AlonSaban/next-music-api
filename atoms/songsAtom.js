import { atom } from 'recoil';

// songs section
export const songState = atom({
  key: "songState",
  default: [{
    playingState: false,
    mutedState: false
  }],
})

export const songLenght = atom({
  key: "songLenght",
  default: null,
})

export const songIdSate = atom({
  key: "songIdState",
  default: null,
})