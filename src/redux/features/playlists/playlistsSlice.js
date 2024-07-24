import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const playlists = localStorage.getItem('redux_state')
  const persistedPlaylists = JSON.parse(playlists).playlists
  return persistedPlaylists || []
})

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

export const { addPlaylist, removePlaylist } = playlistsSlice.actions
 
export default playlistsSlice.reducer