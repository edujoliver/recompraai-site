"use client";

import Image from "next/image";
import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  ArrowRightLeft,
  Beef,
  Book,
  Building2,
  CakeSlice,
  Calendar,
  ChefHat,
  Coffee,
  Computer,
  Croissant,
  DollarSign,
  Drumstick,
  Fish,
  Gavel,
  Globe,
  Globe2,
  IceCream,
  Lightbulb,
  Lock,
  Menu,
  Mic,
  Newspaper,
  Phone,
  Pizza,
  Play,
  PlayCircle,
  Pyramid,
  Rocket,
  Sandwich,
  Sprout,
  Target,
  Truck,
  Users,
  Utensils,
  UtensilsCrossed,
  Warehouse,
  Wheat,
  X,
} from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import { Logo } from "@/components/logo";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const solutions = [
  {
    id: "solution-1",
    title: "CRM Premium",
    description: "Centralize os dados dos seus clientes e entenda quem são seus VIPs, inativos e recorrentes.",
    href: "/solucoes/crm",
  },
  {
    id: "solution-2",
    title: "Campanhas Inteligentes",
    description: "Automatize mensagens no WhatsApp e traga clientes de volta sem esforço.",
    href: "/solucoes/campanhas",
  },
  {
    id: "solution-3",
    title: "Fidelização e Cashback",
    description: "Recompense quem mais consome e aumente a recorrência.",
    href: "/solucoes/fidelizacao-cashback",
  },
  {
    id: "solution-4",
    title: "Oráculo (IA de Insights)",
    description: "O assistente de IA do seu restaurante. Faça perguntas em linguagem natural e receba análises inteligentes com base em seus dados reais.",
    href: "/solucoes/oraculo",
  },
];

const solutionTechnologies = [
  {
    id: "technology-1",
    title: "Por Que o RecompraAI?",
    href: "/solucoes/porque-recompraai",
    icon: Target,
  },
  {
    id: "technology-2",
    title: "Segurança e privacidade de dados",
    href: "/compliance",
    icon: Lock,
  },
];

const productCategories = [
  {
    title: "Produtos Principais",
    products: [
      {
        id: "product-1",
        title: "Gestão de Clientes",
        description: "histórico, ticket médio e preferências em um clique.",
        href: "/em-breve",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      },
      {
        id: "product-2",
        title: "Campanhas Automáticas",
        description: "Automatize o contato com seus clientes e aumente a recompra com mensagens personalizadas enviadas no momento certo.",
        href: "/em-breve",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      },
      {
        id: "product-3",
        title: "Automação com IA",
        description: "Construímos fluxos sob medida para o seu Restaurante",
        href: "/em-breve",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      },
    ],
  },
  {
    title: "Recursos Avançados",
    products: [
      {
        id: "product-4",
        title: "Fidelização & Cashback",
        description: "Recompense quem mais consome com pontos e cashback automáticos. Crie níveis, rankings e campanhas de fidelização personalizadas.",
        href: "/solucoes/fidelizacao",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
      },
      {
        id: "product-5",
        title: "Oráculo (IA Conversacional)",
        description: "Um assistente inteligente que conversa com os dados do seu restaurante e responde suas dúvidas com base em fatos, não suposições.",
        href: "/solucoes/oraculo",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
      },
    ],
  },
];

const globalCategories = [
  {
    title: "Institucional",
    features: [
      {
        id: "feature-1",
        title: "Sobre o Recompra AÍ",
        description: "Nossa missão é transformar dados em decisões que aumentam a recompra.",
        href: "/sobre-nos",
        icon: Rocket,
      },
      {
        id: "feature-2",
        title: "Carreiras",
        description: "Faça parte do time que está revolucionando o marketing para restaurantes.",
        href: "/carreiras",
        icon: Building2,
      },
      {
        id: "feature-3",
        title: "Imprensa",
        description: "Releases, novidades e matérias sobre o RECOMPRA AÍ na mídia.",
        href: "/em-breve",
        icon: Globe2,
      },
    ],
  },
  {
    title: "Business Solutions",
    features: [
      {
        id: "feature-4",
        title: "Contato/Suporte",
        description: "Fale com nosso time comercial ou suporte.",
        href: "/contato",
        icon: Phone,
      },
      {
        id: "feature-5",
        title: "Compliance",
        description: "Segurança e conformidade com a LGPD.",
        href: "/compliance",
        icon: Gavel,
      },
      {
        id: "feature-6",
        title: "Calculadora de ROI",
        description: "Veja o retorno das suas campanhas em tempo real.",
        href: "/calculadora-roi",
        icon: DollarSign,
      },
    ],
  },
];

const regions = [
  {
    title: "Fast Food",
    locations: [
      {
        title: "Hamburguerias",
        href: "/em-breve",
        icon: Beef,
      },
      {
        title: "Lanchonetes",
        href: "/em-breve",
        icon: UtensilsCrossed,
      },
      {
        title: "Sanduicherias",
        href: "/em-breve",
        icon: Sandwich,
      },
      {
        title: "Franquias de delivery rápido",
        href: "/em-breve",
        icon: Truck,
      },
    ],
  },
  {
    title: "Delivery e Casual Dining",
    locations: [
      {
        title: "Pizzarias",
        href: "/em-breve",
        icon: Pizza,
      },
      {
        title: "Esfiharias",
        href: "/em-breve",
        icon: Croissant,
      },
      {
        title: "Comida Italiana",
        href: "/em-breve",
        icon: ChefHat,
      },
      {
        title: "Comida Japonesa / Sushis",
        href: "/em-breve",
        icon: Fish,
      },
    ],
  },
  {
    title: "Cafés e Docerias",
    locations: [
      {
        title: "Cafeterias",
        href: "/em-breve",
        icon: Coffee,
      },
      {
        title: "Confeitarias",
        href: "/em-breve",
        icon: CakeSlice,
      },
      {
        title: "Padarias",
        href: "/em-breve",
        icon: Wheat,
      },
      {
        title: "Açaíterias e Sorveterias",
        href: "/em-breve",
        icon: IceCream,
      },
    ],
  },
  {
    title: "Restaurantes e Especialidades",
    locations: [
      {
        title: "Restaurantes à la carte",
        href: "/em-breve",
        icon: Utensils,
      },
      {
        title: "Dark Kitchens",
        href: "/em-breve",
        icon: Warehouse,
      },
      {
        title: "Restaurantes Saudáveis / Fit",
        href: "/em-breve",
        icon: Sprout,
      },
      {
        title: "Bistrôs e Casas de Carne",
        href: "/em-breve",
        icon: Drumstick,
      },
    ],
  },
];

const resources = [
  {
    id: "resource-1",
    title: "Eventos e Webinars",
    description: "Aprenda com especialistas do setor.",
    href: "/em-breve",
    icon: Calendar,
  },
  {
    id: "resource-2",
    title: "Podcasts",
    description: "Insights sobre produtividade e liderança.",
    href: "/em-breve",
    icon: Mic,
  },
  {
    id: "resource-3",
    title: "Blog",
    description: "Últimas novidades e boas práticas.",
    href: "/blog",
    icon: Newspaper,
  },
  {
    id: "resource-4",
    title: "Tutoriais em Vídeo",
    description: "Comece com vídeos guiados.",
    href: "/em-breve",
    icon: PlayCircle,
  },
  {
    id: "resource-5",
    title: "Base de Conhecimento",
    description: "Guias detalhados e documentação.",
    href: "/em-breve",
    icon: Book,
  },
  {
    id: "resource-6",
    title: "Histórias de Sucesso",
    description: "Veja como outros impulsionam seus resultados.",
    href: "/em-breve",
    icon: Lightbulb,
  },
];

const topicGroups = [
  {
    title: "Materiais de Aprendizado",
    topics: [
      {
        id: "topic-1",
        title: "Guia de Primeiros Passos",
        href: "/em-breve",
        icon: Globe,
      },
      {
        id: "topic-2",
        title: "Atualizações do Produto",
        href: "/em-breve",
        icon: Rocket,
      },
      {
        id: "topic-3",
        title: "Boas Práticas",
        href: "/em-breve",
        icon: Pyramid,
      },
      {
        id: "topic-4",
        title: "Integrations",
        href: "/em-breve",
        icon: ArrowRightLeft,
      },
      {
        id: "topic-5",
        title: "Documentação da API",
        href: "/em-breve",
        icon: AppWindow,
      },
    ],
  },
  {
    title: "Comunidade",
    topics: [
      {
        id: "topic-6",
        title: "Fórum da Comunidade",
        href: "/em-breve",
        icon: Play,
      },
    ],
  },
];

const SolutionsMenu = () => (
  <div className="grid gap-8 sm:grid-cols-2">
    <a
      href="#"
      className="bg-primary text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg px-0 pt-8 lg:rounded-xl lg:px-6"
    >
      <div className="relative flex w-full flex-col space-y-12 text-left md:space-y-8 lg:w-full lg:flex-row lg:justify-between lg:space-x-6 lg:space-y-0 xl:space-x-8">
        <div className="relative flex flex-col px-6 lg:mb-6 lg:px-0">
          <span className="mb-6 text-xs font-medium uppercase tracking-wider md:mb-8">
            TRANSFORME A GESTÃO DO SEU RESTAURANTE
          </span>
          <div className="mt-auto flex items-center space-x-1 text-xs">
            Descubra o RECOMPRA AÍ
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </div>
          <p className="text-primary-foreground/85 mt-2 text-xs">
            Fidelize clientes, automatize campanhas e aumente sua receita com o CRM inteligente feito para restaurantes.
          </p>
        </div>
        <div className="aspect-2/1 relative overflow-clip rounded-t pl-6 lg:max-w-64 lg:pl-0 xl:max-w-96">
          <Image
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="Interface moderna do RecompraAI mostrando dashboard de CRM para restaurantes"
            fill
            className="translate-y-px object-cover object-center"
          />
        </div>
      </div>
    </a>

    <div className="order-last mt-3 sm:order-none sm:mt-0 sm:py-2 md:p-6">
      <div className="mb-4 text-left leading-none md:col-span-2 lg:col-span-4 lg:mb-6">
        <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
          Plataforma Completa
        </strong>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {solutionTechnologies.map((technology) => (
          <NavigationMenuLink
            key={technology.id}
            href={technology.href}
            className="group flex flex-row items-center gap-4"
          >
            <technology.icon className="size-4" />
            <div className="flex-1 text-sm font-medium">{technology.title}</div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        ))}
      </div>
    </div>
    <div className="col-span-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {solutions.map((solution) => (
        <div key={solution.id} className="border-border rounded-md border p-5">
          <a href={solution.href} className="group flex flex-col text-left">
            <div className="flex items-center">
              <strong className="text-sm font-medium">
                {solution.title}
              </strong>
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              {solution.description}
            </p>
          </a>
        </div>
      ))}
    </div>
  </div>
);

const ProductsMenu = () => {
  const [primaryRegion, ...otherRegions] = regions;

  return (
    <div className="grid gap-y-12 lg:grid-cols-[18rem_1fr] lg:gap-8">
      <div className="flex w-full max-w-[18rem] flex-col gap-y-8">
        <a
          href="#"
          className="text-primary-foreground group relative flex flex-row overflow-hidden rounded-lg px-0 lg:rounded-xl"
        >
          <div className="relative z-10 flex w-full flex-col text-left">
            <div className="aspect-2/1 relative flex max-h-[11rem] w-full justify-center">
              <Image
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="Ilustração de plataforma de CRM com automação e gestão de clientes para restaurantes"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="bg-primary relative z-20 flex flex-col rounded-b-xl p-6">
              <div className="flex items-center space-x-1 text-xs">
                Descubra o RECOMPRA AÍ
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-primary-foreground/70 mt-2 text-xs">
                Tudo o que você precisa para atrair, fidelizar e entender seus clientes em um só lugar.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid w-full gap-y-12 lg:gap-y-6">
        {productCategories.map((category) => (
          <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
            <div className="border-border text-left lg:border-b lg:pb-1">
              <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
                {category.title}
              </strong>
            </div>
            <menu className="grid md:grid-cols-3 md:gap-x-5 lg:gap-y-7">
              {category.products.map((product) => (
                <NavigationMenuLink
                  key={product.id}
                  href="#"
                  className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
                >
                  <div className="relative flex aspect-square w-6 shrink-0 items-center justify-center overflow-clip rounded md:size-9 md:p-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={36}
                      height={36}
                      className="dark:invert"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                      {product.title}
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                      {product.description}
                    </p>
                  </div>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                </NavigationMenuLink>
              ))}
            </menu>
          </div>
        ))}
      </div>
  <div className="grid gap-6 lg:col-span-2 lg:grid-cols-[18rem_1fr] lg:gap-8">
        <div className="lg:col-span-2 border-border text-left lg:border-b lg:pb-3">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            Segmentos que atendemos
          </strong>
        </div>
        {primaryRegion && (
          <div className="border-border space-y-5 rounded-md border p-6">
            <div className="text-muted-foreground text-left text-xs">
              {primaryRegion.title}
            </div>
            <menu className="border-border grid gap-y-3 border-t pt-4">
              {primaryRegion.locations.map((location) => (
                <NavigationMenuLink
                  key={location.title}
                  href={location.href}
                  className="text-foreground/85 hover:text-foreground group flex flex-row items-center space-x-4 text-left"
                >
                  <div className="flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <location.icon className="size-4" />
                  </div>
                  <div className="flex-1 text-sm font-medium">
                    {location.title}
                  </div>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                </NavigationMenuLink>
              ))}
            </menu>
          </div>
        )}
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6">
          {otherRegions.map((region) => (
            <div
              key={region.title}
              className="border-border space-y-5 rounded-md border p-6"
            >
              <div className="text-muted-foreground text-left text-xs">
                {region.title}
              </div>
              <menu className="border-border grid gap-y-3 border-t pt-4">
                {region.locations.map((location) => (
                  <NavigationMenuLink
                    key={location.title}
                    href={location.href}
                    className="text-foreground/85 hover:text-foreground group flex flex-row items-center space-x-4 text-left"
                  >
                    <div className="flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <location.icon className="size-4" />
                    </div>
                    <div className="flex-1 text-sm font-medium">
                      {location.title}
                    </div>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                  </NavigationMenuLink>
                ))}
              </menu>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GlobalGuidanceMenu = () => (
  <div>
    <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0">
      <div className="w-full shrink-0 lg:max-w-[18rem]">
        <a
          href="/sobre-nos"
          className="text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
        >
          <div className="relative z-10 flex w-full flex-col-reverse text-left lg:flex-col">
            <div className="aspect-4/3 relative flex max-h-[18rem] w-full flex-1 justify-center">
              <Image
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt="Equipe RecompraAI desenvolvendo soluções de CRM para restaurantes"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="bg-primary relative z-20 flex flex-col rounded-b-xl p-6">
              <div className="flex items-center space-x-1 text-xs">
                Sobre a Recompra AÍ
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-primary-foreground/85 mt-2 text-xs">
                A tecnologia que ajuda restaurantes a vender mais e fidelizar clientes com inteligência de dados.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid w-full gap-y-12 lg:gap-y-6">
        {globalCategories.map((category) => (
          <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
            <div className="border-border text-left lg:border-b lg:pb-3">
              <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
                {category.title}
              </strong>
            </div>
            <menu className="grid md:grid-cols-3 md:gap-x-6 lg:gap-y-6">
              {category.features.map((feature) => (
                <NavigationMenuLink
                  key={feature.id}
                  href={feature.href}
                  className="border-border group flex flex-row items-center space-x-4 border-b py-5 text-left sm:py-7 lg:border-0 lg:py-0"
                >
                  <div className="flex aspect-square size-9 shrink-0 items-center justify-center">
                    <feature.icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                      {feature.title}
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                </NavigationMenuLink>
              ))}
            </menu>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PartnersMenu = () => (
  <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4">
    <div className="md:col-span-2">
      <a
        href="#"
        className="bg-primary text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pb-[14rem] pt-6 md:pb-6 md:pt-40">
            <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
              Programa de Parceiros
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs">
              Junte-se à nossa rede de parceiros e cresça seu negócio com nossa plataforma líder em fidelização.
            </p>
          </div>
          <div className="bg-accent absolute inset-0 top-[32%] invert md:top-0">
            <Image
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="Rede de parceiros e integrações do RecompraAI para restaurantes"
              fill
              className="object-cover object-top-right opacity-100 md:h-2/3 md:object-top"
            />
          </div>
        </div>
      </a>
    </div>
    <div className="md:col-span-1">
      <a
        href="#"
        className="bg-accent text-accent-foreground group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pb-[14rem] pt-6 md:pb-6 md:pt-40">
            <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
              Parceiros de Solução
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-muted-foreground mt-2 text-xs">
              Desenvolva e entregue soluções que ajudam clientes a conquistar mais resultados.
            </p>
          </div>
          <div className="absolute inset-0 top-[32%] md:top-0">
            <Image
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="Soluções integradas e parcerias estratégicas do RecompraAI"
              fill
              className="object-cover object-top-right md:h-2/3 md:object-top"
            />
          </div>
        </div>
      </a>
    </div>
    <div className="grid gap-4 md:col-span-1">
      <NavigationMenuLink
        href="#"
        className="border-border group flex w-full flex-row items-center rounded-lg border lg:rounded-xl"
      >
        <div className="flex items-start p-6 text-left">
          <Users className="size-8" />
          <div className="ml-4">
            <div className="text-foreground/85 hover:text-foreground mb-1 mt-auto text-sm font-bold">
              Parceiros de Implementação
            </div>
            <p className="text-muted-foreground group-hover:text-foreground text-xs">
              Especialistas em implementar e configurar o RecompraAI no seu restaurante.
            </p>
          </div>
        </div>
      </NavigationMenuLink>
      <NavigationMenuLink
        href="#"
        className="border-border group flex w-full flex-row items-center rounded-lg border lg:rounded-xl"
      >
        <div className="flex items-start p-6 text-left">
          <Computer className="size-8" />
          <div className="ml-4">
            <div className="text-foreground/85 hover:text-foreground mb-1 mt-auto text-sm font-bold">
              Parceiros Tecnológicos
            </div>
            <p className="text-muted-foreground group-hover:text-foreground text-xs">
              Integrações com PDVs, cardápios digitais e sistemas de delivery.
            </p>
          </div>
        </div>
      </NavigationMenuLink>
    </div>
  </div>
);

const ResourcesMenu = () => (
  <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-6">
    <div className="col-span-1">
      <a
        href="#"
        className="bg-primary text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pb-[14rem] pt-6 md:pb-6 md:pt-40">
            <div className="mt-auto flex items-center space-x-1 text-xs">
              Central de Recursos
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs">
              Acesse guias, tutoriais e boas práticas para potencializar seus
              resultados.
            </p>
          </div>
          <div className="absolute inset-0">
            <Image
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="Recursos educacionais e documentação técnica do RecompraAI"
              fill
              className="object-cover object-center invert"
            />
          </div>
          <div className="absolute inset-x-0 top-0 z-10 h-[60%] bg-[linear-gradient(hsl(var(--color-primary))_50%,transparent)] md:bottom-[-10%] md:top-auto md:h-[50%] md:bg-[linear-gradient(transparent,hsl(var(--color-primary))_50%)]"></div>
        </div>
      </a>
    </div>
    <div className="lg:col-span-2 lg:flex lg:flex-col">
      <div>
        <div className="border-border mb-4 pb-3 text-left md:mb-6 lg:border-b">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            Recursos em Destaque
          </strong>
        </div>
      </div>
      <menu className="grid gap-y-4 lg:h-full lg:grid-cols-2 lg:gap-6">
        {resources.map((resource) => (
          <NavigationMenuLink
            key={resource.id}
            href={resource.href}
            className="border-border bg-accent lg:bg-background group flex flex-row items-center space-x-4 rounded-md px-6 py-5 text-left md:space-x-5 lg:border lg:p-5"
          >
            <resource.icon className="size-6 sm:size-7" />
            <div className="ml-4 flex-1">
              <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                {resource.title}
              </div>
              <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                {resource.description}
              </p>
            </div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        ))}
      </menu>
    </div>
    <div className="col-span-1 md:col-span-2 lg:col-span-1">
      {topicGroups.map((group) => (
        <Fragment key={group.title}>
          <div className="border-border mb-4 pb-3 text-left md:col-span-2 md:mb-7 lg:border-b">
            <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
              Aprendizado e Suporte
            </strong>
          </div>
          <menu className="mb-7 grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-1 lg:gap-x-0">
            {group.topics.map((topic) => (
              <NavigationMenuLink
                key={topic.id}
                href={topic.href}
                className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-8 lg:space-x-4 lg:border-0 lg:py-0"
              >
                <div className="flex aspect-square size-9 shrink-0 items-center justify-center">
                  <topic.icon className="size-5" />
                </div>
                <div className="text-foreground/85 group-hover:text-foreground flex-1 text-xs font-medium md:text-sm">
                  {topic.title}
                </div>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
              </NavigationMenuLink>
            ))}
          </menu>
        </Fragment>
      ))}
    </div>
  </div>
);

const navigationMenuItems = [
  {
    key: "solutions",
    label: "Soluções",
    component: SolutionsMenu,
  },
  {
    key: "products",
    label: "Produtos",
    component: ProductsMenu,
  },
  {
    key: "global",
    label: "Empresa",
    component: GlobalGuidanceMenu,
  },
  {
    key: "partners",
    label: "Parceiros",
    component: PartnersMenu,
  },
  {
    key: "resources",
    label: "Recursos",
    component: ResourcesMenu,
  },
] as const;

const Navbar4 = () => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<
    "solutions" | "products" | "global" | "partners" | "resources" | null
  >(null);

  // Bloquear scroll quando o menu mobile está aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup: restaurar scroll ao desmontar
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <section className="bg-background inset-x-0 top-0 z-20">
  <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <NavigationMenu className="min-w-full [&>div:last-child]:left-auto">
          <div className="flex w-full justify-between gap-2 py-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Ir para a página inicial"
            >
              <Logo className="h-8 w-auto" priority />
            </Link>
            <div className="flex items-center gap-2 xl:gap-8">
              <NavigationMenuList className="hidden gap-0 lg:flex">
                {navigationMenuItems.map((item) => (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuTrigger className="text-xs xl:text-sm">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                      <item.component />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="hidden md:block" asChild>
                <a href="/contato">Solicitar Demonstração</a>
              </Button>
              <Button className="hidden md:block">Login</Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                className="lg:hidden"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                    setSubmenu(null);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="border-border bg-background fixed left-0 right-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-auto border-t lg:hidden px-6">
              {submenu && (
                <div className="mt-3">
                  <Button
                    variant="link"
                    onClick={() => setSubmenu(null)}
                    className="relative -left-4"
                  >
                    <ArrowLeft className="size-4 text-xs" />
                    Go back
                  </Button>
                </div>
              )}
              {submenu === null && (
                <div>
                  {navigationMenuItems.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      className="border-border flex w-full items-center border-b py-6 text-left"
                      onClick={() => setSubmenu(item.key)}
                    >
                      <span className="flex-1 text-sm font-medium">
                        {item.label}
                      </span>
                      <span className="shrink-0">
                        <ArrowRight className="size-4" />
                      </span>
                    </button>
                  ))}
                </div>
              )}
              {navigationMenuItems.map(
                (item) =>
                  submenu === item.key && (
                    <div key={item.key}>
                      <h2 className="pb-6 pt-4 text-lg font-medium">
                        {item.label}
                      </h2>
                      <item.component />
                    </div>
                  ),
              )}
              {/* Mobile menu footer */}
              <div className="mt-auto flex flex-col items-center gap-4 py-24">
                <Button variant="outline" className="w-full" asChild>
                  <a href="/contato">Solicitar Demonstração</a>
                </Button>
                <Button className="w-full">Login</Button>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar4 };
