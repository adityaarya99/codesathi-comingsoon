'use client'

import { CountdownTimer } from "@/components/countdown-timer"
import { WaitlistForm } from "@/components/waitlist-form"
import { SplitText } from "@/components/split-text"
import { TypewriterText } from "@/components/typewriter-text"
import { ParticleBackground } from "@/components/particle-background"
import { Github, Link, Linkedin, Twitter, X } from "lucide-react"
import Image from "next/image"
import ShinyText from "@/components/ui/shiny_text"
import { useEffect } from "react"

export default function ComingSoonPage() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  useEffect(() => {
    // Scroll to the top of the page on refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden pl-16 pr-16">
      <ParticleBackground />

    
      {/* <div style={{ width: '100%', height: 600, position: 'relative' }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div> */}

    
      <div className="fixed inset-0 laser-background pointer-events-none" />

      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 gap-8 lg:gap-16">
        {/* Left Side - Header and Content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
         
          {/* Logo Placeholder */}
          {/* <div className="mb-8 animate-float flex justify-center lg:justify-start">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-2xl font-bold text-primary-foreground glow-pulse">
              CS
            </div>
          </div> */}

          <div className="mb-4 animate-float flex flex-row justify-center lg:justify-start items-end">
            {/* Logo */}
            <div className="w-12 sm:w-8 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-auto">
              <Image
                src="/monogram.svg"
                alt="CodeSathi Logo"
                width={86}
                height={86}
                className="w-full h-auto"
              />
            </div>


            {/* Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance sm:mt-8 mt-32">
              <SplitText
                text="CodeSathi"
                className="text-primary"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              {/* <SplitText text="CodeSathi" className="text-primary" /> */}
            </h1>
          </div>


          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-balance">
            <TypewriterText text="Your Code Mentor is Coming Soon" />
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
      </section >

      {/* Footer */}
      <footer className="my-8 py-4 px-4 border-t border-border/50 laser-flow">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 CodeSathi. All rights reserved. <br />
            <ShinyText
              text="Powered By Enteffe"
              disabled={false}
              speed={10}
              className='custom-class font-bold'
            />
            {/* <span className="text-gray-700">A Product of Enteffe</span> */}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/codesathi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/CodeSathi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <X className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/enteffe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div >
  );
}
