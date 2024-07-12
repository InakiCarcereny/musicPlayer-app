import Link from "next/link";

export function Album({ id, name, artist, cover, subtitle }) {

  return (
    <Link 
    href={`/routes/albums/${id}`}
    className="flex flex-col bg-gray-100 rounded-lg p-2 shadow-md max-w-[200px] cursor-pointer hover:scale-105 duration-200">
      <img
      className="w-[140px] h-[140px] rounded-lg"
      src={cover} 
      alt={name} />

      <div className="flex flex-col gap-1 pt-2">
        <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis text-md text-indigo-500">
          {name}
        </span>

        <span className=" text-xs text-gray-500 font-semibold">
          {artist}
        </span>
      </div>
    </Link>
  )
}