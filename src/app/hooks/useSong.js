import { PauseIcon } from "../icons/PauseIcon"
import { PlayIcon } from "../icons/PlayIcon"
import { useRecentSongsActions } from "@/redux/features/recentsongs/useRecentSongsActions"
import { usePlayerActions } from "@/redux/features/player/usePlayerActions"
import { useSelector } from "react-redux"

export function useSong ({ title, artists, cover, number, albumId }) {
  const player = useSelector(state => state.player)
  const recentSongs = useSelector(state => state.recentSongs)

  const { addRecentSong, updateRecentSong } = useRecentSongsActions()

  const { playSong, pauseSong, setPlaying, setCurrentSong } = usePlayerActions()

  const setPlayingId = player.playing && player.currentSong.song.id === number

  const icon = setPlayingId ? <PauseIcon /> : <PlayIcon />

  const handleSong = () => {
    setCurrentSong({
      song: {
        id: number,
        title: title,
        artists: artists,
        cover: cover,
        albumId: albumId
      }
    })
    
    setPlaying(setPlayingId)
    
    setPlayingId 
    ? pauseSong() 
    : playSong()

    addRecentSong({ song: { title, artists, cover, number, albumId } })
  }

  return { icon, handleSong, setPlayingId }
}