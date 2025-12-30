import { Metadata } from "next";

import { About1 } from "@/components/about1";
import { Cta4 } from "@/components/cta4";

export const metadata: Metadata = {
  title: "Sobre o RecompraAI | CRM Inteligente para Restaurantes",
  description:
    "Conheça o RecompraAI: plataforma completa de CRM para restaurantes com automação, integrações e análise inteligente de dados. Transforme dados em crescimento previsível.",
  keywords: [
    "sobre recompraai",
    "crm para restaurantes",
    "recompra ai",
    "automação para restaurantes",
    "tecnologia para gastronomia",
    "fidelização de clientes restaurante",
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
    title: "Sobre o RecompraAI | CRM Inteligente para Restaurantes",
    description: "Conheça o RecompraAI. Tecnologia e inteligência artificial para restaurantes crescerem com dados e automações inteligentes.",
    type: "website",
    url: "https://recompraai.com.br/sobre-nos",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "RecompraAI - Sobre Nós",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre o RecompraAI | CRM para Restaurantes",
    description: "Conheça nossa missão de transformar dados em crescimento para restaurantes.",
    images: ["/logos/recompraai.svg"],
  },
  alternates: {
    canonical: "https://recompraai.com.br/sobre-nos",
  },
};

export default function SobreNosPage() {
  return (
    <main className="bg-background">
      <About1 />
      <Cta4
        title="Pronto para evoluir a experiência dos seus clientes?"
        description="Agende uma conversa com o time RecompraAI e descubra como criamos jornadas personalizadas, campanhas inteligentes e decisões orientadas por dados para seu restaurante."
        buttonText="Falar com um especialista"
        buttonUrl="#contato"
      />
    </main>
  );
}
