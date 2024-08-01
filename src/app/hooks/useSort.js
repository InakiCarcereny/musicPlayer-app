import { useFavoritesActions } from "@/redux/features/favorites/useFavoritesActions"
import { useState } from "react"
import { useSelector } from "react-redux"
import { ArrowsSortFilled } from "../icons/ArrowsSortFilled"
import { ArrowsSort } from "../icons/ArrowsSort"

export function useSort () {
  const [icon, setIcon] = useState(false)
  const favorites = useSelector(state => state.favorites)
  const { setFavorite } = useFavoritesActions()

  const newFavorites = [...favorites]
  const sortedFavorites = newFavorites.sort((a, b) => a.song.title.localeCompare(b.song.title))

  const icons = icon ? <ArrowsSortFilled /> : <ArrowsSort />

  const handleSort = () => {
    setFavorite(sortedFavorites)
    setIcon(!icon)
  }

  return { icons, handleSort }
}