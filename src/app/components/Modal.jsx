import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { Prev } from "../icons/Prev";
import { PlayIcon } from "../icons/PlayIcon";
import { Next } from "../icons/Next";
import { PauseIcon } from "../icons/PauseIcon";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

export function Modal ({ handleOpen, title, artists, cover, handlePlay, playing, nextSong, prevSong, albumId, audio }) {

  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleSliderChange)
    return () => {
      audio.current.removeEventListener("timeupdate", handleSliderChange)
    }
  },[])

  const handleSliderChange = () => {
    setCurrentTime(audio.current.currentTime)
  }

  const formatTime = (time) => {
    if (time == null) return "0:00"

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
  }

  const duration = audio.current.duration

  return (
    <div className="h-screen w-[480px] sm:w-[600px] bg-slate-200 absolute border-1 border-slate-300 flex flex-col shadow-lg">
      <header className="mt-4 ml-4 flex items-center gap-4">
        <button onClick={handleOpen}>
          <ArrowDownIcon />
        </button>
        <span className="text-base font-bold">
          PLAYING FROM ALBUM {albumId}
        </span>
      </header>

      <section className="flex flex-col items-center justify-center mt-16 gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="font-semibold text-indigo-500 text-2xl">
            {title}
          </span>
          <p className="text-sm text-gray-500 font-semibold">
            {artists}
          </p>
        </div>
        <img 
        className="w-[400px] h-[400px] rounded-lg"
        src={cover}/>
        <div className="mt-8 flex items-center gap-2">
          <span>{formatTime(currentTime)}</span>
          <Slider
          min={0}
          max={duration}
          value={[currentTime]}
          onValueChange={(value) => {
            const newCurrentTime = [...value]
            audio.current.currentTime = newCurrentTime[0]
          }} 
          className="w-[350px]"/>
          <span>
            {
              duration
                ? formatTime(duration)
                : "0:00"
            }
          </span>
        </div>
      </section>

      <footer className="mt-8 flex items-center justify-center gap-4">
        <button onClick={prevSong} className="cursor-pointer">
          <Prev />
        </button>
        <button onClick={handlePlay} className="cursor-pointer">
          {
            playing 
              ? <PauseIcon className="h-14 w-14" />
              : <PlayIcon className="h-14 w-14" />
          }
        </button>
        <button onClick={nextSong} className="cursor-pointer">
          <Next />
        </button>
      </footer>
    </div>
  )
}