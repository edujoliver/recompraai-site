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
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
              Para o Cliente
            </span>
            <h2 className="text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
              Reserva{" "}
              <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Simples e Rápida
              </span>
            </h2>
            <p className="mt-4 text-base text-[#5C5C73] md:text-lg">
              Experiência intuitiva que permite reservas via WhatsApp, site ou app
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                <MessageSquare className="h-6 w-6 text-[#6841FA]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                Reserva via WhatsApp
              </h3>
              <p className="text-[#5C5C73]">
                Bot com IA que entende linguagem natural. Cliente conversa normalmente e sistema gerencia data, horário e preferências de mesa.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                <Check className="h-6 w-6 text-[#6841FA]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                Confirmação Automática
              </h3>
              <p className="text-[#5C5C73]">
                Confirmação instantânea via WhatsApp, SMS e e-mail com todos os detalhes da reserva.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                <Bell className="h-6 w-6 text-[#6841FA]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                Lembretes Inteligentes
              </h3>
              <p className="text-[#5C5C73]">
                Notificações automáticas 24h antes com opção de confirmar ou remarcar.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                <Settings className="h-6 w-6 text-[#6841FA]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                Escolha de Mesa
              </h3>
              <p className="text-[#5C5C73]">
                Selecione mesa com vista, área externa, VIP, romântica ou kid-friendly.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                <Users className="h-6 w-6 text-[#6841FA]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                Lista de Espera Digital
              </h3>
              <p className="text-[#5C5C73]">
                Fila virtual com notificação automática quando mesa liberar.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-[#6841FA]/10 p-3">
                <Clock className="h-6 w-6 text-[#6841FA]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2C216F]">
                Histórico de Reservas
              </h3>
              <p className="text-[#5C5C73]">
                Acesse todas as reservas anteriores e facilite remarcar favoritos.
              </p>
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
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#6841FA]/10 px-4 py-2">
                <Brain className="h-5 w-5 text-[#6841FA]" />
                <span className="text-sm font-semibold text-[#6841FA]">
                  IA Conversacional
                </span>
              </div>
              
              <h2 className="mb-4 text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                WhatsApp 100%{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Autônomo
                </span>
              </h2>
              
              <p className="mb-6 text-base text-[#5C5C73] md:text-lg">
                IA que entende contexto e responde perguntas complexas. Gerencia reservas 24/7 sem intervenção humana.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C216F]">Bot Inteligente</p>
                    <p className="text-sm text-[#5C5C73]">IA que conversa naturalmente e entende "mesa perto da janela" ou "6 pessoas com crianças"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C216F]">APIs Verbosas para LLMs</p>
                    <p className="text-sm text-[#5C5C73]">Respostas explicativas perfeitas para GPT, Claude e agentes de IA</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C216F]">Integração n8n, Make, Zapier</p>
                    <p className="text-sm text-[#5C5C73]">Webhooks e APIs prontas para automação total</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column - Image/Graphic */}
            <div className="relative">
              <Image 
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" 
                alt="IA Conversacional WhatsApp" 
                width={600} 
                height={400} 
                className="w-full rounded-lg shadow-lg"
              />
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
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
              Para o Restaurante
            </span>
            <h2 className="text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
              Gestão{" "}
              <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Completa
              </span>
            </h2>
            <p className="mt-4 text-base text-[#5C5C73] md:text-lg">
              Dashboard centralizado com visão 360° de todas as operações
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <Image 
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" 
                alt="Dashboard de Gestão" 
                width={600} 
                height={400} 
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column - Features */}
            <div className="order-1 lg:order-2">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C216F]">Painel de Controle Centralizado</p>
                    <p className="text-sm text-[#5C5C73]">Visualize todas as reservas do dia em tempo real</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C216F]">Múltiplos Salões</p>
                    <p className="text-sm text-[#5C5C73]">Gerencie área principal, VIP, externa e privativa separadamente</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C216F]">Configuração de Mesas</p>
                    <p className="text-sm text-[#5C5C73]">Defina capacidade, características e posicionamento</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C216F]">Grade Horária Flexível</p>
                    <p className="text-sm text-[#5C5C73]">Configure horários diferentes para cada dia (almoço, jantar, brunch)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C216F]">Bloqueios Administrativos</p>
                    <p className="text-sm text-[#5C5C73]">Reserve mesas/salões para manutenção ou eventos privados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C216F]">Check-in Digital</p>
                    <p className="text-sm text-[#5C5C73]">Marque chegada do cliente e controle ocupação em tempo real</p>
                  </div>
                </li>
              </ul>
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
            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
              <BarChart3 className="mx-auto mb-4 h-10 w-10 text-[#6841FA]" />
              <h3 className="mb-2 font-bold text-[#2C216F]">Estatísticas Detalhadas</h3>
              <p className="text-sm text-[#5C5C73]">Taxa de ocupação, no-shows e horários de pico</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
              <TrendingUp className="mx-auto mb-4 h-10 w-10 text-[#6841FA]" />
              <h3 className="mb-2 font-bold text-[#2C216F]">Performance por Mesa</h3>
              <p className="text-sm text-[#5C5C73]">Mesas mais solicitadas e ticket médio</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
              <Brain className="mx-auto mb-4 h-10 w-10 text-[#6841FA]" />
              <h3 className="mb-2 font-bold text-[#2C216F]">Previsão de Demanda</h3>
              <p className="text-sm text-[#5C5C73]">IA prevê demanda para próximos dias</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
              <Shield className="mx-auto mb-4 h-10 w-10 text-[#6841FA]" />
              <h3 className="mb-2 font-bold text-[#2C216F]">Gestão de No-Show</h3>
              <p className="text-sm text-[#5C5C73]">Marcação automática e políticas personalizadas</p>
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
            <div className="flex flex-col items-center text-center p-6">
              <Zap className="h-10 w-10 text-[#6841FA] mb-3" />
              <h3 className="font-bold text-[#2C216F] mb-2">Real-time</h3>
              <p className="text-sm text-[#5C5C73]">Atualizações instantâneas sem refresh</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <Shield className="h-10 w-10 text-[#6841FA] mb-3" />
              <h3 className="font-bold text-[#2C216F] mb-2">Seguro</h3>
              <p className="text-sm text-[#5C5C73]">Criptografia e Row Level Security</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <Smartphone className="h-10 w-10 text-[#6841FA] mb-3" />
              <h3 className="font-bold text-[#2C216F] mb-2">Responsivo</h3>
              <p className="text-sm text-[#5C5C73]">Mobile, tablet e desktop</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <Server className="h-10 w-10 text-[#6841FA] mb-3" />
              <h3 className="font-bold text-[#2C216F] mb-2">Offline-First</h3>
              <p className="text-sm text-[#5C5C73]">Funciona com internet instável</p>
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
