'use client'

import Link from "next/link"
import { useSelector } from "react-redux"

export function SearchResults ( { query } ) {
  const album = useSelector(state => state.albums.albums)

  const filterAlbums = album.filter((album) => album.artist.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className="mt-8 flex flex-col">
      <h2 className="font-bold text-xl">
        Browse All
      </h2>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          filterAlbums.map((album) => (
            <Link
            href={`/routes/albums/${album.id}`}
            className="bg-gray-100 rounded-lg flex justify-between object-contain overflow-hidden"
            key={album.id}>
              <span className="font-medium text-indigo-500 px-2 py-2">{album.artist}</span>
              <img
              className="w-[60px] h-[60px] rotate-12 mt-8"
              src={album.cover}
              alt={album.artist} 
              />
            </Link>
          ))
        }
      </ul>
    </section>
  )
}