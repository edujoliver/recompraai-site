import Image from "next/image";

const Feature62 = () => {
  return (
    <section
      className="py-16"
      style={{
        backgroundColor: "#F5F5FF",
      }}
    >
  <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col space-y-10 md:space-y-16">
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
              Como Funciona
            </span>
            <h2 className="text-pretty text-3xl font-bold text-[#2C216F] sm:text-4xl lg:text-5xl">
              Controle Quem Compra de Você e Faça Eles Voltarem
            </h2>
            <p className="mt-4 max-w-3xl text-base font-medium text-[#5C5C73] sm:text-lg">
              Manda mensagem automática no WhatsApp, oferece prêmio de volta e mostra quem tá comprando mais. Funciona com ou sem integração — você decide.
            </p>
          </div>
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="Interface do CRM mostrando dashboard com campanhas automáticas de fidelização no WhatsApp"
                  width={800}
                  height={600}
                  className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                  Cliente Sumiu? A Gente Chama de Volta
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                  Manda mensagem no WhatsApp automaticamente pra quem não compra há tempo. Oferece cupom, prêmio ou desconto. Você configura uma vez só e pronto, trabalha sozinho.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-row-reverse lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="Dashboard de análise mostrando produtos mais vendidos e recomendações inteligentes para aumentar ticket médio"
                  width={800}
                  height={600}
                  className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                  Venda Mais Pro Mesmo Cliente
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                  Veja o que seu cliente mais pede e ofereça o combo perfeito. Mostre o que tá vendendo mais e sugira ofertas personalizadas. Quanto mais ele compra, mais você lucra.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="Interface de IA mostrando análise em tempo real de vendas e sugestões inteligentes de ações"
                  width={800}
                  height={600}
                  className="aspect-4/3 w-full rounded-md border border-border object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-[#2C216F] md:mb-4 md:text-4xl md:leading-tight lg:mb-6">
                  Oráculo: IA Que Fala O Que Fazer
                </h3>
                <p className="text-base font-medium leading-relaxed text-[#5C5C73] lg:text-lg">
                  Vendeu menos essa semana? A IA analisa seus dados e te fala exatamente o que fazer pra vender mais. Cliente em risco? Sugere ação na hora. Dashboard com métricas em tempo real e insights automáticos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature62 };
