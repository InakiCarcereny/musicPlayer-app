import { useSort } from "../hooks/useSort"

export function Filters () {

  const { icons, handleSort } = useSort()

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-500 font-semibold bg-gray-100 rounded-lg py-1 px-3 cursor-pointer">
        Playlitst
      </span>

      <span className="text-sm text-gray-500 font-semibold bg-gray-100 rounded-lg py-1 px-3 cursor-pointer">
        Songs
      </span>

      <button onClick={handleSort} className="text-sm text-gray-500 font-semibold bg-gray-100 rounded-lg py-1 px-3 cursor-pointer flex items-center gap-2">
        Sort
        {icons}
      </button>
    </div>
  )
}