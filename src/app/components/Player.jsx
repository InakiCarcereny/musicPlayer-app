'use client'

import { PauseIcon } from "../icons/PauseIcon";
import { useSelector } from "react-redux";
import { PlayIcon } from "../icons/PlayIcon";
import { useEffect, useRef, useState } from "react";
import { CurrentSong } from "./CurrentSong";
import { Modal } from "./Modal";
import { usePlayerActions } from "@/redux/features/player/usePlayerActions";

export function Player () {
  const { playing, currentSong, volume } = useSelector(state => state.player)

  const { setPlaying, setCurrentSong } = usePlayerActions()

  const [open, setOpen] = useState(false)
  const playerRef = useRef()

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    playerRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    playing
     ? playerRef.current.play()
     : playerRef.current.pause()
  }, [playing])

  useEffect(() => {
    const { song } = currentSong
    if (song) {
    const src = `/tracks/${song.albumId}/${song.id}.mp3`
    playerRef.current.src = src
    playerRef.current.play()
  }
  }, [currentSong])

  const handlePlay = () => {
    setPlaying(!playing)
  }

  const handleNextSong = () => {
    const nextSongID = currentSong.song.id + 1
    if (nextSongID) {
      setCurrentSong({
        song: {
          id: nextSongID,
          title: currentSong.song.title,
          artists: currentSong.song.artists,
          cover: currentSong.song.cover,
          albumId: currentSong.song.albumId
        }
      })
    }
  }

  const handlePrevSong = () => {
    const prevSongID = currentSong.song.id - 1
    setCurrentSong({
      song: {
        id: prevSongID,
        title: currentSong.song.title,
        artists: currentSong.song.artists,
        cover: currentSong.song.cover,
        albumId: currentSong.song.albumId
      }
    })
  }

  return (
    <>
      <div onDoubleClick={handleOpen} className="mx-auto fixed bottom-[84px] left-0 right-0 max-w-[600px] h-[70px] rounded-lg bg-gray-100 flex items-center justify-between px-2 py-2 cursor-pointer">
        <CurrentSong {...currentSong.song} />
        <button 
        onClick={handlePlay}
        className="font-medium text-indigo-500">
          {
            playing 
              ? <PauseIcon />
              : <PlayIcon />
          }
          <audio ref={playerRef}></audio>
        </button>

      </div>
      
      {
        open && <Modal
        {...currentSong.song}
        handleOpen={handleOpen}
        handlePlay={handlePlay}
        playing={playing}
        nextSong={handleNextSong}
        prevSong={handlePrevSong}
        audio={playerRef}
        />
      }
    </>
  )
}