'use client'

import { useSelector } from "react-redux"
import { Album } from "./Album"

export function SectionAlbums () {
  const album = useSelector(state => state.albums.albums)

  return (
    <section className="flex flex-col mt-8">
      <h1 className="font-bold text-xl">
        Albums
      </h1>
      <div className="flex flex-wrap gap-4 mt-4">
        {
          album.map((album) => {
            return (
              <Album 
                key={album.id}
                name={album.name}
                artist={album.artist}
                cover={album.cover}
                subtitle={album.subtitle}
              />
            )
          })
        }
      </div>
    </section>
  )
}