import { useState } from "react"
import { PauseIcon } from "../icons/PauseIcon"
import { PlayIcon } from "../icons/PlayIcon"
import { useRecentSongsActions } from "@/redux/features/recentsongs/useRecentSongsActions"
import { usePlayerActions } from "@/redux/features/player/usePlayerActions"
import { useSelector } from "react-redux"

export function useSong ({ title, artists, cover, number }) {
  const player = useSelector(state => state.player)

  const { addRecentSong } = useRecentSongsActions()

  const { playSong, pauseSong, setPlaying, setCurrentSong } = usePlayerActions()

  const setPlayingId = player.playing && player.currentSong.song.id === number

  const icon = setPlayingId ? <PauseIcon /> : <PlayIcon />

  const handleSong = () => {
    setCurrentSong({
      song: {
        id: number
      }
    })
    setPlaying(setPlayingId)
    addRecentSong({ song: { title, artists, cover, number } })
    //console.log(addRecentSong, "addRecentSong")
    player.playing ? pauseSong() : playSong({ song: { title, artists, cover, number } })
  }

  return { icon, handleSong}
}