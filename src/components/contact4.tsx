"use client";

import { Mail, MessageSquare, HeadphonesIcon, Calendar } from "lucide-react";

const Contact4 = () => {
  return (
    <section className="py-32 bg-[#F5F5FF]">
      <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B7A6FF]">
            Fale Conosco
          </span>
          <h1 className="text-balance text-4xl font-bold text-[#2C216F] md:text-5xl lg:text-6xl mt-4">
            Entre em contato com nossa equipe
          </h1>
          <p className="mt-6 text-lg text-[#5C5C73] leading-relaxed">
            Estamos aqui para ajudar você a transformar seu restaurante com o RecompraAI. 
            Escolha a melhor forma de falar com a gente.
          </p>
        </div>
                {/* Cards de Contato */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {/* Card Vendas */}
          <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-[#E5E5FF] bg-white p-8 transition-all hover:shadow-xl hover:shadow-[#6841FA]/10 hover:border-[#6841FA]/30">
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#F5F5FF] text-[#6841FA] group-hover:bg-[#6841FA] group-hover:text-white transition-colors">
                <Mail className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-[#2C216F]">Vendas</h2>
              <p className="text-[#5C5C73] leading-relaxed">
                Quer conhecer melhor nossa plataforma? Agende uma demonstração gratuita 
                e veja o RecompraAI em ação.
              </p>
            </div>
            <a 
              href="/contato/vendas" 
              className="font-semibold text-[#6841FA] hover:text-[#5b3cf4] transition-colors inline-flex items-center gap-2 group-hover:gap-3"
            >
              Solicitar demonstração
              <span className="transition-all">→</span>
            </a>
          </div>

          {/* Card Suporte */}
          <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-[#E5E5FF] bg-white p-8 transition-all hover:shadow-xl hover:shadow-[#6841FA]/10 hover:border-[#6841FA]/30">
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#F5F5FF] text-[#6841FA] group-hover:bg-[#6841FA] group-hover:text-white transition-colors">
                <HeadphonesIcon className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-[#2C216F]">Suporte</h2>
              <p className="text-[#5C5C73] leading-relaxed">
                Precisa de ajuda com a plataforma? Nosso time de suporte está pronto 
                para resolver suas dúvidas.
              </p>
            </div>
            <a 
              href="/contato/suporte" 
              className="font-semibold text-[#6841FA] hover:text-[#5b3cf4] transition-colors inline-flex items-center gap-2 group-hover:gap-3"
            >
              Obter suporte
              <span className="transition-all">→</span>
            </a>
          </div>

          {/* Card Geral */}
          <div className="group flex flex-col justify-between gap-6 rounded-2xl border border-[#E5E5FF] bg-white p-8 transition-all hover:shadow-xl hover:shadow-[#6841FA]/10 hover:border-[#6841FA]/30">
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#F5F5FF] text-[#6841FA] group-hover:bg-[#6841FA] group-hover:text-white transition-colors">
                <MessageSquare className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-[#2C216F]">Geral</h2>
              <p className="text-[#5C5C73] leading-relaxed">
                Parcerias, imprensa ou outras questões? Entre em contato através 
                do nosso formulário.
              </p>
            </div>
            <a 
              href="/contato/geral" 
              className="font-semibold text-[#6841FA] hover:text-[#5b3cf4] transition-colors inline-flex items-center gap-2 group-hover:gap-3"
            >
              Falar conosco
              <span className="transition-all">→</span>
            </a>
          </div>
        </div>

        {/* Seção de Informações de Contato */}
        <div className="mt-20 rounded-2xl bg-gradient-to-br from-[#6841FA] to-[#5b3cf4] p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Outras formas de contato
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Escolha o canal que melhor atende sua necessidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <a 
                href="mailto:contato@recompraai.com.br" 
                className="text-white/90 hover:text-white transition-colors"
              >
                contato@recompraai.com.br
              </a>
            </div>

            {/* Telefone */}
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                <HeadphonesIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <a 
                href="tel:+551140630000" 
                className="text-white/90 hover:text-white transition-colors"
              >
                (11) 4063-0000
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm mb-4">
                <MessageSquare className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                (11) 99999-9999
              </a>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/20 text-center">
            <p className="text-white/90 text-sm flex items-center justify-center gap-2">
              <Calendar className="h-4 w-4" />
              Horário de atendimento: Segunda a Sexta, das 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact4 };
