import type { Metadata } from "next";
import { Hero1 } from "@/components/hero1";
import { Cta4 } from "@/components/cta4";
import { Stats1 } from "@/components/stats1";
import { Check, Zap, Gift, MessageSquare, TrendingUp, DollarSign, Percent, Truck } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Campanhas Inteligentes WhatsApp | RecompraAI",
  description:
    "Automatize campanhas de WhatsApp para restaurantes: fluxos de aniversário, pós-visita e reativação. Cupons personalizados e mensagens com IA para aumentar a recompra.",
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
    title: "Campanhas Inteligentes WhatsApp | RecompraAI",
    description:
      "Automatize mensagens no WhatsApp e traga clientes de volta sem esforço. Aumente a recompra com campanhas inteligentes.",
    type: "website",
    url: "https://recompraai.com.br/solucoes/campanhas",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "RecompraAI - Campanhas Inteligentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campanhas Inteligentes WhatsApp | RecompraAI",
    description:
      "Automatize mensagens no WhatsApp e traga clientes de volta sem esforço.",
    images: ["/logos/recompraai.svg"],
  },
};

export default function CampanhasPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RecompraAI Campanhas Inteligentes",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Automação de campanhas de WhatsApp para restaurantes com fluxos de aniversário, pós-visita, reativação e cupons personalizados.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    featureList: [
      "Fluxos automáticos de aniversário",
      "Campanhas de pós-visita",
      "Reativação de clientes inativos",
      "Cupons personalizados",
      "Mensagens com IA",
      "Automação de WhatsApp",
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
          <Image src="/logos/bghero.svg" alt="Background pattern representando automação de campanhas" width={800} height={600} className="h-full w-full object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5b3cf4]/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 w-full pb-[calc(var(--wave-h)+24px)]">
          <Hero1
            badge="Campanhas Inteligentes | Automação WhatsApp"
            heading="Traga clientes de volta no automático com WhatsApp"
            description="Crie fluxos automáticos de mensagens para aniversários, pós-visita e reativação. Envie cupons personalizados e acompanhe o ROI de cada campanha em tempo real."
            buttons={{
              primary: {
                text: "Solicitar demonstração",
                url: "/contato",
              },
              secondary: {
                text: "Ver funcionalidades",
                url: "#fluxos",
              },
            }}
            image={{
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
              alt: "Dashboard de Campanhas Inteligentes RecompraAI",
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

      {/* Seção 1: Fluxos Automáticos */}
      <section
        id="fluxos"
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Fluxos Automáticos
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Campanhas que Funcionam no{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Piloto Automático
                </span>
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Configure uma vez e deixe o RecompraAI trabalhar para você. Mensagens automáticas 
                no momento certo para cada cliente.
              </p>
            </div>

            {/* Fluxo 1: Aniversário */}
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Campanha de Aniversário Automática" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Campanha de Aniversário
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg mb-6">
                    Envie cupons automáticos no dia do aniversário dos seus clientes. Aumente 
                    as visitas e mostre que você se importa com datas especiais.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span className="text-[#5C5C73]">Envio automático no dia do aniversário</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span className="text-[#5C5C73]">Cupom personalizado por perfil do cliente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span className="text-[#5C5C73]">Mensagens personalizadas com o nome</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fluxo 2: Pós-Visita */}
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Follow-up Pós-Visita Automático" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Follow-up Pós-Visita
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg mb-6">
                    Agradeça automaticamente após cada pedido e incentive a próxima compra. 
                    Colete feedbacks e transforme clientes em recorrentes.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span className="text-[#5C5C73]">Agradecimento personalizado 24h após pedido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span className="text-[#5C5C73]">Coleta automática de NPS e feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span className="text-[#5C5C73]">Cupom de incentivo para próxima compra</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fluxo 3: Reativação */}
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Reativação de Clientes Inativos" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Reativação de Inativos
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg mb-6">
                    Reconquiste clientes que pararam de comprar. O sistema identifica automaticamente 
                    inativos e envia campanhas personalizadas para trazê-los de volta.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span className="text-[#5C5C73]">Detecção automática de clientes inativos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span className="text-[#5C5C73]">Campanha em múltiplos estágios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span className="text-[#5C5C73]">Taxa de sucesso: 43% de reativação</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Cupons Personalizados */}
      <section
        id="cupons"
        className="relative py-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #6841FA 0%, #5b3cf4 50%, #4a2dd9 100%)",
        }}
      >
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cupons-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cupons-grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Cupons Personalizados
              </span>
              <h2 className="text-pretty text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Cupons Inteligentes que Convertem
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-white/90 sm:text-lg">
                Crie cupons de desconto rastreáveis e veja exatamente qual campanha trouxe cada cliente. 
                Tudo visual, sem complicação.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <div className="flex flex-col">
                <div className="rounded-2xl border border-white/20 bg-white/95 backdrop-blur-sm p-8 h-full">
                  <h3 className="text-2xl font-bold text-[#2C216F] mb-6">
                    Recursos Poderosos de Cupons
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 shrink-0 text-[#6841FA] mt-0.5" />
                      <div>
                        <strong className="text-[#2C216F]">Criação Visual de Cupons</strong>
                        <p className="text-[#5C5C73] text-sm mt-1">
                          Interface drag-and-drop para criar cupons bonitos em segundos
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 shrink-0 text-[#6841FA] mt-0.5" />
                      <div>
                        <strong className="text-[#2C216F]">Rastreamento Completo</strong>
                        <p className="text-[#5C5C73] text-sm mt-1">
                          Veja quantas pessoas usaram cada cupom e quanto faturou
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 shrink-0 text-[#6841FA] mt-0.5" />
                      <div>
                        <strong className="text-[#2C216F]">Segmentação Avançada</strong>
                        <p className="text-[#5C5C73] text-sm mt-1">
                          Envie cupons diferentes para VIPs, novos clientes e inativos
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 shrink-0 text-[#6841FA] mt-0.5" />
                      <div>
                        <strong className="text-[#2C216F]">Validade Configurável</strong>
                        <p className="text-[#5C5C73] text-sm mt-1">
                          Defina data de validade e crie senso de urgência
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 shrink-0 text-[#6841FA] mt-0.5" />
                      <div>
                        <strong className="text-[#2C216F]">Limite de Uso</strong>
                        <p className="text-[#5C5C73] text-sm mt-1">
                          Controle quantas vezes cada cupom pode ser usado
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-6 w-6 shrink-0 text-[#6841FA] mt-0.5" />
                      <div>
                        <strong className="text-[#2C216F]">Integração com PDV</strong>
                        <p className="text-[#5C5C73] text-sm mt-1">
                          Cupons aplicados automaticamente no sistema de delivery
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="rounded-2xl border border-white/20 bg-white/95 backdrop-blur-sm p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#2C216F] mb-6">
                    Tipos de Cupons Disponíveis
                  </h3>
                <div className="space-y-4">
                  <div className="rounded-xl bg-[#F5F5FF] border border-[#E5E5FF] p-4 flex items-start gap-3">
                    <Percent className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                    <div>
                      <div className="font-bold text-[#2C216F] mb-2">Desconto em %</div>
                      <div className="text-sm text-[#5C5C73]">
                        Ex: 20% OFF em qualquer pedido acima de R$ 50
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#F5F5FF] border border-[#E5E5FF] p-4 flex items-start gap-3">
                    <DollarSign className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                    <div>
                      <div className="font-bold text-[#2C216F] mb-2">Desconto em R$</div>
                      <div className="text-sm text-[#5C5C73]">
                        Ex: R$ 15 OFF no seu próximo pedido
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#F5F5FF] border border-[#E5E5FF] p-4 flex items-start gap-3">
                    <Gift className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                    <div>
                      <div className="font-bold text-[#2C216F] mb-2">Brinde Grátis</div>
                      <div className="text-sm text-[#5C5C73]">
                        Ex: Ganhe uma sobremesa em pedidos acima de R$ 80
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#F5F5FF] border border-[#E5E5FF] p-4 flex items-start gap-3">
                    <Truck className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                    <div>
                      <div className="font-bold text-[#2C216F] mb-2">Frete Grátis</div>
                      <div className="text-sm text-[#5C5C73]">
                        Ex: Frete grátis para compras acima de R$ 40
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Mensagens com IA */}
      <section
        id="mensagens-ia"
        className="relative py-16"
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Mensagens com IA
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                IA que Escreve{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Mensagens Perfeitas
                </span>
                {" "}para Você
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Mensagens prontas e personalizadas com o tom de voz do seu restaurante. 
                A IA otimiza automaticamente para aumentar taxa de abertura e conversão.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E5FF] bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F5F5FF]">
                  <MessageSquare className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C216F] mb-3">
                  Templates Prontos
                </h3>
                <p className="text-[#5C5C73] text-sm leading-relaxed">
                  Mais de 50 templates testados e otimizados para cada tipo de campanha. 
                  Basta personalizar com seu nome e logo.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E5FF] bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F5F5FF]">
                  <Zap className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C216F] mb-3">
                  Personalização Automática
                </h3>
                <p className="text-[#5C5C73] text-sm leading-relaxed">
                  A IA insere automaticamente: nome do cliente, prato favorito, última compra 
                  e mais de 20 variáveis personalizadas.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E5FF] bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#F5F5FF]">
                  <TrendingUp className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C216F] mb-3">
                  Teste A/B Automático
                </h3>
                <p className="text-[#5C5C73] text-sm leading-relaxed">
                  O sistema testa automaticamente variações de mensagens e identifica qual 
                  converte mais para seu público.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white to-[#F5F5FF] border border-[#E5E5FF] p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#2C216F] mb-8 text-center">
                Exemplos de Mensagens Geradas pela IA
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-white border border-[#E5E5FF] p-6 shadow-sm">
                  <div className="text-xs font-semibold text-[#B7A6FF] mb-3">ANIVERSÁRIO</div>
                  <p className="text-[#2C216F] leading-relaxed">
                    🎉 Oi, João! Feliz aniversário! 🎂<br /><br />
                    Preparamos um presente especial: <strong>25% OFF</strong> no seu pedido hoje! 
                    Use o cupom <strong>ANIVER25</strong>.<br /><br />
                    Válido até meia-noite. Aproveite! 🎁
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-[#E5E5FF] p-6 shadow-sm">
                  <div className="text-xs font-semibold text-[#B7A6FF] mb-3">REATIVAÇÃO</div>
                  <p className="text-[#2C216F] leading-relaxed">
                    Oi, Maria! Sentimos sua falta aqui no restaurante! 😔<br /><br />
                    Que tal voltar? Temos um <strong>cupom de R$ 20 OFF</strong> esperando por você! 
                    Código: <strong>VOLTEI20</strong><br /><br />
                    Válido por 7 dias. Te esperamos! ❤️
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-[#E5E5FF] p-6 shadow-sm">
                  <div className="text-xs font-semibold text-[#B7A6FF] mb-3">PÓS-VISITA</div>
                  <p className="text-[#2C216F] leading-relaxed">
                    Oi, Carlos! Obrigado pelo seu pedido! 😊<br /><br />
                    Adoraríamos saber: como foi sua experiência? De 0 a 10, qual nota você dá?<br /><br />
                    Sua opinião é muito importante! 🙏
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-[#E5E5FF] p-6 shadow-sm">
                  <div className="text-xs font-semibold text-[#B7A6FF] mb-3">BOAS-VINDAS</div>
                  <p className="text-[#2C216F] leading-relaxed">
                    Seja bem-vindo(a), Ana! 🎉<br /><br />
                    É um prazer ter você conosco! Para sua próxima compra, use o cupom 
                    <strong> BEMVINDO15</strong> e ganhe <strong>15% OFF</strong>.<br /><br />
                    Válido por 7 dias! 🚀
                  </p>
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
          title="Automatize suas campanhas e traga clientes de volta"
          description="Veja como o RecompraAI pode transformar seu WhatsApp em uma máquina de vendas com campanhas inteligentes e automáticas."
          buttonText="Agendar demonstração"
          buttonUrl="/contato"
          items={[
            "Configure suas primeiras campanhas em minutos",
            "Templates prontos e personalizáveis com IA",
            "Acompanhe ROI e conversão em tempo real",
            "Suporte completo para configuração inicial",
            "Sem fidelidade - cancele quando quiser",
          ]}
        />
      </div>
    </main>
  );
}
