'use client'

import { useSelector } from "react-redux"
import { PlayIcon } from "../icons/PlayIcon"
import { usePlayerActions } from "@/redux/features/player/usePlayerActions"
import { PauseIcon } from "../icons/PauseIcon"

export function SectionRecentSongs () {
  const recentSongs = useSelector(state => state.recentSongs)
  const { playing } = useSelector(state => state.player)

  const { setPlaying } = usePlayerActions()

  const handlePlay = () => {
    setPlaying(!playing)
  }

  return (
    <section className="mt-8 mb-44">
      <h2 className="font-bold text-xl">
        Recent Played
      </h2>

      <ul className="mt-4 flex flex-col gap-4">
        {
          recentSongs.map(({song: {title, cover, artists, number}}) => (
            <li 
            className="bg-gray-100 rounded-lg flex items-center justify-between w-full px-2 py-2"
            key={number}>
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

              <button onClick={handlePlay} className="cursor-pointer">
                {
                  playing 
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