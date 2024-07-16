'use client'

import { useRecentSongsActions } from "@/redux/features/recent-songs/useRecentSongsActions"
import { useSelector } from "react-redux"

export function SectionRecentSongs () {
  const recentSongs = useSelector(state => state.recentSongs)

  return (
    <section className="mt-8">
      <h2 className="font-bold text-xl">
        Recent Played
      </h2>
    </section>
  )
}