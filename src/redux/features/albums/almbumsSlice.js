import { createSlice } from '@reduxjs/toolkit'
import albums  from '../../../app/data/songs.json'

const album = albums.albums

const initialState = {
  albums: album
}

//console.log(albums)

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {}
})

export default albumsSlice.reducer