"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Repeat, Star } from "lucide-react";

const Stats1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Diagonal separator before stats */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <div 
          className="absolute inset-0 h-full w-full opacity-50"
          style={{
            background: 'repeating-linear-gradient(-45deg, #E4DFFF 0px, #E4DFFF 1px, transparent 1px, transparent 16px)',
          }}
        />
      </div>

      <section 
        ref={sectionRef}
        className="relative isolate overflow-hidden py-24"
        style={{
          background: "linear-gradient(to bottom, #6841FA, #5534d8)",
        }}
      >
        <div className="relative z-20 mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-white/90">
              RESULTADOS COMPROVADOS
            </p>
            <h2 className="font-sans text-4xl font-semibold text-white lg:text-6xl">
              Números que falam por si
            </h2>
            <p className="mx-auto mt-4 max-w-3xl font-sans text-lg text-[#E4DFFF]">
              Restaurantes que usam o RecompraAI estão vendo resultados reais e mensuráveis na recompra e fidelização de clientes.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 - Restaurantes */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#10b981]/40 bg-white/10 p-8 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#10b981]/60 hover:bg-white/15 hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]">
              <div className="mb-4 inline-flex rounded-full bg-[#10b981] px-4 py-1.5">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-white">CRESCIMENTO</span>
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <AnimatedCounter 
                end={500} 
                suffix="+" 
                isVisible={isVisible}
                className="font-mono text-6xl font-bold text-white lg:text-7xl"
              />
              <p className="mt-3 font-sans text-base font-medium text-[#E4DFFF]">
                Restaurantes ativos
              </p>
            </div>

            {/* Card 2 - Recompra */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#ffd700]/40 bg-white/10 p-8 shadow-[0_0_20px_rgba(255,215,0,0.15)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#ffd700]/60 hover:bg-white/15 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)]">
              <div className="mb-4 inline-flex rounded-full bg-[#ffd700] px-4 py-1.5">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-[#6841FA]">RECOMPRA</span>
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Repeat className="h-6 w-6 text-white" />
              </div>
              <AnimatedCounter 
                end={43} 
                suffix="%" 
                isVisible={isVisible}
                className="font-mono text-6xl font-bold text-white lg:text-7xl"
              />
              <p className="mt-3 font-sans text-base font-medium text-[#E4DFFF]">
                Aumento médio em 6 meses
              </p>
            </div>

            {/* Card 3 - Clientes */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#3b82f6]/40 bg-white/10 p-8 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#3b82f6]/60 hover:bg-white/15 hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]">
              <div className="mb-4 inline-flex rounded-full bg-[#3b82f6] px-4 py-1.5">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-white">CLIENTES</span>
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Users className="h-6 w-6 text-white" />
              </div>
              <AnimatedCounter 
                end={2} 
                suffix="M+" 
                isVisible={isVisible}
                className="font-mono text-6xl font-bold text-white lg:text-7xl"
              />
              <p className="mt-3 font-sans text-base font-medium text-[#E4DFFF]">
                Reativados mensalmente
              </p>
            </div>

            {/* Card 4 - Satisfação */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#f59e0b]/40 bg-white/10 p-8 shadow-[0_0_20px_rgba(245,158,11,0.15)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#f59e0b]/60 hover:bg-white/15 hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]">
              <div className="mb-4 inline-flex rounded-full bg-[#f59e0b] px-4 py-1.5">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-white">SATISFAÇÃO</span>
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Star className="h-6 w-6 text-white" />
              </div>
              <AnimatedCounter 
                end={95} 
                suffix="%" 
                isVisible={isVisible}
                className="font-mono text-6xl font-bold text-white lg:text-7xl"
              />
              <p className="mt-3 font-sans text-base font-medium text-[#E4DFFF]">
                NPS Score
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  isVisible: boolean;
  className?: string;
}

const AnimatedCounter = ({ end, suffix = "", isVisible, className }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <p className={className}>
      {count}{suffix}
    </p>
  );
};

export { Stats1 };
