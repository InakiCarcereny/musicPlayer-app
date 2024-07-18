import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer