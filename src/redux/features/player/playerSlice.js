import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    playing: false,
    currentTime: 0,
    duration: 0,
    volume: 0.2,
    song: []
  }
]

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playSong: (state) => {
      state[0].playing = true
    },
    pauseSong: (state) => {
      state[0].playing = false
    },
  }
})

export const { playSong, pauseSong } = playerSlice.actions

export default playerSlice.reducer