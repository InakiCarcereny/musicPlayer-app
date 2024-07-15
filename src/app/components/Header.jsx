'use client'

import Image from "next/image";
import { SearchIcon } from "@/app/icons/SearchIcon";
import { useTime } from "@/app/hooks/useTime";

export function Header() {
  const { phase } = useTime()

  return (
      <header className="flex items-center justify-between pt-4">
        <Image 
        className="rounded-full"
        src="/user.jpeg" 
        alt="user" 
        width={50} 
        height={50} />

        <span className="text-base font-bold text-center text-indigo-500">
          {phase}
        </span>

        <div className="bg-gray-100 rounded-full py-1 px-3">
          <SearchIcon />
        </div>
      </header>
  )
}