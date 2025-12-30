import type { Metadata } from "next";
import Script from "next/script";
import {
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { ConditionalLayout } from "@/components/conditional-layout";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Otimização: evita FOIT (Flash of Invisible Text)
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap", // Otimização: evita FOIT
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://recompraai.com'),
  title: "Recompra AÍ | CRM premium para restaurantes",
  description:
    "Experiência completa de fidelização, automação e inteligência para restaurantes que querem previsibilidade de receita.",
  icons: {
    icon: "/logos/favicon.svg",
    shortcut: "/logos/favicon.svg",
    apple: "/logos/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://recompraai.com.br/#organization",
        name: "RecompraAI",
        url: "https://recompraai.com.br",
        logo: {
          "@type": "ImageObject",
          url: "https://recompraai.com.br/logos/recompraai.svg",
        },
        sameAs: [
          "https://www.linkedin.com/company/recompraai",
          "https://www.instagram.com/recompraai",
        ],
        description: "Plataforma completa de CRM para restaurantes com automação de marketing, gestão de clientes e relatórios inteligentes.",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://recompraai.com.br/#software",
        name: "RecompraAI",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL",
        },
        description: "CRM inteligente para restaurantes com automação de marketing, gestão de clientes, relatórios e integrações com principais sistemas de delivery e PDV.",
        featureList: [
          "CRM completo para restaurantes",
          "Automação de marketing via WhatsApp e SMS",
          "Gestão de clientes e histórico de pedidos",
          "Relatórios inteligentes e dashboards",
          "Integrações com sistemas de delivery",
          "Programa de fidelidade",
          "Segmentação de clientes",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://recompraai.com.br/#website",
        url: "https://recompraai.com.br",
        name: "RecompraAI",
        inLanguage: "pt-BR",
        publisher: {
          "@id": "https://recompraai.com.br/#organization",
        },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BKTKB63CR9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BKTKB63CR9');
          `}
        </Script>

        {/* Preconnect para recursos externos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://deifkwefumgah.cloudfront.net" />
        
        {/* Preload imagem hero para melhorar LCP */}
        <link
          rel="preload"
          as="image"
          href="/logos/recompraai.svg"
          fetchPriority="high"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <ConditionalLayout>{children}</ConditionalLayout>
        </div>
      </body>
    </html>
  );
}
