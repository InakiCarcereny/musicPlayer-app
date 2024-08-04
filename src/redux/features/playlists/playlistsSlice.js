import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const playlists = window.localStorage.getItem('redux_state')
  const persistedPlaylists = JSON.parse(playlists).playlists
  return persistedPlaylists || []
})

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    addPlaylist: (state, action) => {
      const ID = crypto.randomUUID()
      return [...state, { id: ID, ...action.payload }]
    },
    removePlaylist: (state, action) => {
      return state.filter(playlist => playlist.id !== action.payload.id)
  }
}
})

export const { addPlaylist, removePlaylist } = playlistsSlice.actions
 
export default playlistsSlice.reducer