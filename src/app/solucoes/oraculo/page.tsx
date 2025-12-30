import type { Metadata } from "next";
import Image from "next/image";
import { Hero1 } from "@/components/hero1";
import { Cta4 } from "@/components/cta4";
import { Stats1 } from "@/components/stats1";
import { Check, Brain, Zap, Target, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Oráculo IA: Inteligência Artificial para Restaurantes | RecompraAI",
  description:
    "IA exclusiva que analisa comportamento de clientes, prevê churn, sugere ações personalizadas e automatiza decisões. Aumente vendas com inteligência artificial real para restaurantes.",
  keywords: [
    "inteligência artificial restaurante",
    "IA para delivery",
    "previsão de churn",
    "análise preditiva clientes",
    "automação decisões restaurante",
    "machine learning gastronomia",
    "IA fidelização clientes",
    "oráculo ia recompraai",
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
    title: "Oráculo IA: Inteligência Artificial para Restaurantes | RecompraAI",
    description:
      "IA que prevê churn, sugere ações personalizadas e automatiza decisões. Aumente vendas com inteligência artificial real.",
    type: "website",
    url: "https://recompraai.com.br/solucoes/oraculo",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "RecompraAI - Oráculo IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oráculo IA: Inteligência Artificial para Restaurantes",
    description:
      "IA que prevê churn, sugere ações personalizadas e automatiza decisões. Aumente vendas com inteligência artificial real.",
    images: ["/logos/recompraai.svg"],
  },
};

export default function OraculoIAPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RecompraAI Oráculo IA",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Inteligência Artificial exclusiva que analisa comportamento de clientes, prevê churn, sugere ações personalizadas e automatiza decisões para restaurantes.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    featureList: [
      "Previsão de churn com 85% de precisão",
      "Análise preditiva de comportamento",
      "Sugestões personalizadas de campanhas",
      "Automação de decisões inteligentes",
      "Identificação de oportunidades de upsell",
      "Recomendações em linguagem natural",
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
            backgroundImage: 'radial-gradient(circle, #f59e0b 1.0px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />
        
        <div className="relative z-20 w-full py-12">
          <Hero1
            heading={
              <>
                Oráculo IA: A <span className="text-[#f59e0b]">Inteligência Artificial</span> que Trabalha por Você
              </>
            }
            description="Prevê quem vai sumir, identifica oportunidades de venda e sugere exatamente o que fazer. IA que analisa milhares de dados em segundos e te fala em linguagem simples como vender mais."
            buttons={{
              primary: {
                text: "Solicitar Demonstração",
                url: "#contato",
              },
            }}
            image={{
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
              alt: "Oráculo IA - Inteligência Artificial para restaurantes",
            }}
          />
        </div>
      </section>

      {/* Diagonal lines separator */}
      <div className="relative h-16 w-full overflow-hidden bg-white">
        <div 
          className="absolute inset-0 h-full w-full opacity-50"
          style={{
            background: 'repeating-linear-gradient(-45deg, #FEF3C7 0px, #FEF3C7 1px, transparent 1px, transparent 16px)',
          }}
        />
      </div>

      {/* Seção 1: Previsão de Churn */}
      <section
        id="previsao-churn"
        className="py-16 bg-white"
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Previsão de Churn
              </span>
              <h2 className="font-sans text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Saiba Quais Clientes Vão Sumir{" "}
                <span style={{ background: "linear-gradient(to right, #dc2626, #f87171)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Antes que Aconteça
                </span>
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-base font-medium text-[#5C5C73] sm:text-lg">
                Oráculo analisa padrões de comportamento e prevê com 85% de precisão quais clientes estão em risco de abandono. 
                Receba alertas antecipados e aja antes de perder o cliente para a concorrência.
              </p>
            </div>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image 
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" 
                      alt="Sistema de previsão de churn com inteligência artificial" 
                      width={800} 
                      height={600} 
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="font-mono text-5xl font-light text-red-500 opacity-30">01</span>
                    <span className="rounded-full bg-red-500 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">ANTECIPAÇÃO</span>
                  </div>
                  <h3 className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6" style={{ background: "linear-gradient(to right, #dc2626, #f87171)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Antecipe Problemas, Salve Clientes
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Previsão de churn com <strong className="text-red-600">85% de precisão</strong> em tempo real</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Alertas automáticos de clientes em risco de abandono</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Análise de comportamento: frequência, ticket médio, tempo desde última compra</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Score de risco: <span className="font-mono text-sm bg-red-100 px-2 py-0.5 rounded">baixo • médio • alto • crítico</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Sugestões automáticas de ações para retenção</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Priorização inteligente: foco em clientes de <strong className="text-red-600">alto valor</strong></span>
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
            background: 'repeating-linear-gradient(-45deg, #FEE2E2 0px, #FEE2E2 1px, transparent 1px, transparent 16px)',
          }}
        />
      </div>

      {/* Seção 2: Análise Preditiva */}
      <section id="analise-preditiva" className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Análise Preditiva
              </span>
              <h2 className="font-sans text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Entenda o{" "}
                <span style={{ background: "linear-gradient(to right, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Comportamento Futuro
                </span>
                {" "}dos Seus Clientes
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-base font-medium text-[#5C5C73] sm:text-lg">
                Oráculo usa machine learning para identificar padrões invisíveis e prever próximas compras, 
                preferências futuras e momentos ideais para ação comercial.
              </p>
            </div>
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image 
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" 
                      alt="Análise preditiva de comportamento com machine learning" 
                      width={800} 
                      height={600} 
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                <div>
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="font-mono text-5xl font-light text-blue-500 opacity-30">02</span>
                    <span className="rounded-full bg-blue-500 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">PREVISÃO</span>
                  </div>
                  <h3 className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6" style={{ background: "linear-gradient(to right, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Machine Learning Real
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Previsão de <strong className="text-blue-600">próxima compra</strong>: quando cliente vai pedir novamente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Identificação de padrões: dias, horários e produtos preferidos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span><strong className="text-blue-600">Lifetime Value (LTV)</strong>: previsão de valor vitalício do cliente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Segmentação automática por comportamento futuro</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Análise de sazonalidade e tendências de consumo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Modelo que <strong className="text-blue-600">aprende e melhora</strong> com o tempo automaticamente</span>
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
            background: 'repeating-linear-gradient(-45deg, #DBEAFE 0px, #DBEAFE 1px, transparent 1px, transparent 16px)',
          }}
        />
      </div>

      {/* Seção 3: Sugestões Personalizadas */}
      <section
        id="sugestoes-personalizadas"
        className="py-16 bg-white"
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Sugestões Personalizadas
              </span>
              <h2 className="font-sans text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                IA que Te Fala{" "}
                <span style={{ background: "linear-gradient(to right, #10b981, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Exatamente o Que Fazer
                </span>
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-base font-medium text-[#5C5C73] sm:text-lg">
                Oráculo não apenas identifica problemas, mas sugere ações concretas em linguagem simples. 
                Receba recomendações personalizadas de campanhas, ofertas e momentos para contato.
              </p>
            </div>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image 
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" 
                      alt="Sugestões personalizadas de campanhas e ações" 
                      width={800} 
                      height={600} 
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="font-mono text-5xl font-light text-green-500 opacity-30">03</span>
                    <span className="rounded-full bg-green-500 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">AÇÃO INTELIGENTE</span>
                  </div>
                  <h3 className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6" style={{ background: "linear-gradient(to right, #10b981, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Ações Baseadas em Dados
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Sugestões de campanhas <strong className="text-green-600">personalizadas por cliente</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Recomendações de ofertas com maior taxa de conversão</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span><strong className="text-green-600">Melhor momento</strong> para contato baseado em histórico</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Produtos complementares para upsell e cross-sell</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Linguagem natural: <span className="font-mono text-sm bg-green-100 px-2 py-0.5 rounded">&quot;Ofereça 15% de desconto hoje às 18h&quot;</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Aprovação com <strong className="text-green-600">1 clique</strong>: execute sugestões instantaneamente</span>
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
            background: 'repeating-linear-gradient(-45deg, #D1FAE5 0px, #D1FAE5 1px, transparent 1px, transparent 16px)',
          }}
        />
      </div>

      {/* Seção 4: Automação Inteligente */}
      <section id="automacao-inteligente" className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Automação Inteligente
              </span>
              <h2 className="font-sans text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Decisões{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Automatizadas
                </span>
                {" "}que Vendem Mais
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-base font-medium text-[#5C5C73] sm:text-lg">
                Configure uma vez e deixe Oráculo trabalhar 24/7. A IA toma decisões inteligentes sozinha: 
                dispara campanhas, ajusta ofertas e otimiza estratégias automaticamente.
              </p>
            </div>
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image 
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" 
                      alt="Automação inteligente de decisões e campanhas" 
                      width={800} 
                      height={600} 
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                <div>
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="font-mono text-5xl font-light text-[#6841FA] opacity-30">04</span>
                    <span className="rounded-full bg-[#6841FA] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">AUTOMAÇÃO 24/7</span>
                  </div>
                  <h3 className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6" style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    IA que Trabalha por Você
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Campanhas automáticas disparadas no <strong className="text-[#6841FA]">momento certo</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Otimização contínua de ofertas baseada em performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Segmentação dinâmica: grupos atualizados automaticamente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span><strong className="text-[#6841FA]">A/B testing automático</strong>: IA testa e escolhe melhor opção</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Ajuste de frequência: evita saturação de mensagens</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Relatórios semanais de <strong className="text-[#6841FA]">performance e melhorias</strong> aplicadas</span>
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
        title="Experimente a IA mais avançada para restaurantes"
        description="Teste Oráculo por 14 dias e veja como inteligência artificial real aumenta suas vendas. Previsão de churn, análise preditiva e sugestões personalizadas em uma única plataforma."
        buttonText="Solicitar demonstração gratuita"
        buttonUrl="#contato"
        items={[
          "IA treinada especificamente para comportamento de clientes de restaurante",
          "Previsão de churn com 85% de precisão comprovada",
          "Sugestões em linguagem natural: sem termos técnicos",
          "Automação completa: configure uma vez e deixe trabalhando",
          "Sem fidelidade: cancele quando quiser",
        ]}
      />
      </div>
    </main>
  );
}
