export function CurrentSong ({ title, artists, cover }) {

  return (
    <div className="flex items-center gap-4">
      <img
      className="w-[60px] h-[60px] rounded-lg"
      src={cover}
      alt={title} />
      <div className="flex flex-col">
        <span className="font-medium text-indigo-500">
          {title}
        </span>
        <p className="text-xs text-gray-500 font-semibold">
          {artists}
        </p>
      </div>
  </div>
  )
}