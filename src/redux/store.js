import { configureStore } from '@reduxjs/toolkit'
import  albumsReducer  from './features/albums/almbumsSlice'
import  playlistsReducer  from './features/playlists/playlistsSlice'

const persistanceMiddleware = store => next => action => {
  next(action)
  const { playlists } = store.getState()
  localStorage.setItem('redux-playlists', JSON.stringify(playlists))
  //console.log(playlists)
}

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    playlists: playlistsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceMiddleware)
})