import { BlogVapiStyle } from "@/components/blog-vapi-style";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | RecompraAI - Artigos sobre Fidelização e CRM para Restaurantes",
  description: "Artigos, dicas e estratégias sobre fidelização de clientes, automação de recompra e marketing para restaurantes.",
  keywords: [
    "blog recompra restaurante",
    "artigos fidelização",
    "dicas crm restaurante",
    "marketing restaurante",
    "automação whatsapp",
    "estratégias delivery",
    "gestão clientes restaurante"
  ],
};

export default function BlogPage() {
  return <BlogVapiStyle />;
}
