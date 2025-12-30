import { Contact4 } from "@/components/contact4";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fale Conosco | RecompraAI - Atendimento Especializado",
  description:
    "Entre em contato com o RecompraAI. Nossa equipe está pronta para ajudar seu restaurante a crescer com CRM inteligente, automação e estratégias personalizadas.",
  keywords: [
    "contato recompraai",
    "suporte crm restaurantes",
    "atendimento recompraai",
    "falar com recompraai",
    "demonstração crm",
    "orçamento crm restaurante",
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
    title: "Fale Conosco | RecompraAI - Atendimento Especializado",
    description:
      "Entre em contato com nossa equipe. Estamos prontos para ajudar seu restaurante a crescer com tecnologia inteligente.",
    type: "website",
    url: "https://recompraai.com.br/contato",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "RecompraAI - Entre em Contato",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fale Conosco | RecompraAI",
    description:
      "Entre em contato com nossa equipe. Estamos prontos para ajudar seu restaurante a crescer.",
    images: ["/logos/recompraai.svg"],
  },
};

export default function ContatoPage() {
  return <Contact4 />;
}
