import { useState } from "react"
import { PlayIcon } from "../icons/PlayIcon"
import { PauseIcon } from "../icons/PauseIcon"

export function Song ({ title, artists, cover, number }) {
  const [playing, setPlaying] = useState(false)

  const icon = playing ? <PauseIcon /> : <PlayIcon />

  return (
    <li className="flex items-center justify-between hover:bg-gray-100 hover:rounded-lg px-2 py-2">
      <div className="flex items-center gap-6">
        <span className="font-semibold">{number}</span>
        <img 
        className="w-[60px] h-[60px] rounded-lg"
        src={cover}
        alt={title} />
        
        <div className="flex flex-col gap-2">
          <span className="font-medium text-indigo-500">
            {title}
          </span>
          <span className="text-xs text-gray-500 font-semibold">
            {artists}
          </span>
        </div>
      </div>

      <div>
        <button onClick={() => setPlaying(!playing)} className=" cursor-pointer">
          {icon}
        </button>
      </div>
    </li>
  )
}