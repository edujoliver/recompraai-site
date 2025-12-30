import { BarChart4, Bot, Headset } from "lucide-react";
import Image from "next/image";

const Feature16 = () => {
  return (
    <section className="relative isolate overflow-hidden [--wave-h:clamp(72px,6vw,128px)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/logos/bghero.svg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-[#5b3cf4]/65" />
        {/* Grid Pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
          <defs>
            <pattern id="grid-feature16" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-feature16)" />
        </svg>
      </div>
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[var(--wave-h)] w-full -translate-y-px rotate-180 text-[#F5F5FF]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 64C240 100 480 24 720 60C960 96 1200 96 1440 60V120H0V64Z" fill="currentColor" />
      </svg>
      <svg
        className="pointer-events-none absolute inset-x-0 -bottom-px z-10 h-[var(--wave-h)] w-full text-white"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 64C240 100 480 24 720 60C960 96 1200 96 1440 60V120H0V64Z" fill="currentColor" />
      </svg>
      <div className="pointer-events-none absolute left-1/2 top-[calc(var(--wave-h)+3rem)] z-10 h-48 w-[min(92rem,calc(100%-2rem))] -translate-x-1/2 rounded-3xl bg-primary/10 blur-3xl sm:w-[min(96rem,calc(100%-3rem))]" />
      <div className="relative z-20 mx-auto w-full max-w-[88rem] px-4 pb-[calc(var(--wave-h)+4rem)] pt-[calc(var(--wave-h)+3rem)] sm:px-6 lg:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]">
          Por Que Funciona
        </p>
        <h2 className="text-3xl font-semibold text-white lg:text-4xl">
          Donos de Restaurante Vendendo Todo Dia Com o RecompraAI
        </h2>
        <p className="mt-4 max-w-3xl text-base text-[#E4DFFF] lg:text-lg">
          Mais de 500 restaurantes fazendo cliente voltar. Simples, rápido e funciona.
        </p>

        {/* Stats Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-4 lg:gap-10">
          <div className="text-center">
            <p className="text-sm font-medium text-white/70">
              Restaurantes ativos
            </p>
            <p className="pt-4 text-6xl font-bold text-white lg:text-7xl">500+</p>
            <p className="mt-2 text-lg font-semibold text-[#E4DFFF]">
              usando o RecompraAI
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-white/70">
              Aumento em recompra
            </p>
            <p className="pt-4 text-6xl font-bold text-white lg:text-7xl">43%</p>
            <p className="mt-2 text-lg font-semibold text-[#E4DFFF]">
              em média por cliente
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-white/70">
              Clientes reativados
            </p>
            <p className="pt-4 text-6xl font-bold text-white lg:text-7xl">2M+</p>
            <p className="mt-2 text-lg font-semibold text-[#E4DFFF]">
              mensalmente na plataforma
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-white/70">
              Satisfação NPS
            </p>
            <p className="pt-4 text-6xl font-bold text-white lg:text-7xl">95%</p>
            <p className="mt-2 text-lg font-semibold text-[#E4DFFF]">
              dos nossos clientes
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="my-16 h-px w-full bg-white/10" />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="group rounded-2xl border border-primary/10 bg-background/80 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <BarChart4 className="size-6" />
            </span>
            <h3 className="mb-3 text-xl font-semibold">Vê Tudo Num Lugar Só</h3>
            <p className="leading-7 text-muted-foreground">
              Dashboard completo mostra quem compra mais, quem sumiu, LTV, taxa de recompra e ROI de campanhas. Métricas em tempo real, análise RFV automática. Tudo na sua mão.
            </p>
          </div>
          <div className="group rounded-2xl border border-primary/10 bg-background/80 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <Bot className="size-6" />
            </span>
            <h3 className="mb-3 text-xl font-semibold">Mensagens Automáticas</h3>
            <p className="leading-7 text-muted-foreground">
              Cliente não compra há 15 dias? Manda mensagem sozinho no WhatsApp. Oferece cupom, prêmio ou desconto. Você só configura uma vez.
            </p>
          </div>
          <div className="group rounded-2xl border border-primary/10 bg-background/80 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <Headset className="size-6" />
            </span>
            <h3 className="mb-3 text-xl font-semibold">Time Te Ajuda Sempre</h3>
            <p className="leading-7 text-muted-foreground">
              Não tá vendendo? A gente te ajuda. Toda semana nossa equipe vê seus números e te fala o que fazer pra vender mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
