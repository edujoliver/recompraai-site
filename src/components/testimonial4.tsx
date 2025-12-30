import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Testimonial4 = () => {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5FF 50%, #FFFFFF 100%)" }}>
      {/* SVG Quote Pattern Background */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]" 
        aria-hidden="true"
      >
        <defs>
          <pattern id="quote-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <text x="40" y="120" fontSize="140" fill="#6841FA" fontWeight="bold" fontFamily="Georgia, serif">&ldquo;</text>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#quote-pattern)" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            DEPOIMENTOS
          </p>
          <h2 className="mb-4 text-3xl font-semibold lg:text-5xl">
            Por que restaurantes escolhem o RecompraAI
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Mais de 500 restaurantes já aumentaram suas vendas e fidelização com nossa plataforma de CRM. 
            Veja o que nossos clientes têm a dizer sobre os resultados reais.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80"
              alt="Restaurante moderno com ambiente acolhedor"
              width={800}
              height={600}
              priority
              className="h-72 w-full rounded-md object-cover lg:h-auto"
            />
            <Card className="col-span-2 flex items-center justify-center p-6">
              <div className="flex flex-col gap-4">
                <q className="text-xl font-medium lg:text-3xl">
                  Em 30 dias com o RecompraAI, aumentamos a recompra em 43% e o ticket médio em 28%. 
                  As automações de WhatsApp funcionam no piloto automático e os relatórios nos mostram 
                  exatamente onde investir. Foi a melhor decisão para a nossa rede.
                </q>
                <div className="flex flex-col items-start">
                  <p className="font-semibold">Marcelo Tavares</p>
                  <p className="text-muted-foreground">Sócio-diretor, Rede Sabor & Cia (12 unidades)</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Card>
              <CardContent className="text-foreground/70 px-6 pt-6 leading-7">
                <q>
                  Recuperamos mais de 200 clientes inativos no primeiro mês usando as automações do RecompraAI. 
                  O sistema identifica automaticamente quem parou de comprar e envia ofertas personalizadas. 
                  Sensacional!
                </q>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4 leading-5">
                  <Avatar className="ring-input size-9 rounded-full ring-1">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80"
                      alt="Carlos Mendes"
                      loading="lazy"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">Carlos Mendes</p>
                    <p className="text-muted-foreground">Gerente de Marketing, Burguer Prime</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="text-foreground/70 px-6 pt-6 leading-7">
                <q>
                  A integração com nosso PDV e delivery foi super rápida. 
                  Agora temos visão completa dos clientes em todos os canais e as campanhas geram ROI de 8x. 
                  Indispensável para qualquer restaurante sério.
                </q>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4 leading-5">
                  <Avatar className="ring-input size-9 rounded-full ring-1">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces&q=80"
                      alt="Juliana Costa"
                      loading="lazy"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">Juliana Costa</p>
                    <p className="text-muted-foreground">Proprietária, Bistrô da Vila</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="text-foreground/70 px-6 pt-6 leading-7">
                <q>
                  Antes do RecompraAI, não sabíamos quem eram nossos melhores clientes. 
                  Hoje segmentamos VIPs, enviamos prêmios automáticos e eles voltam 3x mais. 
                  Nossa operação virou outra!
                </q>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4 leading-5">
                  <Avatar className="ring-input size-9 rounded-full ring-1">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&q=80"
                      alt="Rafael Oliveira"
                      loading="lazy"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">Rafael Oliveira</p>
                    <p className="text-muted-foreground">Franqueado, Pizza Express</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial4 };
