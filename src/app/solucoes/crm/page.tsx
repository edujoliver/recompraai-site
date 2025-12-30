import type { Metadata } from "next";
import Image from "next/image";
import { Hero1 } from "@/components/hero1";
import { Cta4 } from "@/components/cta4";
import { Stats1 } from "@/components/stats1";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "CRM Premium para Restaurantes | RecompraAI",
  description:
    "Plataforma completa de CRM para restaurantes: ficha detalhada de clientes, gestão de reservas, dashboard em tempo real e alertas inteligentes de oportunidades.",
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
    title: "CRM Premium para Restaurantes | RecompraAI",
    description:
      "Centralize dados dos clientes, gerencie reservas e aumente a recompra com o CRM mais inteligente para restaurantes.",
    type: "website",
    url: "https://recompraai.com.br/solucoes/crm",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "RecompraAI - CRM Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Premium para Restaurantes | RecompraAI",
    description:
      "Centralize dados dos clientes, gerencie reservas e aumente a recompra com o CRM mais inteligente para restaurantes.",
    images: ["/logos/recompraai.svg"],
  },
};

export default function CRMPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RecompraAI CRM Premium",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "CRM completo para restaurantes com ficha detalhada de clientes, gestão de reservas, dashboard em tempo real e alertas inteligentes.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    featureList: [
      "Ficha completa de clientes",
      "Histórico de pedidos e visitas",
      "Dashboard em tempo real",
      "Gestão de reservas",
      "Alertas de oportunidades",
      "Segmentação inteligente",
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
          <Image src="/logos/bghero.svg" alt="Background pattern com design moderno representando CRM e gestão de clientes" width={800} height={600} className="h-full w-full object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5b3cf4]/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 w-full pb-[calc(var(--wave-h)+24px)]">
          <Hero1
            badge="CRM Premium | Gestão Completa de Clientes"
            heading="Conheça cada cliente e aumente a recompra do seu restaurante"
            description="Centralize histórico de pedidos, preferências alimentares, reservas e insights em uma única plataforma. Fidelize mais e venda melhor com dados reais sobre seus clientes."
            buttons={{
              primary: {
                text: "Solicitar demonstração",
                url: "#contato",
              },
              secondary: {
                text: "Ver funcionalidades",
                url: "#ficha-cliente",
              },
            }}
            image={{
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
              alt: "Dashboard do CRM Premium RecompraAI",
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

      {/* Seção 1: Ficha Completa do Cliente */}
      <section
        id="ficha-cliente"
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Ficha Completa do Cliente
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Histórico Completo
                </span>
                {" "}de Cada Cliente em um Só Lugar
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Acesse histórico de pedidos, preferências alimentares, aniversários, frequência de visitas e muito mais. 
                Tudo centralizado para que você ofereça um atendimento personalizado e aumente a fidelização.
              </p>
            </div>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Ficha completa do cliente com histórico de pedidos" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Dados que Importam
                  </h3>
                  <ul className="space-y-3 text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Histórico completo de pedidos e valores gastos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Preferências alimentares e restrições</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Aniversários e datas importantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Frequência de visitas e ticket médio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Tags personalizadas e segmentação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Canais de preferência (WhatsApp, SMS, E-mail)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Reservas e Visitas */}
      <section id="reservas" className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Reservas e Visitas
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Gestão{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Inteligente
                </span>
                {" "}de Mesas e Reservas
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Controle reservas, acompanhe no-shows, identifique clientes VIPs e ofereça experiências personalizadas 
                desde o momento do agendamento até a saída do cliente.
              </p>
            </div>
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Sistema de gestão de reservas e mesas" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Controle Total de Reservas
                  </h3>
                  <ul className="space-y-3 text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Gestão visual de mesas e ocupação em tempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Histórico completo de visitas por cliente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Identificação automática de clientes VIP e recorrentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Alertas de no-show e clientes faltosos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Integração com WhatsApp para confirmações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Lembretes automáticos de aniversário e datas especiais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Dashboard em Tempo Real */}
      <section
        id="dashboard"
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Dashboard Inteligente
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Métricas e Indicadores em{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Tempo Real
                </span>
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Acompanhe o desempenho do seu restaurante com dashboards visuais e intuitivos. 
                Veja ticket médio, taxa de recompra, clientes ativos e muito mais em tempo real.
              </p>
            </div>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Dashboard com indicadores e métricas em tempo real" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Decisões Baseadas em Dados
                  </h3>
                  <ul className="space-y-3 text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Ticket médio por cliente e por período</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Taxa de recompra e frequência de visitas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Clientes ativos, inativos e em risco de churn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Performance de campanhas de marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Produtos e pratos mais vendidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Comparativos mensais e anuais automatizados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Alertas Inteligentes */}
      <section id="alertas" className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Alertas e Insights
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Oportunidades Identificadas{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Automaticamente
                </span>
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Receba alertas inteligentes sobre clientes em risco de churn, oportunidades de upsell e 
                momentos ideais para reativar clientes inativos com campanhas personalizadas.
              </p>
            </div>
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Alertas inteligentes e insights de oportunidades" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Inteligência que Vende Mais
                  </h3>
                  <ul className="space-y-3 text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Alertas de clientes em risco de abandono (churn)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Identificação de clientes prontos para upgrade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Sugestões de campanhas personalizadas por segmento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Notificações de aniversários e datas especiais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Insights sobre produtos complementares (upsell)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Lembretes de clientes que não visitam há X dias</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats1 />

      {/* CTA Final - Wrapper com fundo */}
      <div style={{ backgroundColor: "#F5F5FF" }}>
        <Cta4
        title="Experimente o CRM Premium gratuitamente"
        description="Teste todas as funcionalidades por 14 dias sem compromisso. Veja como é fácil centralizar dados dos clientes, automatizar campanhas e aumentar a recompra do seu restaurante."
        buttonText="Solicitar demonstração gratuita"
        buttonUrl="#contato"
        items={[
          "Importação automática de clientes do PDV e delivery",
          "Integração com WhatsApp, SMS e E-mail",
          "Dashboard em tempo real com métricas principais",
          "Suporte especializado durante toda a implementação",
          "Sem fidelidade: cancele quando quiser",
        ]}
      />
      </div>
    </main>
  );
}
