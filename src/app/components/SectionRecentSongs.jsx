'use client'

import { useSelector } from "react-redux"
import { PauseIcon } from "../icons/PauseIcon"

export function SectionRecentSongs () {
  const recentSongs = useSelector(state => state.recentSongs)
  //console.log(recentSongs)

  return (
    <section className="mt-8">
      <h2 className="font-bold text-xl">
        Recent Played
      </h2>

      <ul className="mt-4 flex flex-col gap-4">
        {
          recentSongs.map(({song: {title, number, cover, artists}}) => (
            <li 
            className="bg-gray-100 rounded-lg flex items-center justify-between w-full"
            key={number}>
              <div className="flex items-center gap-4">
                <img 
                className="w-[60px] h-[60px] rounded-lg"
                src={cover} 
                alt={title} />

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-indigo-500">{title}</span>
                  <p>{artists}</p>
                </div>
              </div>

              <span>
                <PauseIcon />
              </span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}