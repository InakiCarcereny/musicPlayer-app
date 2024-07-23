import { useDispatch } from "react-redux"
import { addFavorite, removeFavorite } from "./favoritesSlice"

export function useFavoritesActions () {
  const dispatch = useDispatch()

  const addFavorites = ({ song }) => dispatch(addFavorite({ song }))

  const removeFavorites = ( { indice } ) => dispatch(removeFavorite( { indice } ))

  return { addFavorite: addFavorites, removeFavorite: removeFavorites }
}