import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './playerSlicer'

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
})