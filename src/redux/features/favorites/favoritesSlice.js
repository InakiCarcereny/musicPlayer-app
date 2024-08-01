import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const favorites = localStorage.getItem('redux_state')
  const persistedFavorites = JSON.parse(favorites).favorites
  return persistedFavorites || []
})

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload)
    },
    removeFavorite: (state, action) => {
      return state.filter(favorite => favorite.song.number !== action.payload.indice)
    },
    setFavorite: (state, action) => {
      return action.payload
    }
  }
})

export const { addFavorite, removeFavorite, setFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer