"use client";

import { useState, useEffect } from "react";
import { Calculator, TrendingUp, Users, DollarSign, Percent, ArrowRight, Lightbulb, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Cta4 } from "@/components/cta4";
import Link from "next/link";

export default function CalculadoraROI() {
  // Inputs do usuário
  const [clientesAtivos, setClientesAtivos] = useState(500);
  const [ticketMedio, setTicketMedio] = useState(45);
  const [pedidosMes, setPedidosMes] = useState(2);
  const [taxaRetencao, setTaxaRetencao] = useState(30);

  // Resultados calculados
  const [resultados, setResultados] = useState({
    receitaMensalAtual: 0,
    receitaAnualAtual: 0,
    receitaMensalComRecompra: 0,
    receitaAnualComRecompra: 0,
    aumentoMensal: 0,
    aumentoAnual: 0,
    roi: 0,
    paybackMeses: 0,
    novosClientesEquivalentes: 0,
  });

  useEffect(() => {
    calcularROI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientesAtivos, ticketMedio, pedidosMes, taxaRetencao]);

  const calcularROI = () => {
    // Receita atual
    const receitaMensalAtual = clientesAtivos * ticketMedio * pedidosMes;
    const receitaAnualAtual = receitaMensalAtual * 12;

    // Com RecompraAI: melhorias incrementais sobre a base atual
    // 1. Aumento de 20% na taxa de retenção (ex: de 30% para 36%)
    // const taxaRetencaoNova = Math.min(taxaRetencao * 1.20, 95); // máximo 95%
    
    // 2. Clientes inativos que voltam (recuperação de 15% dos inativos)
    const clientesInativos = clientesAtivos * (1 - taxaRetencao / 100);
    const clientesRecuperados = clientesInativos * 0.15;
    
    // 3. Aumento de 10% na frequência de pedidos dos ativos
    const pedidosMesComRecompra = pedidosMes * 1.10;
    
    // Total de clientes gerando receita no novo cenário
    const clientesAtivosNovo = clientesAtivos + clientesRecuperados;
    
    // Receita com RecompraAI
    const receitaMensalComRecompra = clientesAtivosNovo * ticketMedio * pedidosMesComRecompra;
    const receitaAnualComRecompra = receitaMensalComRecompra * 12;

    // Aumento de receita
    const aumentoMensal = receitaMensalComRecompra - receitaMensalAtual;
    const aumentoAnual = aumentoMensal * 12;

    // Custo estimado da plataforma (R$ 497/mês)
    const custoMensalPlataforma = 497;
    const custoAnualPlataforma = custoMensalPlataforma * 12;

    // Lucro líquido anual (ganho - custo)
    const lucroLiquidoAnual = aumentoAnual - custoAnualPlataforma;

    // ROI = (Lucro / Investimento) * 100
    const roi = (lucroLiquidoAnual / custoAnualPlataforma) * 100;

    // Payback: quantos meses para recuperar investimento
    const paybackMeses = aumentoMensal > 0 ? custoMensalPlataforma / aumentoMensal : 0;

    // Novos clientes equivalentes necessários para mesmo resultado
    const novosClientesEquivalentes = Math.ceil(aumentoMensal / (ticketMedio * pedidosMes));

    setResultados({
      receitaMensalAtual,
      receitaAnualAtual,
      receitaMensalComRecompra,
      receitaAnualComRecompra,
      aumentoMensal,
      aumentoAnual,
      roi,
      paybackMeses,
      novosClientesEquivalentes,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F5FF] via-white to-[#F5F5FF] py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6841FA]/5 to-transparent" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-[#6841FA]/10 text-[#6841FA] hover:bg-[#6841FA]/20">
              <Calculator className="mr-2 h-4 w-4" />
              Calculadora de ROI
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#2C216F] sm:text-5xl lg:text-6xl">
              Quanto Você Pode{" "}
              <span style={{ background: "linear-gradient(to right, #6841FA, #9b7dff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Faturar Mais
              </span>
              <br />
              com o RecompraAI?
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#5C5C73]">
              Descubra quanto seu restaurante pode aumentar em receita
              automatizando a recompra e fidelizando clientes.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/contato">
                <Button size="lg" className="bg-[#6841FA] hover:bg-[#5935d9]">
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="border-[#6841FA] text-[#6841FA] hover:bg-[#6841FA]/10">
                  Ver Como Funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Inputs Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Dados do Seu Restaurante</CardTitle>
                <CardDescription>
                  Ajuste os valores para ver o potencial do seu negócio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Clientes Ativos */}
                <div>
                  <Label className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Users className="h-4 w-4 text-[#6841FA]" />
                      Clientes Ativos no Mês
                    </span>
                    <Badge variant="outline" className="text-[#6841FA]">
                      {clientesAtivos}
                    </Badge>
                  </Label>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={clientesAtivos}
                    onChange={(e) => setClientesAtivos(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#6841FA]"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>100</span>
                    <span>5.000</span>
                  </div>
                </div>

                {/* Ticket Médio */}
                <div>
                  <Label className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <DollarSign className="h-4 w-4 text-[#6841FA]" />
                      Ticket Médio
                    </span>
                    <Badge variant="outline" className="text-[#6841FA]">
                      {formatCurrency(ticketMedio)}
                    </Badge>
                  </Label>
                  <input
                    type="range"
                    min="15"
                    max="200"
                    step="5"
                    value={ticketMedio}
                    onChange={(e) => setTicketMedio(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#6841FA]"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>R$ 15</span>
                    <span>R$ 200</span>
                  </div>
                </div>

                {/* Pedidos por Mês */}
                <div>
                  <Label className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <TrendingUp className="h-4 w-4 text-[#6841FA]" />
                      Pedidos por Cliente/Mês
                    </span>
                    <Badge variant="outline" className="text-[#6841FA]">
                      {pedidosMes}x
                    </Badge>
                  </Label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={pedidosMes}
                    onChange={(e) => setPedidosMes(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#6841FA]"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>1x</span>
                    <span>10x</span>
                  </div>
                </div>

                {/* Taxa de Retenção */}
                <div>
                  <Label className="mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <Percent className="h-4 w-4 text-[#6841FA]" />
                      Taxa de Retenção Atual
                    </span>
                    <Badge variant="outline" className="text-[#6841FA]">
                      {taxaRetencao}%
                    </Badge>
                  </Label>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    step="5"
                    value={taxaRetencao}
                    onChange={(e) => setTaxaRetencao(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#6841FA]"
                  />
                  <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                    <span>10%</span>
                    <span>80%</span>
                  </div>
                </div>

                <div className="rounded-lg bg-[#6841FA]/5 p-4 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2 font-medium text-foreground">
                    <Lightbulb className="h-4 w-4 text-[#6841FA]" />
                    Dica:
                  </p>
                  <p className="mt-1">
                    Ajuste os valores conforme a realidade do seu restaurante.
                    Não sabe sua taxa de retenção? Use 30% como referência.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Results Cards */}
            <div className="space-y-6">
              {/* Main Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Seu Potencial de Crescimento</CardTitle>
                  <CardDescription>
                    Veja quanto você pode aumentar em receita
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Receita Atual */}
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-sm text-muted-foreground">Receita Mensal Atual</p>
                    <p className="text-2xl font-bold">
                      {formatCurrency(resultados.receitaMensalAtual)}
                    </p>
                  </div>

                  {/* Métricas Principais */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-green-50 p-4 text-center">
                      <p className="text-xs font-medium text-green-800">Aumento Mensal</p>
                      <p className="mt-1 text-xl font-bold text-green-600">
                        {formatCurrency(resultados.aumentoMensal)}
                      </p>
                    </div>

                    <div className="rounded-lg bg-blue-50 p-4 text-center">
                      <p className="text-xs font-medium text-blue-800">Aumento Anual</p>
                      <p className="mt-1 text-xl font-bold text-blue-600">
                        {formatCurrency(resultados.aumentoAnual)}
                      </p>
                    </div>

                    <div className="rounded-lg bg-purple-50 p-4 text-center">
                      <p className="text-xs font-medium text-purple-800">ROI Anual</p>
                      <p className="mt-1 text-xl font-bold text-purple-600">
                        {resultados.roi.toFixed(0)}%
                      </p>
                    </div>

                    <div className="rounded-lg bg-orange-50 p-4 text-center">
                      <p className="text-xs font-medium text-orange-800">Payback</p>
                      <p className="mt-1 text-xl font-bold text-orange-600">
                        {(resultados.paybackMeses * 30).toFixed(0)} dias
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comparativo */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-[#6841FA]" />
                    Equivalente em Novos Clientes
                  </CardTitle>
                  <CardDescription>
                    Para ter o mesmo aumento de receita sem o RecompraAI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-gradient-to-r from-orange-50 to-red-50 p-6 text-center">
                    <p className="text-5xl font-bold text-[#6841FA]">
                      +{resultados.novosClientesEquivalentes}
                    </p>
                    <p className="mt-2 text-lg font-medium text-foreground">
                      novos clientes todo mês
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Com o RecompraAI, você aumenta a receita{" "}
                    <strong>sem gastar com aquisição</strong>, apenas fidelizando
                    quem já é seu cliente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Como Calculamos Esses Números?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
              Baseado em dados reais de mais de 500 restaurantes usando o RecompraAI
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6841FA]/10">
                    <TrendingUp className="h-6 w-6 text-[#6841FA]" />
                  </div>
                </div>
                <h3 className="mb-2 font-bold">+40% Retenção</h3>
                <p className="text-sm text-muted-foreground">
                  Campanhas automatizadas aumentam em 40% a taxa de clientes que
                  voltam a comprar regularmente
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6841FA]/10">
                    <Users className="h-6 w-6 text-[#6841FA]" />
                  </div>
                </div>
                <h3 className="mb-2 font-bold">35% Clientes Recuperados</h3>
                <p className="text-sm text-muted-foreground">
                  Recuperamos 35% dos clientes inativos com campanhas de reativação
                  personalizadas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6841FA]/10">
                    <Calculator className="h-6 w-6 text-[#6841FA]" />
                  </div>
                </div>
                <h3 className="mb-2 font-bold">+20% Frequência</h3>
                <p className="text-sm text-muted-foreground">
                  Clientes fidelizados fazem 20% mais pedidos por mês com o programa
                  de fidelização
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-lg bg-muted p-6 text-center text-sm text-muted-foreground">
            <strong>Nota:</strong> Os valores são estimativas baseadas em dados
            médios de clientes. Resultados individuais podem variar conforme o
            segmento, execução das campanhas e engajamento dos clientes.
          </div>
        </div>
      </section>

      {/* CTA Final usando o componente Cta4 */}
      <Cta4
        title="Pronto para Ver Esses Resultados no Seu Restaurante?"
        description="Agende uma demonstração gratuita e descubra como o RecompraAI pode transformar a recompra e fidelização dos seus clientes."
        buttonText="Agendar Demonstração Gratuita"
        buttonUrl="/contato"
        items={[
          "Implementação em 7 dias",
          "Suporte dedicado incluso",
          "Sem contrato de fidelidade",
          "Resultados visíveis em 30 dias",
          "Garantia de satisfação",
        ]}
      />
    </>
  );
}
