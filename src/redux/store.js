import { configureStore } from '@reduxjs/toolkit'
import  albumsReducer  from './features/almbumsSlice'

export const store = configureStore({
  reducer: {
    albums: albumsReducer
  }
})