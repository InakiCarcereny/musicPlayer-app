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
        <div key={song.id} className="flex flex-col items-center justify-center max-w-[200px] h-[200px] rounded-lg shadow-md relative">
          <img 
          className="rounded-lg object-fill"
          src={song.cover} 
          alt={song.title} />
          <div className="flex items-center justify-center gap-2 pt-2 absolute bottom-5">
            <span className="font-medium text-white">
              {song.title}
            </span>
            <span className="text-xs text-white font-semibold">
              ●
            </span>
            <span className="text-xs text-white font-semibold">
              {song.artists}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}