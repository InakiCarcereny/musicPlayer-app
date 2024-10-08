import { configureStore } from '@reduxjs/toolkit'
import  albumsReducer  from './features/albums/almbumsSlice'
import  playlistsReducer  from './features/playlists/playlistsSlice'
import  favoritesReducer  from './features/favorites/favoritesSlice'
import  recentSongsReducer  from './features/recentsongs/recentSongsSlice'
import  playerReducer  from './features/player/playerSlice'

const persistanceMiddleware = store => next => action => {
  next(action)
  localStorage.setItem('redux_state', JSON.stringify(store.getState()))
  //console.log(playlists)
}

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
    playlists: playlistsReducer,
    recentSongs: recentSongsReducer,
    favorites: favoritesReducer,
    player: playerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceMiddleware)
})