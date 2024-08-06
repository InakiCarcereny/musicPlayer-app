import { useDispatch } from "react-redux";
import { addRecentSong, updateRecentSong } from "./recentSongsSlice";

export function useRecentSongsActions () {
  const dispatch = useDispatch()

  const addRecentSongs = ({ song }) => dispatch(addRecentSong({ song }))

  const updateRecentSongs = (song) => dispatch(updateRecentSong({ song }))
  //console.log(addRecentSongs)

  return { addRecentSong: addRecentSongs, updateRecentSong: updateRecentSongs }
}