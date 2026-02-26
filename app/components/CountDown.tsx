'use client'

import { useState, useEffect } from 'react'

const DEADLINE = new Date('2026-04-13T00:00:00+09:00')

export default function CountDown() {
  const [days, setDays] = useState(() =>
    Math.max(0, Math.ceil((DEADLINE.getTime() - Date.now()) / 86400000))
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setDays(Math.max(0, Math.ceil((DEADLINE.getTime() - Date.now()) / 86400000)))
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="text-xs font-medium text-[#FF6321]">
      D-{days}
    </span>
  )
}
