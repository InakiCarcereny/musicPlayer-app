import { useState } from "react"

export function usePlaylists () {
  const [clicked, setClicked] = useState(false)
  const [playlistName, setPlaylistName] = useState("")

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value)
  }

  return { playlistName, handlePlaylistName, clicked, handleClick}
}