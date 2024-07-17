import { useState } from "react"
import { usePlaylistActions } from "../../redux/features/playlists/usePlaylistActions"
import { toast } from "sonner"

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
    toast.success("Playlist created successfully")
  }

  return { playlistName, handlePlaylistName, clicked, handleClick, handleSubmit}
}