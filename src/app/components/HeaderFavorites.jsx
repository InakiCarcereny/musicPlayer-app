'use client'

import Image from "next/image";
import { PlusIcon } from "../icons/PlusIcon";
import { usePlaylists } from "../hooks/usePlaylists";

export function HeaderFavorites () {
  const { handleClick, clicked, playlistName, handlePlaylistName } = usePlaylists()

  return (
    <>
    <header className="flex items-center justify-between pt-4">
      <div className="flex items-center gap-6">
        <Image 
        src="/user.jpeg" 
        alt="user" 
        width={50} 
        height={50} 
        className="rounded-full"
        />
        <h2 className="font-bold text-2xl">Your Favorites</h2>
      </div>

      <button onClick={handleClick} className="bg-gray-100 rounded-full py-1 px-3 cursor-pointer">
        <PlusIcon />
      </button>
    </header>

    {
      clicked && <div className="flex flex-col gap-4 bg-gray-100 rounded-lg py-2 px-4 shadow-md z-50 w-full h-screen">
        <span>Playlist Name</span>
        <input 
        value={playlistName}
        onChange={handlePlaylistName}
        className="w-full bg-transparent text-sm text-gray-500 outline-none"/>
      </div>
    }
    </>
  )
}