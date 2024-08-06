import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const recentSongsSlice = createSlice({
  name: 'recentSongs',
  initialState,
  reducers: {
    addRecentSong: (state, action) => {
      state.push(action.payload)
    },
    updateRecentSong: (state, action) => {
      return action.payload
    }
  }
})

export const { addRecentSong, updateRecentSong } = recentSongsSlice.actions

export default recentSongsSlice.reducer