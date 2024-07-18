import { useDispatch } from "react-redux"
import { addFavorite } from "./favoritesSlice"

export function useFavoritesActions () {
  const dispatch = useDispatch()

  const addFavorites = ({ song }) => dispatch(addFavorite({ song }))

  return { addFavorite: addFavorites }
}