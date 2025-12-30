import type { Metadata } from "next";
import Image from "next/image";
import { Hero1 } from "@/components/hero1";
import { Cta4 } from "@/components/cta4";
import { Stats1 } from "@/components/stats1";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Fidelização com Cashback Automático | RecompraAI",
  description:
    "Sistema de fidelização inteligente para restaurantes: cashback automático, programas de pontos personalizados, cupons de desconto e recompensas que aumentam a frequência de compra.",
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
    title: "Fidelização com Cashback Automático | RecompraAI",
    description:
      "Aumente a recompra com cashback automático, programas de pontos e cupons personalizados. Fidelize mais e venda melhor.",
    type: "website",
    url: "https://recompraai.com.br/solucoes/fidelizacao-cashback",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "RecompraAI - Fidelização com Cashback",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidelização com Cashback Automático | RecompraAI",
    description:
      "Aumente a recompra com cashback automático, programas de pontos e cupons personalizados. Fidelize mais e venda melhor.",
    images: ["/logos/recompraai.svg"],
  },
};

export default function FidelizacaoCashbackPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RecompraAI Fidelização e Cashback",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Sistema de fidelização inteligente com cashback automático, programas de pontos personalizados e cupons de desconto para restaurantes.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    featureList: [
      "Cashback automático em cada compra",
      "Programas de pontos personalizados",
      "Cupons de desconto inteligentes",
      "Níveis VIP e recompensas exclusivas",
      "Resgate fácil pelo WhatsApp",
      "Gamificação e desafios",
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
          <Image src="/logos/bghero.svg" alt="Background pattern com design moderno representando fidelização e recompensas" width={800} height={600} className="h-full w-full object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5b3cf4]/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 w-full pb-[calc(var(--wave-h)+24px)]">
          <Hero1
            badge="Fidelização Automática | Cashback e Recompensas"
            heading="Faça seus clientes voltarem toda semana com cashback automático"
            description="Crie programas de fidelização personalizados com cashback, pontos e cupons de desconto. Recompense automaticamente cada compra e aumente a frequência de visitas do seu restaurante."
            buttons={{
              primary: {
                text: "Solicitar demonstração",
                url: "#contato",
              },
              secondary: {
                text: "Ver funcionalidades",
                url: "#cashback-automatico",
              },
            }}
            image={{
              src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
              alt: "Sistema de fidelização com cashback automático",
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

      {/* Seção 1: Cashback Automático */}
      <section
        id="cashback-automatico"
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Cashback Automático
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Recompense{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Automaticamente
                </span>
                {" "}Cada Compra
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Configure percentuais de cashback por tipo de pedido, valor gasto ou categoria de produto. 
                Seus clientes acumulam créditos automaticamente e podem usar na próxima compra.
              </p>
            </div>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Sistema de cashback automático em cada compra" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Mais Compras, Mais Recompensas
                  </h3>
                  <ul className="space-y-3 text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Cashback automático em cada pedido realizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Percentuais personalizados por categoria de produto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Cashback progressivo: quanto mais compra, mais ganha</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Saldo visível no WhatsApp e notificações automáticas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Resgate fácil: cliente usa créditos direto no pedido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Controle total de validade e regras de acúmulo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Programas de Pontos */}
      <section id="programas-pontos" className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Programas de Pontos
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Crie Programas de Pontos{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Personalizados
                </span>
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Configure regras de acúmulo e resgate totalmente personalizadas. Crie níveis VIP, desafios mensais 
                e recompensas exclusivas para os clientes mais fiéis.
              </p>
            </div>
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Programas de pontos e níveis VIP personalizados" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Gamificação que Vende Mais
                  </h3>
                  <ul className="space-y-3 text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Acúmulo de pontos por valor gasto ou visitas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Níveis VIP com benefícios exclusivos (Bronze, Prata, Ouro)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Desafios e missões para engajar clientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Pontos em dobro em dias específicos ou produtos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Catálogo de recompensas: produtos grátis ou descontos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Notificações de progresso e conquistas desbloqueadas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Cupons e Descontos */}
      <section
        id="cupons-descontos"
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Cupons e Descontos
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Cupons{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Inteligentes
                </span>
                {" "}que Aumentam a Conversão
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Crie cupons de desconto personalizados por cliente, segmento ou ocasião. 
                Distribua automaticamente via WhatsApp e acompanhe a taxa de resgate em tempo real.
              </p>
            </div>
            <div className="lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Sistema de cupons e descontos personalizados" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Descontos que Convertem
                  </h3>
                  <ul className="space-y-3 text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Cupons personalizados por cliente ou segmento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Descontos progressivos: quanto mais compra, maior o desconto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Cupons de aniversário e datas especiais automáticos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Resgate fácil via código ou link direto no WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Controle de validade, uso único ou múltiplo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Relatórios de performance: taxa de resgate e ROI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Recompensas Exclusivas */}
      <section id="recompensas" className="py-16 bg-white">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex flex-col items-center text-center">
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
                Recompensas Exclusivas
              </span>
              <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
                Benefícios{" "}
                <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>VIP
                </span>
                {" "}para Clientes Fiéis
              </h2>
              <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
                Ofereça experiências exclusivas para seus melhores clientes: produtos grátis, 
                acesso antecipado a lançamentos, eventos privados e muito mais.
              </p>
            </div>
            <div className="flex-row-reverse lg:flex lg:gap-x-4">
              <div className="lg:w-1/2">
                <div className="mb-6 md:mb-8 lg:mb-0">
                  <Image src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg" alt="Recompensas exclusivas e benefícios VIP" width={800} height={600} className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  />
                </div>
              </div>
              <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                    Experiências que Fidelizam
                  </h3>
                  <ul className="space-y-3 text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Produtos grátis após X compras ou pontos acumulados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Acesso antecipado a novos pratos e promoções</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Frete grátis ou delivery prioritário para VIPs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Eventos exclusivos e degustações para clientes fiéis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Upgrade de categoria automático por desempenho</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-[#6841FA] mt-0.5" />
                      <span>Recompensas surpresa para manter o engajamento alto</span>
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
        title="Comece a fidelizar clientes hoje mesmo"
        description="Teste o sistema de fidelização mais completo do mercado por 14 dias sem compromisso. Configure cashback, pontos e cupons em minutos e veja seus clientes voltando toda semana."
        buttonText="Solicitar demonstração gratuita"
        buttonUrl="#contato"
        items={[
          "Setup guiado: configure seu programa em menos de 10 minutos",
          "Integração com WhatsApp para notificações automáticas",
          "Painel em tempo real com métricas de fidelização",
          "Suporte especializado para criar a melhor estratégia",
          "Sem fidelidade: cancele quando quiser",
        ]}
      />
      </div>
    </main>
  );
}
