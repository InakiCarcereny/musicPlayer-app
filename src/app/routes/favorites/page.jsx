import { HeaderFavorites } from "@/app/components/HeaderFavorites";
import { SectionFavorites } from "@/app/components/SectionFavorites";

export default function Favorites() {
  return (
    <div className="flex flex-col flex-1">
      <HeaderFavorites />

      <SectionFavorites />
    </div>
  )
}