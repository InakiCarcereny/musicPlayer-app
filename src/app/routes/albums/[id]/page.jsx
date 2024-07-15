'use client'

import { Song } from "@/app/components/Song"
import { useSelector } from "react-redux"

export default function Albums({ params }) {
  const album = useSelector(state => state.albums.albums)
  //console.log(album)

  const ID = params.id

  const albumId = parseInt(ID)

  const albumData = album.find(album => album.id === albumId)
  //console.log(albumData)

  return (
    <ul className="flex flex-col gap-2 mt-8">
      {
        albumData.songs.map((song) => {
          return (
            <Song 
            key={song.id} 
            title={song.title} 
            artists={song.artists} 
            cover={song.cover}
            number={song.id}
            />
          )
        })
      }
    </ul>

  )
}