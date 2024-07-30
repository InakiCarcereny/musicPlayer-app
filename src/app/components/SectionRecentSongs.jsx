'use client'

import { useSelector } from "react-redux"
import { PlayIcon } from "../icons/PlayIcon"
import { PauseIcon } from "../icons/PauseIcon"
import { useSong } from "../hooks/useSong"

export function SectionRecentSongs ({ title, artists, cover, number, albumId }) {
  const recentSongs = useSelector(state => state.recentSongs)
  const { playing } = useSelector(state => state.player)

  const { handleSong, setPlayingId } = useSong({ title, artists, cover, number, albumId })

  return (
    <section className="mt-8 mb-44">
      <h2 className="font-bold text-xl">
        Recent Played
      </h2>

      <ul className="mt-4 flex flex-col gap-4">
        {
          recentSongs.slice(0, 5).map(({song: {title, number, cover, artists}}) => (
            <li 
            className="bg-gray-100 rounded-full flex items-center justify-between w-full px-2 py-2"
            key={number}>
              <div className="flex items-center gap-4">
                <img 
                className="w-[60px] h-[60px] rounded-full"
                src={cover} 
                alt={title} />

                <div className="flex flex-col">
                  <span className="font-medium text-indigo-500">{title}</span>
                  <p className="text-xs text-gray-500 font-semibold">{artists}</p>
                </div>
              </div>

              <button onClick={handleSong} className="cursor-pointer">
                {
                  setPlayingId
                    ? <PauseIcon />
                    : <PlayIcon />
                }
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}