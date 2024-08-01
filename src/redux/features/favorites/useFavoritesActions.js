import { useDispatch } from "react-redux"
import { addFavorite, removeFavorite, setFavorite } from "./favoritesSlice"

export function useFavoritesActions () {
  const dispatch = useDispatch()

  const addFavorites = ({ song }) => dispatch(addFavorite({ song }))

  const removeFavorites = (indice) => dispatch(removeFavorite({indice}))

  const setFavorites = (favorites) => dispatch(setFavorite(favorites))

  return { addFavorite: addFavorites, removeFavorite: removeFavorites, setFavorite: setFavorites }
}