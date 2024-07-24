import { FolderIcon } from "../icons/FolderIcon";
import { TrashIcon } from "../icons/TrashIcon";

export function PlaylistFolder ({ playlistName, indice, removePlaylist }) {

  return (
    <li key={playlistName} className="flex items-center justify-between gap-4 py-2 px-2 rounded-lg hover:bg-gray-100">
    <div className="flex items-center gap-4">
      <FolderIcon />
      <span className="font-medium text-indigo-500">{playlistName}</span>
    </div>

    <button onClick={() => removePlaylist(indice)}>
      <TrashIcon /> 
    </button>
  </li>
  )
}