export function Album({ name, artist, cover, subtitle }) {

  return (
    <div className="flex flex-col hover:bg-gray-100 rounded-lg p-2 shadow-md max-w-[200px] cursor-pointer">
      <img
      className="w-[140px] h-[140px] rounded-lg"
      src={cover} 
      alt={name} />

      <div className="flex flex-col gap-2 pt-2">
        <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis text-md">
          {name}
        </span>

        <span className="text-sm text-gray-500 font-semibold">
          {artist}
        </span>
      </div>
    </div>
  )
}