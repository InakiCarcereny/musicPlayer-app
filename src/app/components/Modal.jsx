import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { Prev } from "../icons/Prev";
import { PlayIcon } from "../icons/PlayIcon";
import { Next } from "../icons/Next";
import { PauseIcon } from "../icons/PauseIcon";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

export function Modal ({ handleOpen, title, artists, cover, handlePlay, playing, nextSong, prevSong, albumId, audio, id }) {
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

  const disabledPrevButton = id === 1 || id === 6 || id === 11 || id === 16 || id === 21 || id === 26 ? "hidden" : ""

  const disabledNextButton = id === 5 || id === 10 || id === 15 || id === 20 || id === 25 || id === 30 ? "hidden" : ""

  return (
    <div className="h-screen w-[480px] sm:w-[600px] bg-slate-200 absolute border-1 border-slate-300 flex flex-col shadow-lg">
      <header className="mt-4 ml-4 flex items-center gap-4">
        <button onClick={handleOpen} className="cursor-pointer hover:scale-110 duration-100 hover:text-zinc-700">
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
          <span className="font-semibold">{formatTime(currentTime)}</span>
          <Slider
          min={0}
          max={duration}
          value={[currentTime]}
          onValueChange={(value) => {
            const newCurrentTime = [...value]
            audio.current.currentTime = newCurrentTime[0]
          }} 
          className="w-[350px]"/>
          <span className="font-semibold">
            {
              duration
                ? formatTime(duration)
                : "0:00"
            }
          </span>
        </div>
      </section>

      <footer className="mt-8 flex items-center justify-center gap-4">
        <button onClick={prevSong} className={`cursor-pointer ${disabledPrevButton}`}>
          <Prev className="hover:text-indigo-500/80" />
        </button>
        <button onClick={handlePlay} className="cursor-pointer">
          {
            playing 
              ? <PauseIcon className="h-14 w-14 hover:text-indigo-500/80" />
              : <PlayIcon className="h-14 w-14 hover:text-indigo-500/80" />
          }
        </button>
        <button onClick={nextSong} className={`cursor-pointer ${disabledNextButton}`}>
          <Next className="hover:text-indigo-500/80" />
        </button>
      </footer>
    </div>
  )
}