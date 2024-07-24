'use client'

import { useFavoritesActions } from "../../redux/features/favorites/useFavoritesActions";
import { usePlaylistActions } from "../../redux/features/playlists/usePlaylistActions";

import { Filters } from "./Filters";
import { useSelector } from "react-redux"
import { PlaylistFolder } from "./PlaylistFolder";
import { SongFavorites } from "./SongFavorites";

export function SectionFavorites () {
  const playlists = useSelector(state => state.playlists)
  const favorites = useSelector(state => state.favorites)
  //console.log(playlists)
  const { removePlaylist } = usePlaylistActions() 
  
  const { removeFavorite } = useFavoritesActions()

  const checkFavorite = (song) => { 
    return favorites.some(favorite => favorite.song.number === song.number)
   }

  return (
    <section className="mt-6">
      <Filters />

      <ul className="mt-8 flex flex-col gap-1">
        {
          playlists.map((playlists) => {

            return (
              <PlaylistFolder 
              key={playlists.playlistName} 
              playlistName={playlists.playlistName} 
              indice={playlists.indice} 
              removePlaylist={removePlaylist} />
            )
          })
        }
      </ul>

      <ul className="mt-2 flex flex-col gap-1 mb-24">
        {
          favorites.map(({song: {title, artists, cover, number}}) => {
            const isFavorite = checkFavorite({title, artists, cover, number})

            return (
              <SongFavorites
              key={number} 
              title={title} 
              artists={artists} 
              cover={cover} 
              number={number} 
              isFavorite={isFavorite} 
              removeFavorite={removeFavorite} />
            )
          })
        }
      </ul>
    </section>
  )
}