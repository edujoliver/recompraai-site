"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero1Props {
  badge?: string;
  heading: string | ReactNode;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge = "Recompra Automática para Restaurantes",
  heading = "Faça Seu Cliente Voltar Toda Semana (43% Mais Vendas Garantido)",
  description = "Seu cliente comprou e sumiu? Manda mensagem no WhatsApp, oferece prêmio automático e faz ele lembrar de você. Funciona com ou sem integração. Sem complicação, sem depender de app de entrega.",
  buttons = {
    primary: {
      text: "Solicitar Demonstração",
      url: "#contato",
    },
  },
  image,
}: Hero1Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 10;
    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative z-10 mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10 pt-4 lg:pt-8">
      <div className={`grid items-center gap-10 ${image ? 'lg:grid-cols-2 lg:gap-16' : 'lg:grid-cols-1'}`}>
        <div className={`flex flex-col ${image ? 'items-center text-center lg:items-start lg:text-left' : 'items-center text-center'}`}>
          {/* Social Proof */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-gray-200 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                R
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-gray-200 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                M
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-gray-200 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                A
              </div>
            </div>
            <span className="text-gray-800 font-bold text-sm tracking-wide">
              +{count} Restaurantes Satisfeitos
            </span>
          </div>

          <h1
            className="mt-3 mb-6 text-pretty text-4xl font-bold text-gray-900 lg:text-6xl w-full leading-[1.1]"
          >
            {heading}
          </h1>
          <p className="text-gray-700 mb-8 w-full font-medium text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button
                asChild
                size="lg"
                className="w-full bg-[#6841FA] px-10 py-6 text-lg font-bold text-white shadow-2xl transition hover:bg-[#5532E8] hover:scale-105 sm:w-auto group"
              >
                <a href={buttons.primary.url}>
                  {buttons.primary.text}
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            )}
          </div>
        </div>
        {image && (
          <div className="relative">
            {/* Gradient glow around image */}
            <div 
              className="absolute -inset-8 rounded-3xl blur-3xl opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(217, 70, 239, 0.6) 0%, transparent 70%)',
              }}
            />
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              className="relative w-full rounded-2xl object-cover shadow-2xl"
              style={{
                aspectRatio: "3/2",
                objectPosition: "right center",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { Hero1 };
