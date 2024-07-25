'use client'

import { Song } from "@/app/components/Song"
import { useSelector } from "react-redux"

export default function Albums({ params }) {
  const album = useSelector(state => state.albums.albums)
  const favorites = useSelector(state => state.favorites)
  //console.log(album)
  //console.log(favorites)

  const ID = params.id

  const albumId = parseInt(ID)

  const albumData = album.find(album => album.id === albumId)
  //console.log(albumData)

  //const filterSongs = albumData.songs.filter((song) => song.id === albumId)
  //console.log(filterSongs)

  const checkFavorite = (song) => {
    //console.log(song, "song") 
    return favorites.some(favorite => favorite.song.number === song.id)
  }

  //console.log(checkFavorite)

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
            />
          )
        })
      }
    </ul>
  )
}