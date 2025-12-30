import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq1 = ({
  heading = "Perguntas Frequentes",
  items = [
    {
      id: "faq-1",
      question: "Como funciona o RecompraAI?",
      answer:
        "Conecta com seu sistema de pedidos via integração plug-and-play, centraliza todos os dados dos clientes em um dashboard completo com segmentação RFV automática, métricas de recompra, LTV e taxa de conversão. Identifica clientes em risco, dispara campanhas automatizadas via WhatsApp/SMS/Email e gera cupons personalizados. Você acompanha ROI em tempo real e toma decisões baseadas em dados reais, não suposições.",
    },
    {
      id: "faq-2",
      question: "O que é o Oráculo?",
      answer:
        "É a nossa IA que analisa seus dados e te fala exatamente o que fazer pra vender mais. Vendeu menos essa semana? Ela te diz o motivo. Cliente em risco? Sugere a ação. É como ter um especialista olhando seu restaurante 24h.",
    },
    {
      id: "faq-3",
      question: "Funciona sem integração?",
      answer:
        "Sim! Você pode cadastrar manualmente ou conectar via integração plug-and-play com mais de 20 sistemas (Delivery Direto, Saipos, Anotaí, Consumer, OPDV, etc). A sincronização é automática e segura.",
    },
    {
      id: "faq-4",
      question: "Preciso saber de tecnologia?",
      answer:
        "Não! É simples de usar. Se você sabe usar WhatsApp, sabe usar o RecompraAI. Nossa equipe te ajuda a configurar tudo.",
    },
    {
      id: "faq-5",
      question: "Quanto tempo pra ver resultado?",
      answer:
        "Clientes começam a voltar em 7 a 14 dias. Primeira mensagem sai assim que você cadastra a base. Resultado rápido.",
    },
    {
      id: "faq-6",
      question: "Vai encher meu cliente de mensagem?",
      answer:
        "Não! Só manda pra quem já comprou de você e respeita intervalo ideal. Cliente pode parar de receber quando quiser. Sem spam.",
    },
    {
      id: "faq-7",
      question: "Quanto custa?",
      answer:
        "Planos flexíveis de acordo com tamanho do restaurante. Tem demonstração gratuita pra você testar antes. Fala com a gente pra ver qual plano é ideal.",
    },
    {
      id: "faq-8",
      question: "Posso cancelar?",
      answer:
        "Sim, quando quiser. Sem multa, sem contrato de fidelidade. Você fica porque funciona, não porque é obrigado.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
            {heading}
          </h2>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq1 };
