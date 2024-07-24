import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const recentSongs = localStorage.getItem('redux_state')
  const persistedRecentSongs = JSON.parse(recentSongs).recentSongs
  return persistedRecentSongs || []
})

export const recentSongsSlice = createSlice({
  name: 'recentSongs',
  initialState,
  reducers: {
    addRecentSong: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addRecentSong } = recentSongsSlice.actions

export default recentSongsSlice.reducer