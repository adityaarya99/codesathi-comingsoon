"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

export function MagneticButton({ children, className = "", onClick, type = "button" }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      button.style.setProperty("--mouse-x", `${x * 0.3}px`)
      button.style.setProperty("--mouse-y", `${y * 0.3}px`)
    }

    const handleMouseLeave = () => {
      button.style.setProperty("--mouse-x", "0px")
      button.style.setProperty("--mouse-y", "0px")
    }

    button.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <Button ref={buttonRef} type={type} onClick={onClick} className={`magnetic-button ${className}`}>
      {children}
    </Button>
  )
}
