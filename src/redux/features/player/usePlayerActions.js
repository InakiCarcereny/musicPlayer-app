import { useDispatch } from "react-redux"
import { pauseSong, playSong, setCurrentSong, setPlaying } from "./playerSlice"

export function usePlayerActions () {
  const dispatch = useDispatch()

  const playSongs = () => dispatch(playSong())

  const pauseSongs = () => dispatch(pauseSong())

  const setIsPlaying = (playing) => dispatch(setPlaying(playing))

  const setIsCurrentSong = ({ song }) => dispatch(setCurrentSong({ song }))

  return { playSong: playSongs, pauseSong: pauseSongs, setPlaying: setIsPlaying, setCurrentSong: setIsCurrentSong }
}