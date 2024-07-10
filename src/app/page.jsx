import { Header } from "./components/Header";
import { SectionAlbums } from "./components/SectionAlbums";
import { SectionRecentSongs } from "./components/SectionRecentSongs";
import { SectionSongOfTheDay } from "./components/SectionSongOfTheDay";

export default function Home() {

  return (
    <div className="flex flex-col flex-1">
      <Header />

      <SectionSongOfTheDay />

      <SectionAlbums />

      <SectionRecentSongs />
    </div>
  );
}
