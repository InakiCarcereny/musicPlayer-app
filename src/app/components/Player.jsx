'use client'

import { PauseIcon } from "../icons/PauseIcon";
import { useSelector } from "react-redux";
import { PlayIcon } from "../icons/PlayIcon";
import { useEffect, useRef, useState } from "react";
import { useSong } from "../hooks/useSong";
import { CurrentSong } from "./CurrentSong";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { Prev } from "../icons/Prev";
import { Next } from "../icons/Next";
import { Slider } from "@/components/ui/slider";

export function Player ({ title, artists, cover, number, albumId }) {
  const { playing, currentSong, volume } = useSelector(state => state.player)
  const { handleSong } = useSong({ title, artists, cover, number, albumId })

  const [open, setOpen] = useState(false)

  const playerRef = useRef(null)

  useEffect(() => {
    playerRef.current.src = `/tracks/5/02.mp3`
  }, [])

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <div onClick={handleOpen} className={`mx-auto fixed bottom-[84px] left-0 right-0 max-w-[600px] h-[70px] rounded-lg bg-gray-100 flex items-center justify-between px-2 py-2}`}>
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
      
      {
        open &&
        <div className="h-screen w-[600px] bg-zinc-300 absolute flex flex-col">
          <header className="mt-4 ml-4 flex items-center gap-4">
            <button onClick={handleOpen}>
              <ArrowDownIcon />
            </button>
            <span className="text-base font-bold">
              PLAYING FROM ALBUMS
            </span>
          </header>
          <section className="flex flex-col items-center justify-center mt-16 gap-8">
            <div className="flex flex-col items-center gap-1">
              <span className="font-semibold text-indigo-500 text-2xl">
                {currentSong.song.title}
              </span>
              <p className="text-sm text-gray-500 font-semibold">
                {currentSong.song.artists}
              </p>
            </div>
            <img 
            className="w-[400px] h-[400px] rounded-lg"
            src={currentSong.song.cover}/>
            <div className="mt-8">
              <Slider 
              className="w-[500px]"
              />
            </div>
          </section>
          <footer className="mt-4 flex items-center justify-center gap-4">
            <Prev />
            <PlayIcon />
            <Next />
          </footer>
        </div>
      }
    </>
  )
}