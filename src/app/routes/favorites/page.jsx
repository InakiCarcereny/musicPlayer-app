'use client'

import { HeaderFavorites } from "@/app/components/HeaderFavorites";
import { SectionFavorites } from "@/app/components/SectionFavorites";
import { FiltersProvider } from "@/app/context/filters";

export default function Favorites() {
  return (

    <FiltersProvider>
      <div className="flex flex-col flex-1">
        <HeaderFavorites />

        <SectionFavorites />
      </div>
    </FiltersProvider>
  )
}