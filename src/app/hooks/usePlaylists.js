import { useState } from "react"
import { usePlaylistActions } from "../../redux/features/playlists/usePlaylistActions"

export function usePlaylists () {
  const [clicked, setClicked] = useState(false)
  const [playlistName, setPlaylistName] = useState("")

  const { addPlaylist } = usePlaylistActions()

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addPlaylist({ playlistName })
    setPlaylistName("")
    //console.log(addPlaylist, "addPlaylist")
    //console.log(playlistName, "playlistName")
  }

  return { playlistName, handlePlaylistName, clicked, handleClick, handleSubmit}
}