import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const recentSongsSlice = createSlice({
  name: 'recentSongs',
  initialState,
  reducer: {
    addRecentSong: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addRecentSong } = recentSongsSlice.actions

export default recentSongsSlice.reducer