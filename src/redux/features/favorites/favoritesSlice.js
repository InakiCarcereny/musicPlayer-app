import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducer: {}
})

export const {  } = favoritesSlice.actions

export default favoritesSlice.reducer