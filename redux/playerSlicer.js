import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    play: (state, action) => {
      state.value == true
    },
    pause: (state, action) => {
      state.value == false
    },
    // maybe make this the volume value
    volumeValue: (state, action) => {
      state.value == action.payload
    },
  },
})

export const { play, pause, volumeValue } = playerSlice.actions

export default playerSlice.reducer