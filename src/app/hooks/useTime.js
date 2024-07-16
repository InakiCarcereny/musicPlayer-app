import { useEffect, useState } from "react"

export function useTime () {
  const getDate = new Date()
  const getTime = getDate.getHours()

  const [time] = useState(getTime)
  const [phase, setPhase] = useState(undefined)

  useEffect(() => {

    if (time >= 1 && time < 12) {
      setPhase('Good Morning')
    }

    if (time >= 12 && time < 18) {
      setPhase('Good Afternoon')
    }

    if (time >= 18 && time < 24) {
      setPhase('Good Evening')
    }
  }, [time])

  return { phase }
}