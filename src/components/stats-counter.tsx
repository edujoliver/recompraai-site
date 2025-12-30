"use client";

import { useEffect, useState } from "react";

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export function StatsCounter({ 
  end, 
  duration = 2000, 
  suffix = "", 
  decimals = 0 
}: StatsCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const currentCount = startValue + (endValue - startValue) * easedProgress;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toString();
  };

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
