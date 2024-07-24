import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilterMusic () {
  const { filter, setFilter } = useContext(FiltersContext)

  const filerMusic = (filter) => {
    setFilter(filter)
  }

  return { filter, setFilter: filerMusic }
}