import { HearthIcon } from "../icons/HearthIcon";
import { HearthIconFilled } from "../icons/HearthIconFilled";
import { PlayIcon } from "../icons/PlayIcon";

export function SongFavorites ( { title, artists, cover, number, isFavorite, removeFavorite } ) {

  return (
    <li key={number} className="flex items-center justify-between gap-4 py-2 px-2 rounded-lg hover:bg-gray-100">
    <div className="flex items-center gap-4">
      <img 
      className="w-[60px] h-[60px] rounded-lg"
      src={cover} 
      alt={title} />

      <div className="flex flex-col">
        <span className="font-medium text-indigo-500">{title}</span>
        <p className="text-xs text-gray-500 font-semibold">{artists}</p>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <span
      className="cursor-pointer"
      onClick={() => removeFavorite({indice: number})}>
        {
          isFavorite
          ? <HearthIconFilled className="text-gray-500" />
          : <HearthIcon />
        }
      </span>
      <span>
        <PlayIcon />
      </span>
    </div>
  </li>
  )
}