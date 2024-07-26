import { useDispatch } from "react-redux"
import { pauseSong, playSong } from "./playerSlice"

export function usePlayerActions () {
  const dispatch = useDispatch()

  const playSongs = ({ song}) => dispatch(playSong({ song }))

  const pauseSongs = () => dispatch(pauseSong())

  return { playSong: playSongs, pauseSong: pauseSongs }
}