import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de ROI - Quanto Você Pode Faturar Mais | RecompraAI",
  description:
    "Descubra quanto seu restaurante pode aumentar em receita automatizando a recompra e fidelizando clientes. Calcule seu ROI em segundos com dados reais de mais de 500 restaurantes.",
  keywords: [
    "calculadora roi",
    "roi restaurante",
    "retorno investimento",
    "faturamento restaurante",
    "fidelização clientes",
    "recompra automática",
    "crm restaurante",
    "payback",
    "crescimento receita",
  ],
  openGraph: {
    title: "Calculadora de ROI - Quanto Você Pode Faturar Mais | RecompraAI",
    description:
      "Descubra quanto seu restaurante pode aumentar em receita automatizando a recompra e fidelizando clientes. Resultados em segundos!",
    type: "website",
    url: "https://recompraai.com.br/calculadora-roi",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "Calculadora de ROI - RecompraAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de ROI - Quanto Você Pode Faturar Mais | RecompraAI",
    description:
      "Descubra quanto seu restaurante pode aumentar em receita automatizando a recompra e fidelizando clientes.",
    images: ["/logos/recompraai.svg"],
  },
};

export default function CalculadoraROILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
