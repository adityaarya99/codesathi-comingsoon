import { CountdownTimer } from "@/components/countdown-timer"
import { WaitlistForm } from "@/components/waitlist-form"
import { SplitText } from "@/components/split-text"
import { TypewriterText } from "@/components/typewriter-text"
import { ParticleBackground } from "@/components/particle-background"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleBackground />

      <div className="fixed inset-0 laser-background pointer-events-none" />

      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 gap-8 lg:gap-16">
        {/* Left Side - Header and Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          {/* Logo Placeholder */}
          <div className="mb-8 animate-float flex justify-center lg:justify-start">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-2xl font-bold text-primary-foreground glow-pulse">
              CS
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <SplitText text="CodeSathi" className="text-primary" />
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-balance">
            <TypewriterText text="Your Code Mentor is Coming Soon" delay={1500} />
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Find expert developers. Book sessions. Pay seamlessly.
          </p>

          {/* Waitlist Form */}
          <div className="mb-8">
            <WaitlistForm />
          </div>
        </div>

        {/* Right Side - Countdown Timer */}
        <div className="flex-1 max-w-lg">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              We're launching in 2026 <span className="inline-block">⏳</span>
            </h3>
            <p className="text-muted-foreground">Get ready for the future of code mentoring</p>
          </div>
          <CountdownTimer />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 laser-flow">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">© 2025 CodeSathi. All rights reserved.</div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
