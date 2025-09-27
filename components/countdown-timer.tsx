"use client";

import React, { useState, useEffect, useCallback } from "react";


export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft)


  const calculateTimeLeft = useCallback((now: Date) => {
    const targetDate = new Date("2026-01-01T00:00:00").getTime();
    const difference = targetDate - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, []);

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
// <<<<<<< develop
//       setTimeLeft(calculateTimeLeft(new Date()));
//     }, 1000);
// =======
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        }

        setPrevTimeLeft(timeLeft)
        setTimeLeft(newTimeLeft)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])
// >>>>>>> main

<!--     return () => clearInterval(timer);
  }, [calculateTimeLeft]); -->
  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {Object.entries(timeLeft).map(([unit, value]) => {
        const prevValue = prevTimeLeft[unit as keyof typeof prevTimeLeft]
        const hasChanged = value !== prevValue

        return (
          <div key={unit} className="text-center">
            <div className="bg-card border border-primary/20 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px] glow-pulse laser-flow">
              <div
                className={`text-2xl md:text-4xl font-bold text-primary font-mono ${hasChanged ? "animate-number-flip" : ""}`}
              >
                {value.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-sm md:text-base text-muted-foreground mt-2 capitalize">{unit}</div>
          </div>
        )
      })}
    </div>
  );
});