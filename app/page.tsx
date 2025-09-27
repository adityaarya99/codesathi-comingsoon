import { CountdownTimer } from "@/components/countdown-timer"
import { WaitlistForm } from "@/components/waitlist-form"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 animate-pulse-glow pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Logo Placeholder */}
        <div className="mb-8 animate-float">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-2xl font-bold text-primary-foreground">
            CS
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Your Code Mentor is <span className="text-primary">Coming Soon</span>{" "}
          <span className="inline-block animate-bounce">🚀</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance max-w-2xl">
          Find expert developers. Book sessions. Pay seamlessly.
        </p>

        {/* Waitlist Form */}
        <div className="mb-16">
          <WaitlistForm />
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {"We're launching in 2026"} <span className="inline-block">⏳</span>
          </h2>
          <p className="text-muted-foreground mb-12">Get ready for the future of code mentoring</p>

          <CountdownTimer />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
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
