import { HeaderSearch } from "@/app/components/HeaderSearch";
import { SearchResults } from "@/app/components/SearchResults";

export default function Search({searchParams}) {
  const query = searchParams.query || ''

  return (
    <div className="flex flex-col flex-1">
      <HeaderSearch />

      <SearchResults query={query}/>
    </div>
  );
}