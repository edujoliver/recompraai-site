import type { Metadata } from "next";
import { Hero1 } from "@/components/hero1";
import { Cta4 } from "@/components/cta4";
import { Stats1 } from "@/components/stats1";
import { Testimonial4 } from "@/components/testimonial4";
import { Faq1 } from "@/components/faq1";
import { StatsCounter } from "@/components/stats-counter";
import { Check } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CRM para Restaurantes | Sistema de Reservas Inteligente | RecompraAI",
  description: "CRM completo com sistema avançado de reservas: dashboard com KPIs, mesas inteligentes, grade horária, confirmação via WhatsApp e automação de recompra. Gestão completa para restaurantes.",
  keywords: [
    "CRM para restaurantes",
    "sistema de reservas restaurante",
    "gestão de mesas inteligente",
    "dashboard analítico reservas",
    "grade horária restaurante",
    "confirmação automática whatsapp",
    "mapa de calor ocupação",
    "fidelização restaurante",
    "recompra automática restaurante",
    "mesas VIP vista mar",
    "bloqueio eventos privados",
    "controle de salões",
    "API integração restaurante",
    "sistema fidelidade restaurante"
  ],
  authors: [{ name: "RecompraAI" }],
  creator: "RecompraAI",
  publisher: "RecompraAI",
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
    type: "website",
    locale: "pt_BR",
    url: "https://recompraai.com.br",
    siteName: "RecompraAI",
    title: "CRM para Restaurantes | Fidelização e Recompra Automática",
    description: "Cadastre clientes direto na nossa plataforma ou conecte seus sistemas via API. Automatize campanhas de recompra e aumente suas vendas diretas com seus próprios dados.",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "RecompraAI - Sistema de Recompra para Restaurantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM para Restaurantes | Fidelização e Recompra Automática",
    description: "Automatize campanhas de recompra e aumente vendas diretas com ou sem integração.",
    images: ["/logos/recompraai.svg"],
    creator: "@recompraai",
  },
  alternates: {
    canonical: "https://recompraai.com.br",
  },
  other: {
    "msapplication-TileColor": "#6841FA",
    "theme-color": "#6841FA",
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RecompraAI",
    url: "https://recompraai.com.br",
    logo: "https://recompraai.com.br/logos/recompraai.svg",
    description: "CRM com automação de WhatsApp para fidelização e recompra automática. Cadastre clientes direto ou integre via API.",
    sameAs: [
      "https://www.instagram.com/recompraai",
      "https://www.linkedin.com/company/recompraai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: "Portuguese",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RecompraAI",
    url: "https://recompraai.com.br",
    description: "CRM para restaurantes com automação de WhatsApp. Funciona com ou sem integração via API.",
    publisher: {
      "@type": "Organization",
      name: "RecompraAI",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RecompraAI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    description: "CRM com automação de WhatsApp para restaurantes. Fidelização, recompra automática e gestão de clientes com ou sem integração.",
  };

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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
                Sistema Inteligente para <span className="text-[#6841FA]">Restaurantes</span>
              </>
            }
            description="CRM completo com sistema avançado de reservas: dashboard com KPIs, mesas inteligentes, grade horária, confirmação via WhatsApp e automação de recompra. Gestão completa com mapa de calor e análise de tendências para vender mais."
            buttons={{
              primary: {
                text: "Começar Grátis por 14 Dias",
                url: "#contato",
              },
            }}
            image={{
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
              alt: "Dashboard do RecompraAI - Sistema de Recompra para Restaurantes",
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

      {/* Stats Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Statistics (Horizontal) */}
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col">
                <div className="mb-2 text-4xl font-bold text-[#6841FA] md:text-5xl">
                  <StatsCounter end={10} suffix="+" />
                </div>
                <div className="text-sm font-medium text-gray-700">
                  Restaurantes Parceiros
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <div className="mb-2 text-4xl font-bold text-[#6841FA] md:text-5xl">
                  <StatsCounter end={50} suffix="K+" />
                </div>
                <div className="text-sm font-medium text-gray-700">
                  Mensagens Enviadas/Mês
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <div className="mb-2 text-4xl font-bold text-[#6841FA] md:text-5xl">
                  <StatsCounter end={40} suffix="%+" />
                </div>
                <div className="text-sm font-medium text-gray-700">
                  Taxa de Recompra Média
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="flex flex-col gap-4">
              <p className="text-base text-gray-700 leading-relaxed">
                Nosso CRM completo ajuda restaurantes a crescerem suas vendas diretas através de automação inteligente e análise de dados. 
                Gerencie clientes, automatize campanhas no WhatsApp e fidelize com inteligência.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Junte-se aos estabelecimentos que já transformaram sua gestão de clientes e aumentaram significativamente suas taxas de recompra.
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
            background: 'repeating-linear-gradient(-45deg, #E4DFFF 0px, #E4DFFF 1px, transparent 1px, transparent 16px)',
          }}
        />
      </div>

      {/* Seção 1: Ficha Completa do Cliente */}
      <section
        id="ficha-cliente"
        className="py-16 bg-white"
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Como Funciona
              </span>
              <h2 className="font-sans text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Controle Quem Compra de Você 
                </span>
                {" "}e Faça Eles Voltarem
              </h2>
              <p className="mt-4 max-w-3xl font-sans text-base font-medium text-[#5C5C73] sm:text-lg">
                Manda mensagem automática no WhatsApp, oferece prêmio de volta e mostra quem tá comprando mais. Funciona com ou sem integração — você decide.
              </p>
            </div>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="Ficha completa do cliente com histórico de pedidos"
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
                    <span className="font-mono text-5xl font-light text-[#6841FA] opacity-30">01</span>
                    <span className="rounded-full bg-[#6841FA] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">GESTÃO COMPLETA</span>
                  </div>
                  <h3 className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6" style={{ background: "linear-gradient(to right, #2C216F, #6841FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Sistema Completo de Reservas e CRM
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Dashboard com KPIs: taxa de comparecimento, cancelamentos e receita por turno</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Mesas inteligentes: VIP, Vista Mar, Externa, Romântica com gestão de capacidade</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Grade horária configurável: almoço/jantar com intervalos personalizados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Mapa de calor de ocupação e gráficos de tendência mensal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6841FA]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Taxa de comparecimento e cancelamento de reservas</span>
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
            background: 'repeating-linear-gradient(-45deg, #E4DFFF 0px, #E4DFFF 1px, transparent 1px, transparent 16px)',
          }}
        />
      </div>

      {/* Seção 2: Venda Mais */}
      <section
        id="venda-mais"
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="Dashboard mostrando análise de produtos mais vendidos e recomendações personalizadas"
                      width={800}
                      height={600}
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                <div>
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="font-mono text-5xl font-light text-[#6841FA] opacity-30">02</span>
                    <span className="rounded-full bg-[#10b981] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">AUTOMAÇÃO</span>
                  </div>
                  <h3 className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6" style={{ background: "linear-gradient(to right, #2C216F, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Recompra Automática por WhatsApp
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Identifica clientes inativos automaticamente (não compra há X dias)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Dispara WhatsApp com cupom ou oferta personalizada</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Segmenta por comportamento: VIP, Em Risco, Novos, Inativos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Relatório de conversão por campanha (quem voltou, quanto gastou)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10b981]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Funciona com ou sem integração com seu sistema atual</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal lines separator */}
      <div className="relative h-16 w-full overflow-hidden" style={{ backgroundColor: "#F5F5FF" }}>
        <div 
          className="absolute inset-0 h-full w-full opacity-50"
          style={{
            background: 'repeating-linear-gradient(-45deg, #E4DFFF 0px, #E4DFFF 1px, transparent 1px, transparent 16px)',
          }}
        />
      </div>

      {/* Seção 3: Oráculo IA */}
      <section
        id="oraculo"
        className="py-16 bg-white"
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <div className="overflow-hidden rounded-md border border-border">
                    <Image
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt="Interface da IA Oráculo mostrando insights e ações recomendadas para aumentar vendas"
                      width={800}
                      height={600}
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="font-mono text-5xl font-light text-[#6841FA] opacity-30">03</span>
                    <span className="rounded-full bg-[#f59e0b] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white">INTELIGÊNCIA ARTIFICIAL</span>
                  </div>
                  <h3 className="mb-3 font-sans text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6" style={{ background: "linear-gradient(to right, #2C216F, #f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Oráculo: IA que Analisa e Te Avisa
                  </h3>
                  <ul className="space-y-3 font-sans text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f59e0b]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Prevê quais clientes VIP vão sumir e te avisa antes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f59e0b]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Recomenda ações práticas: "Ligue pra João hoje e ofereça desconto"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f59e0b]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Simula cenários: "Se der 10% cashback, X clientes voltam"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f59e0b]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Alertas automáticos: queda de movimento, reserva cancelada, NPS baixo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f59e0b]">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span>Dashboard em linguagem simples, sem gráfico complicado</span>
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

      {/* Testimonials Section */}
      <Testimonial4 />

      {/* FAQ Section */}
      <Faq1 />

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
