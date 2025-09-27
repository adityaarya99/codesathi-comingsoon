"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block animate-split-text ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={
            {
              "--delay": `${index * 0.05}s`,
            } as React.CSSProperties
          }
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}
