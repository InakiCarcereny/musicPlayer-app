import { configureStore } from '@reduxjs/toolkit'
import  albumsReducer  from './features/albums/almbumsSlice'
import  playlistsReducer  from './features/playlists/playlistsSlice'

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    playlists: playlistsReducer
  }
})