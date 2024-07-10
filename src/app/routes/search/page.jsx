import { HeaderSearch } from "@/app/components/HeaderSearch";
import { SearchResults } from "@/app/components/SearchResults";

export default function Search() {

  return (
    <div className="flex flex-col flex-1">
      <HeaderSearch />

      <SearchResults />
    </div>
  );
}