'use client'

import { Song } from "@/app/components/Song"
import { useSelector } from "react-redux"

export default function Albums({ params }) {
  const album = useSelector(state => state.albums.albums)
  
  const favorites = useSelector(state => state.favorites)

  const ID = params.id

  const albumId = parseInt(ID)

  const albumFilter = album.filter(album => album.id === albumId)

  const songData = albumFilter.find(song => song.id === albumId)

  const checkFavorite = (song) => {
    return favorites.some(favorite => favorite.song.number === song.id)
  }

  return (
    <ul className="flex flex-col gap-4 mt-8">

      {
        albumFilter.map((album) => {
          return (
            <>
            <div key={album.id} className="flex items-center gap-4">
              <img src={album.cover} 
              alt={album.name}
              className="w-[200px] h-[200px] rounded-lg shadow-xl"
              />

              <div className="flex flex-col gap-2">
                <p className="font-base text-sm text-gray-500">{album.subtitle}</p>
                <h2 className="font-bold text-4xl text-indigo-500">{album.name}</h2>
                <span className="text-sm font-semibold text-gray-500">{album.artist}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              {
                songData.songs.map((song, index) => {
                  return (
                    <Song 
                    key={song.id} 
                    title={song.title} 
                    artists={song.artists} 
                    cover={song.cover}
                    number={song.id}
                    isFavorite={checkFavorite(song)}
                    albumId={albumId}
                    index={index}
                    />
                  )
                })
              }
            </div>
            </>
          )
        })
      }
    </ul>
  )
}