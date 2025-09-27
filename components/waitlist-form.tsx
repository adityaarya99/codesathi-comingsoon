"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

export const WaitlistForm = React.memo(() => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [inviteCount, setInviteCount] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Simulate form submission
      console.log("Email submitted:", email)
    }
  }

  const handleShare = (platform: string) => {
    const shareText =
      "Join me on the CodeSathi waitlist! Find expert developers, book sessions, and pay seamlessly. Coming in 2026! 🚀"
    const shareUrl = window.location.href

    let url = ""
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        break
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`
        break
    }

    if (url) {
      window.open(url, "_blank")
      // Simulate invite count increase
      setInviteCount((prev) => Math.min(prev + 1, 3))
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-2 text-primary">
          <CheckCircle className="w-6 h-6" />
          <span className="text-lg font-semibold">{"You're on the list!"}</span>
        </div>

        <div className="space-y-4">
          <p className="text-muted-foreground">Invite 3 friends to unlock early beta access!</p>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="text-primary">{inviteCount}/3</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(inviteCount / 3) * 100}%` }}
              />
            </div>
          </div>

          {inviteCount === 3 && (
            <div className="text-primary font-semibold animate-pulse">🎉 Early beta access unlocked!</div>
          )}

          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("twitter")}
              className="hover:bg-primary/10 hover:border-primary/50"
            >
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("linkedin")}
              className="hover:bg-primary/10 hover:border-primary/50"
            >
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("whatsapp")}
              className="hover:bg-primary/10 hover:border-primary/50"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-card border-primary/20 focus:border-primary"
        />
        <Button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 hover:scale-105 transition-transform"
        >
          Join Waitlist
        </Button>
      </div>
    </form>
  )
})
