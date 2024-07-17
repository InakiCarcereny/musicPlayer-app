import { useSelector } from "react-redux"

export function useSongOfTheDay () {
  const album = useSelector(state => state.albums.albums)

  const date = new Date()
  const day = date.getDay()

  const randomAlbum = Math.floor(Math.random(album.length))

  const randomSong = Math.floor(Math.random(album[randomAlbum].songs.length))

  //console.log(album[randomAlbum].songs[randomSong])

  const getRandomSong = () => {
    if(day === 0) {
      return album[randomAlbum].songs[randomSong]
    }

    if(day === 1) {
      return album[randomAlbum].songs[randomSong]
    }

    if(day === 2) {
      return album[randomAlbum].songs[randomSong] 
    }

    if(day === 3) {
      return album[randomAlbum].songs[randomSong]
    }

    if(day === 4) {
      return album[randomAlbum].songs[randomSong]
    }

    if(day === 5) {
      return album[randomAlbum].songs[randomSong]
    }

    if(day === 6) {
      return album[randomAlbum].songs[randomSong]
    }

    return album[randomAlbum].songs[randomSong]
  }

  return { getRandomSong }
}