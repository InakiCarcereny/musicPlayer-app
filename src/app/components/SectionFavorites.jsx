'use client'

import { useFavoritesActions } from "../../redux/features/favorites/useFavoritesActions";
import { usePlaylistActions } from "../../redux/features/playlists/usePlaylistActions";
import { FolderIcon } from "../icons/FolderIcon";
import { HearthIcon } from "../icons/HearthIcon";
import { HearthIconFilled } from "../icons/HearthIconFilled";
import { TrashIcon } from "../icons/TrashIcon";
import { Filters } from "./Filters";
import { useSelector } from "react-redux"

export function SectionFavorites () {
  const playlists = useSelector(state => state.playlists)
  const favorites = useSelector(state => state.favorites)
  //console.log(playlists)
  const { removePlaylist } = usePlaylistActions() 
  
  const { removeFavorite } = useFavoritesActions()

  const checkFavorite = (song) => { 
    return favorites.some(favorite => favorite.song.number === song.number)
   }

  return (
    <section className="mt-6">
      <Filters />

      <ul className="mt-8 flex flex-col gap-4">
        {
          playlists.map((playlists) => {

            return (
              <li key={playlists.playlistName} className="flex items-center justify-between gap-4 py-2 px-2 rounded-lg hover:bg-gray-100">
                <div className="flex items-center gap-4">
                  <FolderIcon />
                  <span className="font-medium text-indigo-500">{playlists.playlistName}</span>
                </div>

                <button onClick={() => removePlaylist(playlists.indice)}>
                  <TrashIcon /> 
                </button>
              </li>
            )
          })
        }
      </ul>

      <ul className="mt-4 flex flex-col gap-4 mb-24">
        {
          favorites.map(({song: {title, artists, cover, number}}) => {
            const isFavorite = checkFavorite({title, artists, cover, number})

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

                <span
                className="cursor-pointer"
                onClick={() => removeFavorite({indice : number})}>
                  {
                    isFavorite
                    ? <HearthIconFilled className="text-gray-500" />
                    : <HearthIcon />
                  }
                </span>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}