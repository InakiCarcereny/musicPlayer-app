'use client'

import Image from "next/image";
import { PauseIcon } from "../icons/PauseIcon";
import { useSelector } from "react-redux";
import { PlayIcon } from "../icons/PlayIcon";
import { useEffect, useRef } from "react";

export function Player () {
  const { playing, currentSong, volume } = useSelector(state => state.player)

  const playerRef = useRef(null)

  useEffect(() => {
    playerRef.current.src = `/tracks/5/02.mp3`
  }, [])

  const handlePlay = () => {
    if (playing === false) {
      playerRef.current.play()
      playerRef.current.volume = 0.2
    } else {
      playerRef.current.pause()
    }
  }

  return (
    <div className={`mx-auto fixed bottom-[84px] left-0 right-0 max-w-[600px] h-[80px] rounded-lg bg-zinc-900 flex items-center justify-between px-2 py-2}`}>
      <div className="flex items-center gap-2">
        <Image 
        className="w-[60px] h-[60px] rounded-lg"
        src="/user.jpeg" 
        alt="user" 
        width={50} 
        height={50} />
        <p>
          name of the song
        </p>
      </div>
      <button 
      onClick={handlePlay}
      className="font-medium text-indigo-500">
        {playing
          ? <PauseIcon />
          : <PlayIcon />
        }
      </button>

      <audio ref={playerRef}></audio>
  </div>
  )
}