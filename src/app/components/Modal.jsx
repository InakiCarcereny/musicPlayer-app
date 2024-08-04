import { Slider } from "@radix-ui/react-slider";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { Prev } from "../icons/Prev";
import { PlayIcon } from "../icons/PlayIcon";
import { Next } from "../icons/Next";

export function Modal ({ handleOpen, title, artists, cover }) {

  return (
    <div className="h-screen w-[480px] sm:w-[600px] bg-slate-200 absolute border-1 border-slate-300 flex flex-col shadow-lg">
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
            {title}
          </span>
          <p className="text-sm text-gray-500 font-semibold">
            {artists}
          </p>
        </div>
        <img 
        className="w-[400px] h-[400px] rounded-lg"
        src={cover}/>
        <div className="mt-8">
          <Slider
          className="w-[400px]"
          />
        </div>
      </section>
      <footer className="mt-4 flex items-center justify-center gap-4">
        <Prev />
        <PlayIcon />
        <Next />
      </footer>
    </div>
  )
}