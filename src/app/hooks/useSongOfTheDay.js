import { useSelector } from "react-redux"

export function useSongOfTheDay () {
  const album = useSelector(state => state.albums.albums)

  const date = new Date();
  const day = date.getDay();

  const getRandomSong = () => {
    const randomAlbum = day % album.length;
    const randomSong = day % album[randomAlbum].songs.length;

    return album[randomAlbum].songs[randomSong];
  };

  return { getRandomSong };
}