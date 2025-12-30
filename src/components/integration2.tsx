"use client";

import Image from "next/image";

interface PartnerItem {
  label: string;
  logo: string;
  href: string;
}

const PARTNERS: PartnerItem[] = [
  {
    label: "Delivery Direto",
    logo: "/logos_int/deliverydireto.svg",
    href: "https://deliverydireto.com.br",
  },
  {
    label: "Saipos",
    logo: "/logos_int/saipos.svg",
    href: "https://saipos.com",
  },
  {
    label: "Consumer",
    logo: "/logos_int/consumer.svg",
    href: "https://consumer.com.br",
  },
  {
    label: "Anota AI",
    logo: "/logos_int/anotaai.svg",
    href: "https://anota.ai",
  },
  {
    label: "Delivery VIP",
    logo: "/logos_int/deliveryvip.svg",
    href: "https://deliveryvip.com.br",
  },
  {
    label: "Você Pede",
    logo: "/logos_int/vocepede.svg",
    href: "https://vocepede.com",
  },
  {
    label: "OPDV",
    logo: "/logos_int/opdv.svg",
    href: "https://opdv.com.br",
  },
  {
    label: "Open Delivery",
    logo: "/logos_int/opendelivery.svg",
    href: "https://opendelivery.delivery",
  },
  {
    label: "Pepper",
    logo: "/logos_int/pepper.svg",
    href: "https://pepper.ai",
  },
  {
    label: "Zig",
    logo: "/logos_int/zig.svg",
    href: "https://zigpay.com",
  },
  {
    label: "MultiPedidos",
    logo: "/logos_int/multipedidos.svg",
    href: "https://multipedidos.com",
  },
  {
    label: "Meu Cardápio",
    logo: "/logos_int/meucardapio.svg",
    href: "https://meucardapio.app",
  },
  {
    label: "Accon",
    logo: "/logos_int/accon.svg",
    href: "#",
  },
  {
    label: "Alfa Labs",
    logo: "/logos_int/alfalabs.svg",
    href: "#",
  },
  {
    label: "Alloy",
    logo: "/logos_int/alloy.svg",
    href: "#",
  },
  {
    label: "Cardápio Web",
    logo: "/logos_int/cardapioweb.svg",
    href: "#",
  },
  {
    label: "Cinndi",
    logo: "/logos_int/cinndi.svg",
    href: "#",
  },
  {
    label: "Eclética",
    logo: "/logos_int/ecletica.svg",
    href: "#",
  },
  {
    label: "Falaê",
    logo: "/logos_int/falae.svg",
    href: "#",
  },
  {
    label: "Jota Já",
    logo: "/logos_int/jotaja.svg",
    href: "#",
  },
  {
    label: "Sischef",
    logo: "/logos_int/sischef.svg",
    href: "#",
  },
];

const MARQUEE_PARTNERS = [...PARTNERS, ...PARTNERS];

const Integration2 = () => {
  return (
    <section className="relative py-12">
      <div className="pointer-events-none absolute left-1/2 top-16 h-48 w-[min(92rem,calc(100%-2rem))] -translate-x-1/2 rounded-3xl bg-primary/5 blur-3xl sm:w-[min(96rem,calc(100%-3rem))]" />
      <div className="relative mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
            Com ou Sem Integração
          </p>
          <h2 className="text-3xl font-semibold text-foreground lg:text-4xl">
            Funciona Com Qualquer Sistema (Ou Sem Sistema Nenhum)
          </h2>
          <p className="max-w-3xl text-base text-muted-foreground lg:text-lg">
            Conecta com mais de 20 sistemas de delivery e PDV. Ou cadastra manualmente. Você decide. Funciona do jeito que você trabalha hoje.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden">
          <div
            className="flex w-max animate-marquee-right items-center gap-8"
            style={{ animationDuration: "36s" }}
          >
            {MARQUEE_PARTNERS.map((partner, index) => (
              <a
                key={`${partner.logo}-${index}`}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-w-[11rem] items-center justify-center px-5 py-5 transition hover:-translate-y-1"
              >
                <Image
                  src={partner.logo}
                  alt={partner.label}
                  width={128}
                  height={48}
                  loading="lazy"
                  className="h-16 w-auto max-w-[10rem] object-contain brightness-[0.9] transition group-hover:brightness-100"
                />
              </a>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export { Integration2 };
