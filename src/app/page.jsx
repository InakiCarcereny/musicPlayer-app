import albums from "../app/data/songs.json";
import { Header } from "./components/Header";
import { SectionAlbums } from "./components/SectionAlbums";
import { SectionRecentSongs } from "./components/SectionRecentSongs";

export default function Home() {
  const album = albums.albums;

  return (
    <div className="flex flex-col flex-1">
      <Header />

      <SectionAlbums albums={album}/>

      <SectionRecentSongs />
    </div>
  );
}
