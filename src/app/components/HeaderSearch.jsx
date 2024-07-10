import Image from "next/image";
import { SearchIcon } from "@/app/icons/SearchIcon";

export function HeaderSearch () {

  return (
    <header className="flex flex-col pt-4 gap-6">
      <div className="flex items-center gap-4">
        <Image
        className="rounded-full"
        src="/user.jpeg" 
        alt="user" 
        width={50} 
        height={50} />

        <h2 className="font-bold text-2xl">Search</h2>
      </div>

      <div className="bg-gray-100 rounded-lg py-2 px-4 flex items-center gap-4">
        <SearchIcon />
        <input type="search" className="w-full bg-transparent text-sm text-gray-500 outline-none" placeholder="What do you want to listen to?" />
      </div>
    </header>
  )
}