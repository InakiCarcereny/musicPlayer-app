import { createContext, useState } from "react"

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    category: 'all'
  })

  return (
    <FiltersContext.Provider value={{
      filter, 
      setFilter}}
      >
      {children}
    </FiltersContext.Provider>
  )
}