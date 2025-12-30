import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente roxo */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #6841FA 0%, #5b3cf4 50%, #4a2dd9 100%)",
        }}
      >
        {/* Pattern de fundo */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Círculos decorativos */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          {/* Número 404 grande */}
          <div className="mb-8">
            <h1 
              className="text-[150px] sm:text-[200px] lg:text-[280px] font-bold leading-none tracking-tight"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              404
            </h1>
          </div>

          {/* Textos */}
          <div className="max-w-2xl mb-8 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ops! Página não encontrada
            </h2>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Parece que você se perdeu no caminho. A página que você está procurando não existe 
              ou foi movida para outro endereço.
            </p>
          </div>

          {/* Sugestões */}
          <div className="mb-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-xl">
            <h3 className="text-lg font-semibold text-white mb-3">
              O que você pode fazer:
            </h3>
            <ul className="text-white/80 space-y-2 text-left">
              <li className="flex items-start gap-2">
                <span className="text-white/60">→</span>
                <span>Verificar se o endereço está correto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/60">→</span>
                <span>Voltar para a página anterior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/60">→</span>
                <span>Acessar nossa página inicial</span>
              </li>
            </ul>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              asChild
              size="lg"
              className="group bg-white text-[#6841FA] hover:bg-white/90 font-semibold px-8 py-6 text-base"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Ir para a Home
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold px-8 py-6 text-base backdrop-blur-sm"
            >
              <Link href="/contato">
                <Search className="mr-2 h-5 w-5" />
                Falar com Suporte
              </Link>
            </Button>
          </div>

          {/* Links rápidos */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4">Links rápidos:</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link 
                href="/solucoes/crm" 
                className="text-white/80 hover:text-white transition-colors underline underline-offset-4"
              >
                CRM Premium
              </Link>
              <span className="text-white/40">•</span>
              <Link 
                href="/sobre-nos" 
                className="text-white/80 hover:text-white transition-colors underline underline-offset-4"
              >
                Sobre Nós
              </Link>
              <span className="text-white/40">•</span>
              <Link 
                href="/contato" 
                className="text-white/80 hover:text-white transition-colors underline underline-offset-4"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decoração inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}
