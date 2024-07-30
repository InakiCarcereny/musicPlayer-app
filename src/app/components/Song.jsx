import { useFavoritesActions } from "../../redux/features/favorites/useFavoritesActions"
import { useSong } from "../hooks/useSong"
import { HearthIcon } from "../icons/HearthIcon"
import { toast } from "sonner"
import { HearthIconFilled } from "../icons/HearthIconFilled"

export function Song ({ title, artists, cover, number, isFavorite, index }) {
  const { icon, handleSong } = useSong({ title, artists, cover, number })

  const { addFavorite, removeFavorite } = useFavoritesActions()

  const handleFavorite = () => {
    toast.success(`${title} added to your favorites`)
    addFavorite({ song: { title, artists, cover, number } })
  }

  return (
    <li className="flex items-center justify-between hover:bg-gray-100 hover:rounded-lg px-2 py-2">
      <div className="flex items-center gap-6">
        <span className="font-semibold">{index + 1}</span>
        <img 
        className="w-[60px] h-[60px] rounded-lg"
        src={cover}
        alt={title} />
        
        <div className="flex flex-col gap-2">
          <span className="font-medium text-indigo-500">
            {title}
          </span>
          <span className="text-xs text-gray-500 font-semibold">
            {artists}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => {
          isFavorite 
          ? removeFavorite({indice: number}) 
          : handleFavorite()
        }}>
          {
          isFavorite
          ? <HearthIconFilled />
          : <HearthIcon /> 
          }
        </button>
        <button onClick={handleSong} className=" cursor-pointer">
          {icon}
        </button>
      </div>
    </li>
  )
}