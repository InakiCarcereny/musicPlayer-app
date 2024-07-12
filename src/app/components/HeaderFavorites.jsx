'use client'

import Image from "next/image";
import { PlusIcon } from "../icons/PlusIcon";
import { usePlaylists } from "../hooks/usePlaylists";

export function HeaderFavorites () {
  const { handleClick, clicked, playlistName, handleSubmit, handlePlaylistName } = usePlaylists()

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
      clicked && <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-100 rounded-lg py-2 px-4 shadow-md w-full max-h-[200px] mt-6">
        <span className="text-lg text-gray-500 font-semibold">
          Insert your playlist name
        </span>
        <input 
        value={playlistName}
        onChange={handlePlaylistName}
        className="w-full text-sm text-gray-500 outline-none px-2 py-2 rounded-lg"/>
        <button type="submit" className="bg-indigo-500 rounded-lg py-1 px-3 cursor-pointer text-white font-semibold">
          Create
        </button>
      </form>
    }
    </>
  )
}