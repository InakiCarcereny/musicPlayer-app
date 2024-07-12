'use client'

import { useSelector } from "react-redux"

export default function Albums({ params }) {
  const album = useSelector(state => state.albums.albums)
  //console.log(album)

  const ID = params.id

  const albumId = parseInt(ID)

  const albumData = album.find(album => album.id === albumId)
  //console.log(albumData)

  return (
    <div>
      {
        albumData.songs.map((song) => {
          return (
            <div key={song.id}>
              <span className="font-medium text-indigo-500">
                {song.title}
              </span>
              <span className="text-xs text-gray-500 font-semibold">
                {song.artists}
              </span>
            </div>
          )
        })
      }

    </div>

  )
}