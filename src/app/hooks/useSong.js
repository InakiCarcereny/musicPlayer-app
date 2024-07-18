import { useState } from "react"
import { PauseIcon } from "../icons/PauseIcon"
import { PlayIcon } from "../icons/PlayIcon"
import { useRecentSongsActions } from "@/redux/features/recentsongs/useRecentSongsActions"

export function useSong ({ title, artists, cover, number }) {
  const [playing, setPlaying] = useState(false)
  const icon = playing ? <PauseIcon /> : <PlayIcon />

  const { addRecentSong } = useRecentSongsActions()

  const handleSong = () => {
    setPlaying(!playing)
    addRecentSong({ song: { title, artists, cover, number } })
    //console.log(addRecentSong, "addRecentSong")
  }

  return { icon, handleSong}
}