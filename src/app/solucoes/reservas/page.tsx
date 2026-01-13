import type { Metadata } from "next";
import Image from "next/image";
import { Hero1 } from "@/components/hero1";
import { Cta4 } from "@/components/cta4";
import { Stats1 } from "@/components/stats1";
import { Check, Sparkles, Zap, Shield, MessageSquare, Calendar, Users, BarChart3, Globe, Lock, Smartphone, Clock, Bell, ChevronRight, Settings, TrendingUp, Brain, Server, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Sistema de Reservas Inteligente com IA | RecompraAI",
  description:
    "Sistema de reservas com IA conversacional: bot WhatsApp 100% autônomo, gestão de mesas inteligentes, múltiplos salões, grade horária, analytics e APIs verbosas para LLMs. Real-time e seguro.",
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
    "APIs para LLMs",
    "bot autônomo reservas"
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
      "Bot WhatsApp 100% autônomo, IA conversacional, gestão completa de mesas e salões, analytics avançado e APIs verbosas para LLMs. Sistema já em produção.",
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
      "Bot WhatsApp 100% autônomo, IA conversacional, gestão completa de mesas e salões, analytics avançado e APIs verbosas para LLMs.",
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
    description: "Sistema de reservas com IA conversacional: bot WhatsApp 100% autônomo, gestão de mesas inteligentes, múltiplos salões, analytics avançado e APIs verbosas para LLMs.",
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
      "Mesas Inteligentes (VIP, Vista Mar, Externa)",
      "Grade Horária Flexível",
      "Confirmação Automática",
      "Analytics e Previsão de Demanda",
      "Lista de Espera Digital",
      "Integração n8n/Make/Zapier",
      "Real-time com Supabase",
      "Offline-First",
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
        className="relative isolate grid place-items-center overflow-hidden [--hero-min:560px] [--hero-max:880px] [--wave-h:clamp(72px,5vw,120px)] min-h-[clamp(var(--hero-min),78svh,var(--hero-max))] [@media(min-aspect-ratio:16/9)]:min-h-[clamp(var(--hero-min),62svh,var(--hero-max))] [@media(min-aspect-ratio:21/9)]:min-h-[clamp(var(--hero-min),56svh,var(--hero-max))]"
        style={{
          backgroundColor: "#6841FA",
        }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <Image 
            src="/logos/bghero.svg" 
            alt="Background pattern com design moderno representando sistema de reservas inteligente" 
            width={800} 
            height={600} 
            className="h-full w-full object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5b3cf4]/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 w-full pb-[calc(var(--wave-h)+24px)]">
          <Hero1
            badge="Sistema de Reservas | IA Nativa desde o Design"
            heading="Reservas 100% Autônomas via WhatsApp com IA Conversacional"
            description="Bot inteligente que gerencia reservas 24/7, gestão completa de mesas e salões, analytics em tempo real e APIs verbosas prontas para LLMs. Sistema já em produção."
            buttons={{
              primary: {
                text: "Ver demonstração ao vivo",
                url: "#contato",
              },
              secondary: {
                text: "Conhecer a IA",
                url: "#ia-whatsapp",
              },
            }}
            image={{
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
              alt: "Dashboard do Sistema de Reservas Inteligente RecompraAI",
            }}
          />
        </div>
        <svg
          className="pointer-events-none absolute inset-x-0 -bottom-px z-10 h-[var(--wave-h)] w-full text-[#F5F5FF]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 64C240 100 480 24 720 60C960 96 1200 96 1440 60V120H0V64Z" fill="currentColor" />
        </svg>
      </section>

      {/* Seção 1: Para o Cliente - Experiência de Reserva */}
      <section
        id="experiencia-cliente"
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                📱 Experiência do Cliente
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Reserva Online
                </span>
                {" "}Simples e Inteligente
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Seus clientes reservam em segundos pelo WhatsApp, site ou app. 
                Escolhem mesa, horário e recebem confirmação automática. Experiência 5 estrelas.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Funcionalidade 1 */}
              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <MessageSquare className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Reserva via WhatsApp
                </h3>
                <p className="text-[#5C5C73]">
                  Bot 100% autônomo que entende linguagem natural. Cliente conversa normalmente e a IA gerencia tudo: data, horário, número de pessoas e preferências de mesa.
                </p>
              </div>

              {/* Funcionalidade 2 */}
              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <Check className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Confirmação Automática
                </h3>
                <p className="text-[#5C5C73]">
                  Confirmação instantânea via WhatsApp, SMS e Email com todos os detalhes: data, hora, mesa escolhida, localização do restaurante e contato direto.
                </p>
              </div>

              {/* Funcionalidade 3 */}
              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <Bell className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Lembretes Inteligentes
                </h3>
                <p className="text-[#5C5C73]">
                  Lembrete automático 24h antes da reserva com opção de confirmar ou remarcar. Reduz drasticamente no-shows e otimiza ocupação.
                </p>
              </div>

              {/* Funcionalidade 4 */}
              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <Settings className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Escolha de Mesa
                </h3>
                <p className="text-[#5C5C73]">
                  Cliente escolhe mesa preferida: vista panorâmica, ambiente externo, mesa romântica, kid-friendly, VIP ou ar-condicionado. Experiência personalizada.
                </p>
              </div>

              {/* Funcionalidade 5 */}
              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <Users className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Lista de Espera Digital
                </h3>
                <p className="text-[#5C5C73]">
                  Sistema inteligente de fila com notificação automática quando mesa liberar. Cliente não precisa ligar nem esperar resposta.
                </p>
              </div>

              {/* Funcionalidade 6 */}
              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <Clock className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Histórico de Reservas
                </h3>
                <p className="text-[#5C5C73]">
                  Cliente acessa histórico completo de todas as visitas anteriores. Facilita remarcar na mesma mesa favorita ou em novo horário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: IA WhatsApp Autônoma - DESTAQUE ESPECIAL */}
      <section
        id="ia-whatsapp"
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #6841FA 0%, #8b5cf6 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                  🤖 Diferencial Competitivo
                </span>
              </div>
              <h2 className="text-pretty text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                WhatsApp 100% Autônomo
                <br />
                <span className="text-[#E5E0FF]">
                  com IA Conversacional
                </span>
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-white/90 sm:text-lg">
                Não é chatbot com scripts. É IA real que entende contexto, 
                responde perguntas complexas e gerencia reservas 24/7 sem intervenção humana.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-start gap-4">
                  <div className="rounded-lg bg-white/10 p-3">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      Bot Inteligente
                    </h3>
                    <p className="text-white/80">
                      Entende linguagem natural, contexto e intenções. Cliente fala normalmente como falaria com um atendente humano.
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#B7A6FF]" />
                    <span className="text-white/90">
                      Entende &quot;quero mesa perto da janela sexta à noite&quot;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#B7A6FF]" />
                    <span className="text-white/90">
                      Responde perguntas sobre cardápio, localização e horários
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#B7A6FF]" />
                    <span className="text-white/90">
                      Sugere horários alternativos quando lotado
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#B7A6FF]" />
                    <span className="text-white/90">
                      Aprende com cada conversa e melhora continuamente
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-start gap-4">
                  <div className="rounded-lg bg-white/10 p-3">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      APIs Verbosas para LLMs
                    </h3>
                    <p className="text-white/80">
                      APIs otimizadas para modelos de linguagem. Respostas detalhadas prontas para consumo por IA externa.
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#B7A6FF]" />
                    <span className="text-white/90">
                      Integração nativa com n8n, Make e Zapier
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#B7A6FF]" />
                    <span className="text-white/90">
                      Webhooks com contexto completo em linguagem natural
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#B7A6FF]" />
                    <span className="text-white/90">
                      Conecte com seu ChatGPT, Claude ou Gemini
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#B7A6FF]" />
                    <span className="text-white/90">
                      Documentação completa para desenvolvedores
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-white/30 bg-white/10 p-8 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex rounded-full bg-[#FFD700]/20 px-4 py-2">
                  <span className="text-sm font-bold text-[#FFD700]">
                    ⚡ SISTEMA JÁ EM PRODUÇÃO
                  </span>
                </div>
                <p className="max-w-2xl text-lg font-medium text-white">
                  Não é promessa. É tecnologia testada e validada em operação real. 
                  IA conversacional nativa desde o primeiro commit do código.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Para o Restaurante - Gestão Completa */}
      <section
        id="gestao-restaurante"
        className="py-16 bg-white"
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                🎯 Para o Restaurante
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Gestão Completa
                </span>
                {" "}de Reservas e Ocupação
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Painel de controle centralizado para gerenciar múltiplos salões, 
                configurar mesas, definir bloqueios e acompanhar ocupação em tempo real.
              </p>
            </div>

            <div className="lg:flex lg:gap-x-8 lg:items-start">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image 
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" 
                    alt="Dashboard de gestão de reservas com múltiplos salões" 
                    width={800} 
                    height={600} 
                    className="aspect-4/3 w-full rounded-md border border-border object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6841FA]/10">
                      <Calendar className="h-6 w-6 text-[#6841FA]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                      Painel de Controle Centralizado
                    </h3>
                    <p className="text-[#5C5C73]">
                      Visualize todas as reservas do dia, semana ou mês em uma única tela. 
                      Filtre por salão, status, horário ou tipo de mesa. Interface intuitiva e responsiva.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6841FA]/10">
                      <Globe className="h-6 w-6 text-[#6841FA]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                      Múltiplos Salões Configuráveis
                    </h3>
                    <p className="text-[#5C5C73]">
                      Configure quantos salões precisar: Salão Principal, Varanda, Terraço, Área VIP. 
                      Cada salão com suas próprias mesas, horários e regras.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6841FA]/10">
                      <Settings className="h-6 w-6 text-[#6841FA]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                      Configuração de Mesas Inteligente
                    </h3>
                    <p className="text-[#5C5C73]">
                      Configure capacidade, características (vista, externa, romântica, VIP, A/C) 
                      e disponibilidade de cada mesa. Sistema sugere automaticamente mesa ideal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6841FA]/10">
                      <Clock className="h-6 w-6 text-[#6841FA]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                      Grade Horária Flexível
                    </h3>
                    <p className="text-[#5C5C73]">
                      Defina turnos personalizados: almoço (11h-15h), happy hour (17h-19h), 
                      jantar (19h-23h). Intervalos configuráveis por dia da semana.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6841FA]/10">
                      <Shield className="h-6 w-6 text-[#6841FA]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                      Bloqueios Administrativos
                    </h3>
                    <p className="text-[#5C5C73]">
                      Bloqueie mesas ou salões inteiros para eventos privados, manutenção 
                      ou reservas especiais. Cliente não vê opções bloqueadas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6841FA]/10">
                      <Smartphone className="h-6 w-6 text-[#6841FA]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                      Check-in Digital
                    </h3>
                    <p className="text-[#5C5C73]">
                      Registre chegada do cliente com um toque. Status tracking completo: 
                      agendado → confirmado → cliente chegou → mesa ocupada → finalizado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Analytics e Relatórios */}
      <section
        id="analytics"
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                📊 Analytics e Relatórios
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Inteligência de Dados
                </span>
                {" "}para Decisões Estratégicas
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Dashboards com KPIs, gráficos de tendência, mapa de calor e previsão de demanda. 
                Tome decisões baseadas em dados reais sobre seu negócio.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <BarChart3 className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Taxa de Ocupação
                </h3>
                <p className="text-[#5C5C73]">
                  Acompanhe taxa de ocupação por salão, turno e dia da semana. 
                  Identifique horários de pico e oportunidades de otimização.
                </p>
              </div>

              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <TrendingUp className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Gestão de No-Show
                </h3>
                <p className="text-[#5C5C73]">
                  Monitore taxa de não comparecimento, identifique padrões e 
                  acione campanhas automáticas de engajamento.
                </p>
              </div>

              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <Clock className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Horários de Pico
                </h3>
                <p className="text-[#5C5C73]">
                  Visualize demanda por horário e dia. Otimize staffing, 
                  ofertas especiais e precificação dinâmica.
                </p>
              </div>

              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <Users className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Performance por Mesa
                </h3>
                <p className="text-[#5C5C73]">
                  Analise taxa de ocupação, ticket médio e tempo de permanência 
                  de cada mesa. Otimize layout do salão.
                </p>
              </div>

              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <TrendingUp className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Previsão de Demanda
                </h3>
                <p className="text-[#5C5C73]">
                  IA analisa histórico e prevê demanda futura. Antecipe lotações 
                  e planeje operação com semanas de antecedência.
                </p>
              </div>

              <div className="rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                  <BarChart3 className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                  Mapa de Calor
                </h3>
                <p className="text-[#5C5C73]">
                  Visualização colorida de ocupação por horário e dia. 
                  Identifique padrões e oportunidades visualmente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Recursos Técnicos */}
      <section
        id="recursos-tecnicos"
        className="py-16 bg-white"
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                ⚡ Multi-Tenant & Escalável
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Arquitetura Moderna
                </span>
                {" "}e Segura
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Stack tecnológico enterprise-grade com real-time, segurança nativa 
                e escalabilidade ilimitada. Zero configuração técnica.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#6841FA]/10">
                  <Zap className="h-8 w-8 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                  Real-time
                </h3>
                <p className="text-sm text-[#5C5C73]">
                  Supabase Realtime. Atualizações instantâneas em todos os dispositivos conectados.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#6841FA]/10">
                  <Lock className="h-8 w-8 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                  Seguro com RLS
                </h3>
                <p className="text-sm text-[#5C5C73]">
                  Row Level Security nativo. Cada tenant vê apenas seus próprios dados.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#6841FA]/10">
                  <Smartphone className="h-8 w-8 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                  Responsivo
                </h3>
                <p className="text-sm text-[#5C5C73]">
                  Interface adaptativa para desktop, tablet e mobile. Gerencie de qualquer lugar.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#6841FA]/10">
                  <Server className="h-8 w-8 text-[#6841FA]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                  Offline-First
                </h3>
                <p className="text-sm text-[#5C5C73]">
                  Funciona sem internet. Sincronização automática quando reconectar.
                </p>
              </div>
            </div>

            <div className="rounded-xl border-2 border-[#6841FA] bg-gradient-to-br from-[#6841FA]/5 to-[#B7A6FF]/5 p-8">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex rounded-full bg-[#6841FA]/10 px-4 py-2">
                  <span className="text-sm font-bold text-[#6841FA]">
                    ZERO CONFIGURAÇÃO TÉCNICA
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#2C216F]">
                  Sistema Pronto para Usar
                </h3>
                <p className="max-w-2xl text-base text-[#5C5C73]">
                  Não precisa contratar desenvolvedor, configurar servidor ou instalar nada. 
                  Crie sua conta, configure mesas e salões em minutos. Sistema já está em nuvem, 
                  seguro, com backup automático e disponível 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: Diferenciais Competitivos */}
      <section
        id="diferenciais"
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                🏆 Por Que Escolher RecompraAI?
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Diferenciais que
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {" "}Transformam Resultados
                </span>
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex gap-4 rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                    IA Nativa desde o Design
                  </h3>
                  <p className="text-[#5C5C73]">
                    Não foi adaptado. Foi construído com IA conversacional e APIs verbosas 
                    desde o primeiro commit. É o diferencial técnico que importa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                    Bot 100% Autônomo
                  </h3>
                  <p className="text-[#5C5C73]">
                    Não é chatbot com scripts. Bot gerencia reservas sem intervenção humana, 
                    entende contexto e responde perguntas complexas naturalmente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                    APIs Verbosas para LLMs
                  </h3>
                  <p className="text-[#5C5C73]">
                    APIs otimizadas para modelos de linguagem. Conecte com GPT, Claude, 
                    Make, n8n e Zapier sem limitações. Documentação completa para devs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                    Sistema já em Produção
                  </h3>
                  <p className="text-[#5C5C73]">
                    Não é beta ou MVP. É sistema testado e validado em operação real. 
                    Você começa com tecnologia madura desde o dia 1.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                    Multi-Tenant Nativo
                  </h3>
                  <p className="text-[#5C5C73]">
                    Cada restaurante tem ambiente isolado com RLS. Segurança enterprise 
                    sem custo adicional. Escalabilidade ilimitada.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg border border-[#E5E0FF] bg-white p-6 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-[#2C216F]">
                    Zero Configuração Técnica
                  </h3>
                  <p className="text-[#5C5C73]">
                    Não precisa contratar desenvolvedor ou TI. Sistema pronto para usar 
                    em minutos. Configure mesas, salões e comece a operar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <Stats1
            stats={[
              {
                id: "1",
                value: "100%",
                description: "Autônomo via WhatsApp",
              },
              {
                id: "2",
                value: "24/7",
                description: "Bot ativo sem pausas",
              },
              {
                id: "3",
                value: "Real-time",
                description: "Atualizações instantâneas",
              },
              {
                id: "4",
                value: "Zero Setup",
                description: "Pronto para usar em minutos",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16" style={{ backgroundColor: "#F5F5FF" }}>
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <Cta4 />
        </div>
      </section>
    </main>
  );
}
