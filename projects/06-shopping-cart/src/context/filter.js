import { createContext } from "react";

export const FilterContext = createContext()

export function FiltersProvider ({children}) {
  return (
    <FilterContext.Provider value={{
      category: 'value',
      minPrice: 0
    }}>
      {children}
    </FilterContext.Provider>
  )
}