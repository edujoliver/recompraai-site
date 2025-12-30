import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Funciona com ou sem integração",
  "Mensagem automática no WhatsApp",
  "Painel simples pra controlar tudo",
  "Time te ajuda a configurar",
  "Você vê resultado em 7 dias",
];

const Cta4 = ({
  title = "Quer Fazer Seu Cliente Voltar?",
  description = "Vamos te mostrar como funciona. Sem enrolação, sem complicação. Em 15 minutos você vê como fazer seu cliente lembrar de você.",
  buttonText = "Quero Ver Como Funciona",
  buttonUrl = "#contato",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="relative bg-gray-950 py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="mb-6 font-sans text-5xl font-normal text-white sm:text-6xl lg:text-7xl">
            Comece Grátis Hoje
          </h2>
          
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              asChild
              className="h-12 rounded-full bg-[#6841FA] px-8 font-mono text-sm font-medium uppercase tracking-wider text-white hover:bg-[#5534d8]"
            >
              <a href="/signup">
                Criar Conta Grátis
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="h-12 rounded-full border-2 border-white/20 bg-transparent px-8 font-mono text-sm font-medium uppercase tracking-wider text-white hover:border-white/40 hover:bg-white/10"
            >
              <a href="#contato">
                Falar com Vendas
              </a>
            </Button>
          </div>
          
          <p className="mt-6 font-sans text-sm text-gray-400">
            14 dias grátis • Sem cartão • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export { Cta4 };
