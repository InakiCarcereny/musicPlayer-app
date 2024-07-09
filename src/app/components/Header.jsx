'use client'

import Image from "next/image";
import { SearchIcon } from "../icons/SearchIcon";
import { useEffect, useState } from "react";

export function Header() {
  const [time] = useState(new Date().getHours())
  const [phase, setPhase] = useState(undefined)

  useEffect(() => {

    if (time >= 6 && time < 12) {
      setPhase('Good Morning')
    }

    if (time >= 12 && time < 18) {
      setPhase('Good Afternoon')
    }

    if (time >= 18 && time < 24) {
      setPhase('Good Evening')
    }
  }, [time])

  return (
      <header className="flex items-center justify-between pt-4">
        <Image 
        className="rounded-full"
        src="/user.jpeg" 
        alt="user" 
        width={50} 
        height={50} />

        <span className="text-lg font-bold text-center">
          {phase}
        </span>

        <div>
          <SearchIcon />
        </div>
      </header>
  )
}