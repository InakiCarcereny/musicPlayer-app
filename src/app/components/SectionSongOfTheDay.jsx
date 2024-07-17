'use client'

import { useSongOfTheDay } from "../hooks/useSongOfTheDay"

export function SectionSongOfTheDay () {

  const { getRandomSong } = useSongOfTheDay()

  const song = getRandomSong()

  return (
    <section className="mt-8">
      <h2 className="font-bold text-xl">
        Song of the Day
      </h2>

      <div className="mt-4">
        <div key={song.id} className="flex flex-col items-center justify-center max-w-full bg-gray-100 rounded-lg pt-4 shadow-md">
          <img 
          className="w-[400px] h-[200px] rounded-lg"
          src={song.cover} 
          alt={song.title} />
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="font-medium text-indigo-500">
              {song.title}
            </span>
            <span className="text-xs text-gray-500 font-semibold">
              ●
            </span>
            <span className="text-xs text-gray-500 font-semibold">
              {song.artists}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}