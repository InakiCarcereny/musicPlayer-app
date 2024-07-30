'use client'

import Image from "next/image";
import { PauseIcon } from "../icons/PauseIcon";
import { useSelector } from "react-redux";
import { PlayIcon } from "../icons/PlayIcon";
import { useEffect, useRef } from "react";
import { useSong } from "../hooks/useSong";
import { CurrentSong } from "./CurrentSong";

export function Player ({ title, artists, cover, number, albumId }) {
  const { playing, currentSong, volume } = useSelector(state => state.player)
  const { handleSong } = useSong({ title, artists, cover, number, albumId })

  const playerRef = useRef(null)

  useEffect(() => {
    playerRef.current.src = `/tracks/5/02.mp3`
  }, [])

  return (
    <div className={`mx-auto fixed bottom-[84px] left-0 right-0 max-w-[600px] h-[70px] rounded-lg bg-gray-100 flex items-center justify-between px-2 py-2}`}>
      <CurrentSong {...currentSong.song} />
      <button 
      onClick={handleSong}
      className="font-medium text-indigo-500">
        {
          playing 
            ? <PauseIcon />
            : <PlayIcon />
        }
      </button>

      <audio ref={playerRef}></audio>
  </div>
  )
}