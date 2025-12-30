import { CircleArrowRight, Files, Settings } from "lucide-react";
import Image from "next/image";

const About1 = () => {
  return (
    <section className="py-21">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-28 px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            O que é o{" "}
            <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>RecompraAI
            </span>
            ?
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            O <strong>RecompraAI</strong> é uma plataforma completa de CRM desenvolvida especialmente para restaurantes, delivery e redes gastronômicas. 
            Mais do que um software, é uma solução inteligente que unifica dados de clientes de múltiplas fontes (PDV, delivery, fidelidade) 
            e transforma essas informações em ações estratégicas automatizadas.
          </p>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Com o RecompraAI, restaurantes conseguem conhecer profundamente seus clientes, segmentá-los, criar campanhas personalizadas 
            e automatizar comunicações via WhatsApp, SMS e e-mail — tudo para aumentar a frequência de compra, ticket médio e fidelização.
          </p>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Combinamos tecnologia de ponta com inteligência artificial para transformar dados em receita previsível e crescimento sustentável para seu restaurante.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Image
            src="/logos/recompraai.svg"
            alt="Logo do RecompraAI - CRM inteligente para restaurantes"
            width={384}
            height={384}
            priority
            className="size-full max-h-96 rounded-2xl bg-primary/5 p-10 object-contain"
          />
          <div className="flex flex-col justify-between gap-10 rounded-2xl bg-primary/10 p-10">
            <p className="text-sm font-medium text-primary">NOSSA MISSÃO</p>
            <p className="text-lg font-medium text-muted-foreground">
              Capacitar cada restaurante com uma visão 360° de seus clientes, automatizar ações de recompra e fidelização, 
              e fornecer relatórios e insights acionáveis — tudo isso sem complicar a rotina das equipes operacionais.
            </p>
            <p className="text-base text-muted-foreground">
              Acreditamos que todo restaurante merece acesso a tecnologia de nível empresarial para competir, crescer e prosperar 
              no mercado cada vez mais digital e competitivo.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-2xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Como o RecompraAI transforma dados em{" "}
              <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>receita recorrente
              </span>
            </h2>
            <p className="text-muted-foreground">
              Aliamos tecnologia proprietária, inteligência artificial e análise avançada de dados 
              para que redes, franquias e restaurantes independentes cresçam de forma sustentável e previsível.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Files className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Unificação de dados em tempo real
              </h3>
              <p className="text-muted-foreground">
                O RecompraAI conecta-se com mais de 20 integrações (iFood, Rappi, sistemas de PDV como Saipos, Consumer, etc.) 
                e centraliza todas as informações de clientes, pedidos e comportamentos em um único painel inteligente.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <CircleArrowRight className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Automação inteligente de campanhas
              </h3>
              <p className="text-muted-foreground">
                Crie jornadas automatizadas personalizadas: reative clientes inativos, premeie os VIPs, envie ofertas no momento certo 
                via WhatsApp, SMS ou e-mail — tudo no piloto automático e com alta conversão.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent">
                <Settings className="size-5" />
              </div>
              <h3 className="mt-2 mb-3 text-lg font-semibold">
                Relatórios e insights estratégicos
              </h3>
              <p className="text-muted-foreground">
                Não basta ter dados — é preciso saber interpretá-los. O RecompraAI oferece dashboards intuitivos e relatórios 
                completos que revelam oportunidades de crescimento, mensuram ROI e guiam suas decisões estratégicas.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-10 text-sm font-medium text-muted-foreground">
              TRABALHE CONOSCO
            </p>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Estamos construindo a{" "}
              <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>nova era
              </span>
              {" "}da fidelização gastronômica
            </h2>
          </div>
          <div>
            <Image
              src="/logos/bghero.svg"
              alt="Time RecompraAI trabalhando em estratégias de crescimento para restaurantes"
              width={800}
              height={144}
              className="mb-6 max-h-36 w-full rounded-xl bg-primary/5 p-4 object-cover"
              loading="lazy"
            />
            <p className="text-muted-foreground mb-4">
              Acreditamos em equipes diversas, curiosas e obcecadas por resultados. Se você quer impactar diretamente a forma como 
              milhares de restaurantes crescem e se conectam com seus clientes, o RecompraAI é o lugar certo.
            </p>
            <p className="text-muted-foreground">
              Aqui, você trabalhará com tecnologia de ponta, dados reais e desafios que fazem a diferença no mundo físico e digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About1 };
