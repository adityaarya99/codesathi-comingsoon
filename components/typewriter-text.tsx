"use client"

import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypewriterText({ text, className = "", delay = 0 }: TypewriterTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return <span className={`${className} ${isVisible ? "typewriter" : "opacity-0"}`}>{text}</span>
}
