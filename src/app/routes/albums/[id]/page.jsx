'use client'

import { Song } from "@/app/components/Song"
import { useSelector } from "react-redux"

export default function Albums({ params }) {
  const album = useSelector(state => state.albums.albums)
  const favorites = useSelector(state => state.favorites)
  
  //console.log(album)

  const ID = params.id

  const albumId = parseInt(ID)

  //console.log(albumId)

  const albumData = album.find(album => album.id === albumId)

  const checkFavorite = (song) => {
    //console.log(song)
    return favorites.some(favorite => favorite.song.number === song.id)
  }

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
            isFavorite={checkFavorite(song)}
            albumId={albumId}
            />
          )
        })
      }
    </ul>
  )
}