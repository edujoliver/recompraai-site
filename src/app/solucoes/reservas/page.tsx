import type { Metadata } from "next";
import Image from "next/image";
import { Hero1 } from "@/components/hero1";
import { Cta4 } from "@/components/cta4";
import { Stats1 } from "@/components/stats1";
import { StatsCounter } from "@/components/stats-counter";
import { Check, MessageSquare, Bell, Settings, Users, Clock, Brain, Zap, BarChart3, Calendar, Shield, Smartphone, TrendingUp, Server, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sistema de Reservas Inteligente com IA | RecompraAI",
  description:
    "Bot WhatsApp com IA conversacional, gestão de múltiplos salões, mesas inteligentes, grade horária flexível, analytics em tempo real e APIs prontas para automação.",
  keywords: [
    "sistema de reservas restaurante",
    "bot whatsapp reservas",
    "IA conversacional reservas",
    "gestão de mesas inteligente",
    "reserva online automática",
    "dashboard analítico reservas",
    "API integração restaurante",
    "confirmação automática whatsapp",
    "múltiplos salões",
    "grade horária restaurante",
    "no-show management",
    "lista de espera digital",
    "real-time reservations",
    "APIs para LLMs"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Sistema de Reservas Inteligente com IA | RecompraAI",
    description:
      "Bot WhatsApp com IA conversacional, gestão completa de mesas e salões, analytics avançado e APIs verbosas para LLMs.",
    type: "website",
    url: "https://recompraai.com.br/solucoes/reservas",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "RecompraAI - Sistema de Reservas Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Reservas Inteligente com IA | RecompraAI",
    description:
      "Bot WhatsApp com IA conversacional, gestão completa de mesas e salões, analytics avançado e APIs verbosas para LLMs.",
    images: ["/logos/recompraai.svg"],
  },
  alternates: {
    canonical: "https://recompraai.com.br/solucoes/reservas",
  },
};

export default function ReservasPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RecompraAI Sistema de Reservas Inteligente",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Sistema de reservas com IA conversacional, gestão de múltiplos salões, mesas inteligentes e analytics avançado.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    featureList: [
      "Bot WhatsApp 100% Autônomo",
      "IA Conversacional Inteligente",
      "APIs Verbosas para LLMs",
      "Gestão de Múltiplos Salões",
      "Mesas Inteligentes",
      "Grade Horária Flexível",
      "Analytics Avançado",
      "Lista de Espera Digital",
      "Integração n8n/Make/Zapier",
      "Real-time",
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative isolate grid place-items-center overflow-hidden min-h-[560px] bg-white"
      >
        {/* Dot pattern background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #d946ef 1.0px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />
        
        <div className="relative z-20 w-full py-12">
          <Hero1
            heading={
              <>
                Sistema de Reservas <span className="text-[#6841FA]">Inteligente</span>
              </>
            }
            description="Bot WhatsApp com IA conversacional, gestão de múltiplos salões, mesas inteligentes, grade horária flexível, analytics em tempo real e APIs prontas para automação."
            buttons={{
              primary: {
                text: "Começar Grátis por 14 Dias",
                url: "#contato",
              },
            }}
            image={{
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
              alt: "Sistema de Reservas Inteligente RecompraAI",
            }}
          />
        </div>
      </section>

      {/* Diagonal lines separator */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <div 
          className="absolute inset-0 h-full w-full opacity-50"
          style={{
            background: 'repeating-linear-gradient(-45deg, #E4DFFF 0 1px, transparent 1px 16px)',
          }}
        />
      </div>

      {/* Seção: Para o Cliente */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Para o Cliente
              </span>
              <h2 className="font-sans text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Reserva Simples e Rápida
                </span> via WhatsApp
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-base font-medium text-[#5C5C73] sm:text-lg">
                IA conversacional que entende linguagem natural. Cliente escolhe mesa, horário e recebe confirmação automática.
              </p>
            </div>

            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image
                      alt="Reserva via WhatsApp com IA conversacional"
                      loading="lazy"
                      width={800}
                      height={600}
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="font-mono text-5xl font-light text-[#6841FA] opacity-30">01</span>
                    <span className="rounded-full bg-[#6841FA] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">
                      EXPERIÊNCIA DO CLIENTE
                    </span>
                  </div>
                  <h3
                    className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6"
                    style={{ background: "linear-gradient(to right, #2C216F, #6841FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >
                    Conversação Natural via WhatsApp
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Bot com IA que entende "mesa perto da janela" ou "6 pessoas com crianças"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Confirmação automática via WhatsApp, SMS e e-mail instantaneamente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Lembretes 24h antes com opção de confirmar ou remarcar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Escolha de mesa: Vista Mar, VIP, Externa, Romântica, Kid-friendly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Lista de espera digital com notificação quando mesa liberar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal lines separator */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <div 
          className="absolute inset-0 h-full w-full opacity-50"
          style={{
            background: 'repeating-linear-gradient(-45deg, #E4DFFF 0 1px, transparent 1px 16px)',
          }}
        />
      </div>

      {/* Seção: IA WhatsApp */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Inteligência Artificial
              </span>
              <h2 className="font-sans text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                WhatsApp{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  100% Autônomo
                </span>{" "}
                com IA
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-base font-medium text-[#5C5C73] sm:text-lg">
                Bot conversacional que entende contexto, responde perguntas complexas e gerencia reservas 24/7 sem intervenção humana.
              </p>
            </div>

            <div className="lg:flex lg:gap-x-4 lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image
                      alt="IA Conversacional WhatsApp Bot"
                      loading="lazy"
                      width={800}
                      height={600}
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                <div>
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="font-mono text-5xl font-light text-[#6841FA] opacity-30">02</span>
                    <span className="rounded-full bg-[#6841FA] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">
                      AUTOMAÇÃO TOTAL
                    </span>
                  </div>
                  <h3
                    className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6"
                    style={{ background: "linear-gradient(to right, #2C216F, #6841FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >
                    IA Conversacional e APIs Prontas
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Bot inteligente que conversa naturalmente e entende contexto completo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>APIs verbosas perfeitas para GPT, Claude e agentes de IA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Integração nativa com n8n, Make, Zapier via webhooks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Real-time com sincronização instantânea cross-device</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal lines separator */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <div 
          className="absolute inset-0 h-full w-full opacity-50"
          style={{
            background: 'repeating-linear-gradient(-45deg, #E4DFFF 0 1px, transparent 1px 16px)',
          }}
        />
      </div>

      {/* Seção: Para o Restaurante */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Para o Restaurante
              </span>
              <h2 className="font-sans text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Gestão Completa
                </span>{" "}
                em Tempo Real
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-base font-medium text-[#5C5C73] sm:text-lg">
                Dashboard centralizado com mesas inteligentes, múltiplos salões, grade horária configurável e analytics avançado.
              </p>
            </div>

            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image
                      alt="Dashboard de gestão completa de reservas"
                      loading="lazy"
                      width={800}
                      height={600}
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="font-mono text-5xl font-light text-[#6841FA] opacity-30">03</span>
                    <span className="rounded-full bg-[#6841FA] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">
                      OPERAÇÃO COMPLETA
                    </span>
                  </div>
                  <h3
                    className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6"
                    style={{ background: "linear-gradient(to right, #2C216F, #6841FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >
                    Mesas Inteligentes e Salões Configuráveis
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Dashboard com KPIs: taxa de ocupação, no-shows e receita por turno</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Múltiplos salões: área principal, VIP, externa e privativa independentes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Mesas inteligentes: Vista Mar, VIP, Externa, Romântica, A/C, Kid-friendly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Grade horária: almoço, jantar, brunch com intervalos personalizados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Bloqueios administrativos para manutenção ou eventos privados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal lines separator */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <div 
          className="absolute inset-0 h-full w-full opacity-50"
          style={{
            background: 'repeating-linear-gradient(-45deg, #E4DFFF 0 1px, transparent 1px 16px)',
          }}
        />
      </div>

      {/* Seção: Analytics */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
              Inteligência de Dados
            </span>
            <h2 className="text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
              Analytics{" "}
              <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Avançado
              </span>
            </h2>
            <p className="mt-4 text-base text-[#5C5C73] md:text-lg">
              Dashboards completos com KPIs e previsões inteligentes
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-2xl border border-[#6841FA]/20 bg-gradient-to-br from-purple-50 to-white p-6 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6841FA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-gradient-to-br from-[#6841FA] to-[#9b7dff] p-3 shadow-md">
                  <BarChart3 className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-[#2C216F]">Estatísticas Detalhadas</h3>
                <p className="text-sm text-[#5C5C73] leading-relaxed">Taxa de ocupação, no-shows e horários de pico</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-50 to-white p-6 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 shadow-md">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-[#2C216F]">Performance por Mesa</h3>
                <p className="text-sm text-[#5C5C73] leading-relaxed">Mesas mais solicitadas e ticket médio</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-50 to-white p-6 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 shadow-md">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-[#2C216F]">Previsão de Demanda</h3>
                <p className="text-sm text-[#5C5C73] leading-relaxed">IA prevê demanda para próximos dias</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-50 to-white p-6 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 p-3 shadow-md">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-2 font-bold text-[#2C216F]">Gestão de No-Show</h3>
                <p className="text-sm text-[#5C5C73] leading-relaxed">Marcação automática e políticas personalizadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal lines separator */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <div 
          className="absolute inset-0 h-full w-full opacity-50"
          style={{
            background: 'repeating-linear-gradient(-45deg, #E4DFFF 0 1px, transparent 1px 16px)',
          }}
        />
      </div>

      {/* Seção: Recursos Técnicos */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
              Tecnologia{" "}
              <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                de Ponta
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-2xl border border-[#6841FA]/20 bg-gradient-to-br from-purple-50 to-white p-6 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6841FA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center">
                <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-[#6841FA] to-[#9b7dff] p-3 shadow-md">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-[#2C216F] mb-2">Real-time</h3>
                <p className="text-sm text-[#5C5C73] leading-relaxed">Atualizações instantâneas sem refresh</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-50 to-white p-6 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center">
                <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 shadow-md">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-[#2C216F] mb-2">Seguro</h3>
                <p className="text-sm text-[#5C5C73] leading-relaxed">Criptografia e Row Level Security</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-50 to-white p-6 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center">
                <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 shadow-md">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-[#2C216F] mb-2">Responsivo</h3>
                <p className="text-sm text-[#5C5C73] leading-relaxed">Mobile, tablet e desktop</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-50 to-white p-6 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center">
                <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 p-3 shadow-md">
                  <Server className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-[#2C216F] mb-2">Offline-First</h3>
                <p className="text-sm text-[#5C5C73] leading-relaxed">Funciona com internet instável</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats1 />

      {/* CTA Final */}
      <Cta4 />
    </main>
  );
}
