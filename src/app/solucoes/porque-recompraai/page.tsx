import type { Metadata } from "next";
import Image from "next/image";
import { Hero1 } from "@/components/hero1";
import { Stats1 } from "@/components/stats1";
import { Testimonial4 } from "@/components/testimonial4";
import { Cta4 } from "@/components/cta4";
import { Faq1 } from "@/components/faq1";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Por Que Escolher o RecompraAI? | Comparação com Outros CRM",
  description:
    "Veja por que donos de restaurante escolhem o RecompraAI. Funciona sem integração, sem contrato, com time dedicado e Oráculo (IA exclusiva). Compare e decida.",
  keywords: [
    "por que escolher CRM restaurante",
    "melhor CRM para delivery",
    "recompra ai vale a pena",
    "CRM restaurante comparação",
    "diferença CRM restaurante",
    "automação vs controle manual",
    "CRM automatizado restaurante",
    "melhor sistema fidelização restaurante",
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
    title: "Por Que Escolher o RecompraAI? | Comparação com Outros CRM",
    description:
      "Funciona sem integração, sem contrato, com IA exclusiva e time dedicado. Veja por que donos de restaurante escolhem o RecompraAI.",
    type: "website",
    url: "https://recompraai.com.br/porque-recompraai",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "Por Que RecompraAI - Comparação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Por Que Escolher o RecompraAI?",
    description:
      "Funciona sem integração, sem contrato, com IA exclusiva. Compare e veja a diferença.",
    images: ["/logos/recompraai.svg"],
  },
};

export default function PorqueRecompraAIPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Por que não usar controle manual para gerenciar clientes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Controle manual não manda mensagem automática, não avisa quando cliente sumiu, não sugere ação baseada em dados. Você perde tempo e dinheiro. RecompraAI automatiza tudo com dashboard completo e segmentação RFV.",
        },
      },
      {
        "@type": "Question",
        name: "Por que RecompraAI é melhor que outros CRM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Funciona com cadastro manual ou integração plug-and-play segura, tem Oráculo (IA exclusiva), sem contrato de fidelidade, time dedicado toda semana e preço flexível. Dashboard completo com métricas RFV, LTV e ROI em tempo real.",
        },
      },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative isolate grid place-items-center overflow-hidden [--hero-min:560px] [--hero-max:880px] [--wave-h:clamp(72px,5vw,120px)] min-h-[clamp(var(--hero-min),78svh,var(--hero-max))] [@media(min-aspect-ratio:16/9)]:min-h-[clamp(var(--hero-min),62svh,var(--hero-max))] [@media(min-aspect-ratio:21/9)]:min-h-[clamp(var(--hero-min),56svh,var(--hero-max))]"
        style={{
          backgroundColor: "#6841FA",
        }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <Image src="/logos/bghero.svg" alt="Background pattern representando decisão e comparação" width={800} height={600} className="h-full w-full object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5b3cf4]/70 via-transparent to-transparent" />
        </div>
        <div className="relative z-20 w-full pb-[calc(var(--wave-h)+24px)]">
          <Hero1
            badge="Comparação Honesta"
            heading="Por Que Donos de Restaurante Escolhem o RecompraAI?"
            description="Sem enrolação: veja o que faz a diferença quando você precisa fazer cliente voltar de verdade. Funciona sem integração, sem contrato, com IA exclusiva e time te ajudando toda semana."
            buttons={{
              primary: {
                text: "Quero Testar Grátis",
                url: "#contato",
              },
              secondary: {
                text: "Ver Comparação",
                url: "#comparacao",
              },
            }}
            image={{
              src: "/logos/recompraai.svg",
              alt: "RecompraAI - Diferencial competitivo para restaurantes",
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

      {/* Comparação: RecompraAI vs Outros CRM */}
      <section id="comparacao" className="py-16">
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full border border-[#6841FA]/20 bg-[#6841FA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#6841FA]">
              Comparação Honesta
            </span>
            <h2 className="text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
              Veja Como o{" "}
              <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>RecompraAI Se Compara
              </span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-base text-[#5C5C73] sm:text-lg">
              Descubra por que donos de restaurante escolhem o RecompraAI ao invés de outros CRM
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Outros CRM */}
            <div className="rounded-xl border-2 border-gray-200 bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <X className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C216F]">
                  Outros CRM
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Só funciona com integração API (depende de sistema)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Não tem IA para sugerir ações
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Contrato de 12 meses obrigatório
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Preço fixo e caro (não se adapta ao seu faturamento)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Suporte apenas no setup inicial
                  </span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-800">
                  CRM genérico para qualquer negócio
                </p>
              </div>
            </div>

            {/* RecompraAI */}
            <div className="rounded-xl border-2 border-[#6841FA] bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6841FA]/10">
                  <Check className="h-6 w-6 text-[#6841FA]" />
                </div>
                <div>
                  <Image src="/logos/recompraai.svg" alt="Logo RecompraAI" width={800} height={600} className="h-8 w-auto mb-1"
                  />
                  <p className="text-sm text-[#5C5C73]">
                    Feito para donos de restaurante
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Cadastro manual ou integração plug-and-play segura com +20 sistemas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Oráculo (IA exclusiva) que sugere ações personalizadas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Sem contrato de fidelidade: cancela quando quiser
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Preço flexível e justo baseado no seu uso
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Time dedicado te ajudando toda semana
                  </span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-[#6841FA]/10 p-4">
                <a
                  href="/contato"
                  className="block w-full rounded-lg bg-[#6841FA] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#5935d9]"
                >
                  Quero Testar Grátis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <Stats1 />
      </section>

      {/* Por Que Não Planilha? */}
      <section
        className="py-16"
        style={{
          backgroundColor: "#F5F5FF",
        }}
      >
        <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
          <div className="mb-12 text-center">
            <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
              Controle Manual vs Automação
            </span>
            <h2 className="text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
              Por Que{" "}
              <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Automatizar?
              </span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-base text-[#5C5C73] sm:text-lg">
              Donos de restaurante perdem tempo e dinheiro com controle manual. Veja a diferença com automação inteligente.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Controle Manual */}
            <div className="rounded-xl border-2 border-red-200 bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C216F]">
                  Controle Manual
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Você tem que lembrar de olhar todo dia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Tem que mandar mensagem manualmente pra cada cliente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Não avisa quando cliente sumiu
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Não sugere o que fazer pra vender mais
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Você perde tempo toda semana atualizando
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="text-[#5C5C73]">
                    Fórmula quebra e você perde dados
                  </span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-red-50 p-4">
                <p className="text-sm font-medium text-red-800">
                  Resultado: Cliente esquece de você e compra do concorrente
                </p>
              </div>
            </div>

            {/* RecompraAI */}
            <div className="rounded-xl border-2 border-[#6841FA] bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6841FA]/10">
                  <Check className="h-6 w-6 text-[#6841FA]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C216F]">
                  Com RecompraAI
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Trabalha sozinho 24h, você só aprova
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Manda mensagem automática no WhatsApp
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Te avisa na hora quando cliente sumiu
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Oráculo (IA) te fala exatamente o que fazer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Você economiza 10h por semana
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#6841FA]" />
                  <span className="text-[#5C5C73]">
                    Seus dados ficam seguros e organizados
                  </span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-[#6841FA]/10 p-4">
                <p className="text-sm font-medium text-[#6841FA]">
                  Resultado: Cliente volta toda semana e você vende 43% mais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <Testimonial4 />

      {/* FAQ Específico */}
      <Faq1
        heading="Dúvidas na Hora de Decidir"
        items={[
          {
            id: "faq-decision-1",
            question: "Por que não usar só WhatsApp Business?",
            answer:
              "WhatsApp Business não avisa quando cliente sumiu, não manda mensagem automática, não sugere oferta. Você faz tudo manual. RecompraAI automatiza e te fala o que fazer.",
          },
          {
            id: "faq-decision-2",
            question: "Por que RecompraAI é melhor que RD Station ou HubSpot?",
            answer:
              "RD Station e HubSpot são CRM genéricos, não entendem de restaurante. Não têm Oráculo (IA), exigem integração obrigatória e contrato de 12 meses. RecompraAI funciona sem integração, sem contrato e tem time te ajudando toda semana.",
          },
          {
            id: "faq-decision-3",
            question: "E se eu não tiver integração com sistemas?",
            answer:
              "Funciona normal! Você cadastra manualmente ou conecta via integração plug-and-play segura. A gente manda mensagem do mesmo jeito. Outros CRM só funcionam com API complexa.",
          },
          {
            id: "faq-decision-4",
            question: "Tem que ficar 12 meses?",
            answer:
              "Não! Sem contrato, sem fidelidade. Cancela quando quiser. Você fica porque funciona, não porque é obrigado.",
          },
          {
            id: "faq-decision-5",
            question: "O que é o Oráculo?",
            answer:
              "É a nossa IA exclusiva. Analisa seus dados e te fala exatamente o que fazer pra vender mais. 'Vendeu menos essa semana? Oráculo te diz o motivo. Cliente em risco? Sugere ação na hora.'",
          },
          {
            id: "faq-decision-6",
            question: "Quanto custa comparado com outros?",
            answer:
              "Planos flexíveis de acordo com tamanho do restaurante. Outros CRM cobram fixo e caro. RecompraAI se adapta ao seu bolso. Tem demonstração grátis pra testar antes.",
          },
        ]}
      />

      {/* CTA Final */}
      <Cta4
        title="Quer Ver Funcionando no Seu Restaurante?"
        description="Demonstração grátis de 15 minutos. Sem enrolação, sem pressão. Você vê na prática como fazer seu cliente voltar."
        buttonText="Quero Agendar Demonstração"
        buttonUrl="#contato"
        items={[
          "Sem contrato, sem fidelidade",
          "Funciona com ou sem integração",
          "Time te ajuda toda semana",
          "Oráculo (IA) exclusivo",
          "Cancela quando quiser",
        ]}
      />
    </main>
  );
}
