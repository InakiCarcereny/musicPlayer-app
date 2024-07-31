import { useDispatch } from "react-redux"
import { addPlaylist } from "./playlistsSlice"
import { removePlaylist } from "./playlistsSlice"

export function usePlaylistActions () {
  const dispatch = useDispatch()

  const addPlaylists = ( name ) => dispatch(addPlaylist({name}))

  const removePlaylists = ( indice ) => dispatch(removePlaylist({indice}))

  return { addPlaylist: addPlaylists , removePlaylist: removePlaylists }
}