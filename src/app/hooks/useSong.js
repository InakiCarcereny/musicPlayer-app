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

    const newRecentSongs = [...recentSongs]

    if (newRecentSongs.length === 5) {
      newRecentSongs.shift()
    } else {
      newRecentSongs.push(addRecentSong({ song: { title, artists, cover, number } }))
    }
  }

  return { icon, handleSong, setPlayingId }
}