import { Compliance6 } from "@/components/compliance6";
import { Faq1 } from "@/components/faq1";
import { Cta4 } from "@/components/cta4";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance LGPD e Segurança de Dados | RecompraAI",
  description:
    "Sistema 100% conforme à LGPD com criptografia SSL/TLS, backup diário e auditoria 24/7. Proteja os dados dos seus clientes com as melhores práticas de segurança da informação.",
  keywords: [
    "LGPD",
    "compliance",
    "segurança de dados",
    "proteção de dados",
    "LGPD restaurantes",
    "privacidade",
    "criptografia",
    "backup seguro",
    "auditoria de dados",
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
    title: "Compliance LGPD e Segurança de Dados | RecompraAI",
    description:
      "Sistema 100% conforme à LGPD com criptografia, backup diário e auditoria 24/7. Seus dados protegidos com as melhores práticas.",
    type: "website",
    url: "https://recompraai.com.br/compliance",
    images: [
      {
        url: "/logos/recompraai.svg",
        width: 1200,
        height: 630,
        alt: "RecompraAI - Compliance e Segurança",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance LGPD e Segurança de Dados | RecompraAI",
    description:
      "Sistema 100% conforme à LGPD com criptografia, backup diário e auditoria 24/7.",
  },
};

const faqItems = [
  {
    id: "faq-1",
    question: "Como o RecompraAI garante conformidade com a LGPD?",
    answer:
      "O RecompraAI foi desenvolvido desde o início com conformidade total à LGPD. Implementamos controles rigorosos de coleta, armazenamento e tratamento de dados pessoais, com criptografia de ponta a ponta, políticas claras de consentimento e mecanismos para exercício de todos os direitos dos titulares de dados.",
  },
  {
    id: "faq-2",
    question: "Onde os dados dos meus clientes ficam armazenados?",
    answer:
      "Todos os dados são armazenados em servidores seguros localizados no Brasil, em conformidade com a legislação brasileira. Utilizamos infraestrutura em nuvem de última geração com certificações internacionais de segurança, garantindo proteção física e lógica dos dados.",
  },
  {
    id: "faq-3",
    question: "Como posso solicitar a exclusão dos dados dos meus clientes?",
    answer:
      "Você pode solicitar a exclusão de dados a qualquer momento através da própria plataforma ou entrando em contato com nosso suporte. Processamos solicitações de exclusão em até 48 horas úteis, mantendo apenas dados necessários por obrigação legal pelo período exigido.",
  },
  {
    id: "faq-4",
    question: "O RecompraAI compartilha dados com terceiros?",
    answer:
      "Não compartilhamos seus dados ou dos seus clientes com terceiros para fins comerciais. Apenas compartilhamos dados quando estritamente necessário para operação do serviço (como processadores de pagamento) ou quando exigido por lei, sempre com o devido contrato de processamento de dados.",
  },
  {
    id: "faq-5",
    question: "Que tipo de criptografia é utilizada?",
    answer:
      "Utilizamos criptografia AES-256 bits para dados em repouso e TLS 1.3 para dados em trânsito. Todas as senhas são armazenadas com hash bcrypt e nunca temos acesso às senhas em texto plano. Além disso, implementamos autenticação de dois fatores para maior segurança.",
  },
  {
    id: "faq-6",
    question: "Com que frequência são feitos backups dos dados?",
    answer:
      "Realizamos backups automáticos diários de todos os dados, com retenção de 30 dias. Os backups são criptografados e armazenados em múltiplas localizações geográficas para garantir redundância e recuperação em caso de desastres.",
  },
  {
    id: "faq-7",
    question: "Como funciona a auditoria e monitoramento?",
    answer:
      "Mantemos logs completos de todas as ações realizadas na plataforma, incluindo acessos, modificações e exclusões de dados. Nosso sistema é monitorado 24/7 com alertas automáticos para atividades suspeitas. Todos os logs são mantidos por período mínimo exigido pela legislação.",
  },
  {
    id: "faq-8",
    question: "O que acontece com os dados se eu cancelar minha conta?",
    answer:
      "Ao cancelar sua conta, você tem a opção de exportar todos os seus dados em formato estruturado. Após o cancelamento, mantemos os dados pelo período necessário para cumprimento de obrigações legais (como registros fiscais) e então procedemos com a exclusão definitiva de todos os dados pessoais.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <Compliance6 />
      <Faq1
        heading="Perguntas Frequentes sobre Compliance e Segurança"
        items={faqItems}
      />
      <Cta4
        title="Dúvidas sobre conformidade LGPD?"
        description="Fale com nosso time de especialistas em segurança e privacidade de dados. Estamos prontos para esclarecer todas as suas dúvidas sobre como protegemos seus dados."
        buttonText="Falar com especialista"
        buttonUrl="/contato"
        items={[
          "Consultoria especializada em LGPD para restaurantes",
          "Documentação completa de conformidade",
          "Suporte dedicado para questões de privacidade",
          "Treinamento da equipe em boas práticas",
          "Relatórios de auditoria sob demanda",
        ]}
      />
    </>
  );
}
