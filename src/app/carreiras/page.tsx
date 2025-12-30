import { Careers1 } from "@/components/careers1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carreiras | RecompraAI",
  description: "Faça parte do time que está revolucionando o marketing para restaurantes. Conheça as oportunidades de carreira no RecompraAI.",
};

export default function CarreirasPage() {
  return (
    <>
      <Careers1 />
    </>
  );
}
