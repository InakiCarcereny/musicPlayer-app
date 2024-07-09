import { Album } from "./Album"

export function SectionAlbums ({ albums }) {

  return (
    <section className="flex flex-col mt-12 px-4">
      <h1 className="font-medium text-2xl">
        Albums
      </h1>
      <div className="flex flex-wrap gap-6 mt-4">
        {
          albums.map((album) => {
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