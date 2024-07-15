'use client'

import { usePlaylistActions } from "../../redux/features/playlists/usePlaylistActions";
import { FolderIcon } from "../icons/FolderIcon";
import { TrashIcon } from "../icons/TrashIcon";
import { Filters } from "./Filters";
import { useSelector } from "react-redux"

export function SectionFavorites () {
  const playlists = useSelector(state => state.playlists)
  //console.log(playlists)
  const { removePlaylist } = usePlaylistActions()  

  return (
    <section className="mt-6">
      <Filters />

      <ul className="mt-8 flex flex-col gap-4">
        {
          playlists.map((playlists) => {

            return (
              <li key={playlists.playlistName} className="flex items-center justify-between gap-4 py-2 px-4 rounded-lg bg-gray-100">
                <div className="flex items-center gap-4">
                  <FolderIcon />
                  <span className="font-semibold text-indigo-500">{playlists.playlistName}</span>
                </div>

                <button onClick={() => removePlaylist(playlists.indice)}>
                  <TrashIcon /> 
                </button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}