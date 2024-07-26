import { useState } from "react"
import { PauseIcon } from "../icons/PauseIcon"
import { PlayIcon } from "../icons/PlayIcon"
import { useRecentSongsActions } from "@/redux/features/recentsongs/useRecentSongsActions"
import { usePlayerActions } from "@/redux/features/player/usePlayerActions"

export function useSong ({ title, artists, cover, number }) {
  const [playing, setPlaying] = useState(false)
  const icon = playing ? <PauseIcon /> : <PlayIcon />

  const { addRecentSong } = useRecentSongsActions()

  const { playSong, pauseSong } = usePlayerActions()

  const handleSong = () => {
    setPlaying(!playing)
    addRecentSong({ song: { title, artists, cover, number } })
    //console.log(addRecentSong, "addRecentSong")
    playing ? pauseSong() : playSong({ song: { title, artists, cover, number } })
  }

  return { icon, handleSong}
}