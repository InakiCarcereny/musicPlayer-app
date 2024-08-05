import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playing: false,
    currentSong: {
      song: null,
    },
    volume: 0.1
  }

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playSong: (state) => {
      state.playing = true
    },
    pauseSong: (state) => {
      state.playing = false
    },
    setPlaying: (state, action) => {
      state.playing = action.payload
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
    }
  }
})

export const { playSong, pauseSong, setPlaying, setCurrentSong } = playerSlice.actions

export default playerSlice.reducer