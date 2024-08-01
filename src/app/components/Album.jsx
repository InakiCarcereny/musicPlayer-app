import { CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";

export function Album({ id, name, artist, cover, subtitle }) {

  return (
    <CarouselItem className="basis-1/3 md:basis-1/4">
      <Link 
      href={`/routes/albums/${id}`}
      className="flex flex-col bg-gray-100 rounded-lg p-2 max-w-[200px] sm:max-w-[200px] cursor-pointer">
        <img
        className="w-[200px] h-[140px] sm:w-[200px] sm:h-[140px] rounded-lg"
        src={cover} 
        alt={name} />

        <div className="flex flex-col pt-2">
          <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis text-md text-indigo-500">
            {name}
          </span>

          <span className=" text-xs text-gray-500 font-semibold">
            {artist}
          </span>
        </div>
      </Link>
    </CarouselItem>
  )
}