import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    addPlaylist: (state, action) => {
      state.push(action.payload)
    },
    removePlaylist: (state, action) => {
      state.splice(action.payload, 1)
  }
}
})

export const { addPlaylist } = playlistsSlice.actions
 
export default playlistsSlice.reducer