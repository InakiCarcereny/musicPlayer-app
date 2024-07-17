import { useDispatch } from "react-redux";
import { addRecentSong } from "./recentSongsSlice";

export function useRecentSongsActions () {
  const dispatch = useDispatch()

  const addRecentSongs = ({ song }) => dispatch(addRecentSong({ song }))
  //console.log(addRecentSongs)

  return { addRecentSong: addRecentSongs }
}