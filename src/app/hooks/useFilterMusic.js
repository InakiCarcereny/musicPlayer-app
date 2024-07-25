import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { useSelector } from "react-redux";

export function useFilterMusic () {
  const { filters, setFilters } = useContext(FiltersContext)
  const favorites = useSelector(state => state.favorites)

  //const filterMusic = ( music ) => {
    //const filteredMusic = music.filter((music) => {
      //return (
        //music.category === filters.category &&
        //(filters.category === 'all' || filters.category === 'song')
      //)
    //})
    //return filteredMusic

    const filterMusic = favorites.filter((music) => {
      return (
        music.category === filters.category &&
        (filters.category === 'all' || filters.category === 'song')
      )
    })

    return { filterMusic, setFilters }
  }