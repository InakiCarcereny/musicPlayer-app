import { useDispatch } from "react-redux"
import { addPlaylist } from "./playlistsSlice"
import { removePlaylist } from "./playlistsSlice"

export function usePlaylistActions () {
  const dispatch = useDispatch()

  const addPlaylists = ({ playlistName }) => dispatch(addPlaylist({ playlistName }))

  const removePlaylists = ( indice ) => dispatch(removePlaylist( indice ))

  return { addPlaylist: addPlaylists , removePlaylist: removePlaylists }
}